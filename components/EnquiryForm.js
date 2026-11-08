'use client';
import { useState } from 'react';

export default function EnquiryForm({ courses }) {
  const [st, setSt] = useState('');
  const [msg, setMsg] = useState('');

  async function submit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = Object.fromEntries(new FormData(f));
    if (d.website) return; // honeypot: bots fill this hidden field
    setSt('sending');
    setMsg('');
    try {
      const r = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(d),
      });
      const res = await r.json().catch(() => ({}));
      if (!r.ok) {
        throw new Error(res?.error || 'Failed to send enquiry');
      }
      f.reset();
      setSt('ok');
      setMsg('Thank you! Your enquiry has been sent. We will contact you shortly.');
    } catch (err) {
      setSt('err');
      setMsg(err.message || 'Something went wrong. Please contact us on WhatsApp instead.');
    }
  }

  return (
    <form onSubmit={submit}>
      <label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label>
      <label>Phone Number<input name="phone" type="tel" required autoComplete="tel" placeholder="+91 98765 43210" /></label>
      <label className="f1">Email<input name="email" type="email" autoComplete="email" placeholder="name@example.com" /></label>
      <label>
        Interested Course
        <select name="course">
          {(courses || []).length > 0 ? (
            courses.map((c) => <option key={c.slug}>{c.name}</option>)
          ) : (
            <>
              <option>Piano / Keyboard</option>
              <option>Guitar</option>
              <option>Ukulele</option>
              <option>Violin</option>
              <option>Flute</option>
              <option>Tabla</option>
              <option>Classical Singing</option>
            </>
          )}
        </select>
      </label>
      <label>Preferred Mode<select name="mode"><option>Online</option><option>Offline</option><option>Home Tuition</option></select></label>
      <label className="f1">Message<textarea name="message" rows={3} placeholder="Tell us about the learner's age, musical goals, etc." /></label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />
      <button className="btn" disabled={st === 'sending'}>{st === 'sending' ? 'Sending…' : 'Send Enquiry'}</button>
      {msg && (
        <div className="f1" style={{ marginTop: 10 }}>
          <p
            role="status"
            style={{
              color: st === 'ok' ? '#15803d' : '#b91c1c',
              fontWeight: 500,
              margin: 0,
            }}
          >
            {msg}
          </p>
          {st === 'err' && (
            <a
              href="https://wa.me/918101738358"
              target="_blank"
              rel="noopener noreferrer"
              className="btn wa"
              style={{ display: 'inline-flex', marginTop: 10, fontSize: 13, padding: '8px 16px' }}
            >
              Chat on WhatsApp instead →
            </a>
          )}
        </div>
      )}
    </form>
  );
}
