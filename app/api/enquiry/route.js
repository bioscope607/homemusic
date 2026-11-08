const clean = (s) => String(s || '').trim().slice(0, 1000);
const esc = (s) =>
  clean(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]));
const okEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || '').trim());

async function appendToGoogleSheet(payload) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    console.warn('[Enquiry] GOOGLE_SHEET_WEBHOOK_URL is not configured in .env');
    return { ok: false, skipped: true };
  }

  try {
    // Append query params so data is 100% preserved even across Google Apps Script 302 redirects
    const url = new URL(webhookUrl);
    Object.entries(payload).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.append(k, String(v));
    });

    console.log('[Enquiry] Submitting to Google Sheet...');
    const res = await fetch(url.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    const bodyText = await res.text().catch(() => '');
    console.log(`[Enquiry] Google Sheet response: status ${res.status}`, bodyText.slice(0, 150));
    return { ok: res.ok };
  } catch (err) {
    console.error('[Enquiry] Google Sheets backup error:', err);
    return { ok: false, error: err.message };
  }
}

export async function POST(req) {
  let d;
  try {
    d = await req.json();
  } catch {
    return Response.json({ error: 'Invalid JSON request' }, { status: 400 });
  }

  // Honeypot check: automated spam bots fill this hidden input
  if (d.website) {
    return Response.json({ ok: true });
  }

  const name = clean(d.name);
  const phone = clean(d.phone);
  const email = clean(d.email);
  const course = clean(d.course) || 'General Enquiry';
  const mode = clean(d.mode) || 'Not specified';
  const message = clean(d.message);

  if (!name || !phone) {
    return Response.json({ error: 'Name and phone number are required.' }, { status: 400 });
  }

  // 1. Backup to Google Sheets
  const sheetPromise = appendToGoogleSheet({ name, phone, email, course, mode, message });

  // 2. Prepare Brevo Email
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const senderEmail = process.env.BREVO_SENDER?.trim() || 'homemusictui90@gmail.com';
  const toEmail = process.env.ENQUIRY_TO?.trim() || 'homemusictui90@gmail.com';

  const cleanPhone = phone.replace(/[^0-9+]/g, '');
  const waPhone = cleanPhone.replace(/^\+/, '');

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Student Enquiry</title>
</head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background-color:#f4f6f8;margin:0;padding:24px;color:#1e293b;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,0.06);border:1px solid #e2e8f0;">
    <div style="background:#0A1F44;padding:28px 24px;text-align:center;border-bottom:3px solid #E2B04A;">
      <h1 style="color:#ffffff;margin:0;font-size:22px;letter-spacing:-0.02em;">Home Music Tuition</h1>
      <p style="color:#E2B04A;margin:6px 0 0;font-size:14px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">New Student Enquiry</p>
    </div>
    
    <div style="padding:28px 24px;">
      <p style="font-size:16px;margin-top:0;margin-bottom:20px;color:#334155;">
        You received a new enquiry through the website contact form:
      </p>

      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-size:15px;">
        <tr style="border-bottom:1px solid #f1f5f9;">
          <td style="padding:10px 0;color:#64748b;font-weight:600;width:140px;">Student Name:</td>
          <td style="padding:10px 0;color:#0f172a;font-weight:700;">${esc(name)}</td>
        </tr>
        <tr style="border-bottom:1px solid #f1f5f9;">
          <td style="padding:10px 0;color:#64748b;font-weight:600;">Phone Number:</td>
          <td style="padding:10px 0;color:#0f172a;">
            <a href="tel:${esc(cleanPhone)}" style="color:#0A1F44;text-decoration:none;font-weight:600;">${esc(phone)}</a>
          </td>
        </tr>
        <tr style="border-bottom:1px solid #f1f5f9;">
          <td style="padding:10px 0;color:#64748b;font-weight:600;">Email:</td>
          <td style="padding:10px 0;color:#0f172a;">
            ${okEmail(email) ? `<a href="mailto:${esc(email)}" style="color:#0A1F44;text-decoration:none;">${esc(email)}</a>` : '<span style="color:#94a3b8;">Not provided</span>'}
          </td>
        </tr>
        <tr style="border-bottom:1px solid #f1f5f9;">
          <td style="padding:10px 0;color:#64748b;font-weight:600;">Interested Course:</td>
          <td style="padding:10px 0;color:#0A1F44;font-weight:700;">${esc(course)}</td>
        </tr>
        <tr style="border-bottom:1px solid #f1f5f9;">
          <td style="padding:10px 0;color:#64748b;font-weight:600;">Preferred Mode:</td>
          <td style="padding:10px 0;color:#0f172a;">${esc(mode)}</td>
        </tr>
        ${message ? `
        <tr>
          <td style="padding:12px 0 6px;color:#64748b;font-weight:600;vertical-align:top;">Message:</td>
          <td style="padding:12px 0 6px;color:#334155;white-space:pre-wrap;line-height:1.5;">${esc(message)}</td>
        </tr>
        ` : ''}
      </table>

      <div style="background:#f8fafc;padding:16px;border-radius:10px;margin-bottom:20px;border:1px solid #e2e8f0;text-align:center;">
        <span style="font-size:13px;color:#64748b;display:block;margin-bottom:10px;font-weight:600;">Quick Actions:</span>
        <a href="tel:${esc(cleanPhone)}" style="display:inline-block;background:#0A1F44;color:#ffffff;padding:8px 16px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;margin-right:8px;">Call</a>
        ${waPhone ? `<a href="https://wa.me/${esc(waPhone)}" style="display:inline-block;background:#25D366;color:#ffffff;padding:8px 16px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;margin-right:8px;">WhatsApp</a>` : ''}
        ${okEmail(email) ? `<a href="mailto:${esc(email)}" style="display:inline-block;background:#64748b;color:#ffffff;padding:8px 16px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">Email</a>` : ''}
      </div>
    </div>

    <div style="background:#f1f5f9;padding:14px;text-align:center;font-size:12px;color:#94a3b8;border-top:1px solid #e2e8f0;">
      Home Music Tuition • Burnpur, West Bengal • Sent from website enquiry form
    </div>
  </div>
</body>
</html>
  `.trim();

  const textContent = `
New Student Enquiry - Home Music Tuition
-----------------------------------------
Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Course: ${course}
Mode: ${mode}
${message ? `Message:\n${message}\n` : ''}
-----------------------------------------
Sent from Home Music Tuition website.
  `.trim();

  let brevoOk = false;
  let brevoData = null;
  let brevoError = null;

  if (apiKey) {
    try {
      const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({
          sender: {
            name: 'Home Music Tuition',
            email: senderEmail,
          },
          to: [
            {
              email: toEmail,
              name: 'Home Music Tuition',
            },
          ],
          ...(okEmail(email) ? { replyTo: { email, name } } : {}),
          subject: `🎶 New Enquiry: ${name} — ${course} (${mode})`,
          htmlContent,
          textContent,
        }),
      });

      if (brevoRes.ok) {
        brevoOk = true;
        brevoData = await brevoRes.json().catch(() => ({}));
      } else {
        const errData = await brevoRes.json().catch(() => null);
        brevoError = errData?.message || `Brevo HTTP error ${brevoRes.status}`;
        console.error('Brevo API Error:', brevoRes.status, errData);
      }
    } catch (err) {
      brevoError = err.message;
      console.error('Brevo fetch error:', err);
    }
  } else {
    brevoError = 'BREVO_API_KEY is not set';
    console.warn('BREVO_API_KEY is not configured in .env');
  }

  // Await the Google Sheets backup result
  const sheetResult = await sheetPromise;

  // If at least one channel succeeded, return success!
  if (brevoOk || sheetResult.ok) {
    return Response.json({
      ok: true,
      messageId: brevoData?.messageId,
      savedToSheet: sheetResult.ok,
      ...(brevoError ? { emailWarning: brevoError } : {}),
    });
  }

  // If both failed, return error to client
  console.error('All enquiry channels failed. Brevo:', brevoError, 'Sheet:', sheetResult.error);
  return Response.json(
    { error: brevoError || sheetResult.error || 'Failed to submit enquiry. Please contact us on WhatsApp instead.' },
    { status: 500 }
  );
}
