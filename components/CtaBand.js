import Link from 'next/link';
import { site } from '../lib/content';
export default function CtaBand({ title = 'Ready to Begin Your Musical Journey?', text = 'Book a Class class or message us on WhatsApp. We will help you pick the right instrument and mode.' }) {
  return (
    <section className="cband"><div className="w"><h2>{title}</h2><p>{text}</p>
      <div className="cta"><Link className="btn gold" href="/contact/#enquire">Book a Class</Link><a className="btn wa" href={`https://wa.me/${site.whatsapp}`}>Chat on WhatsApp</a></div>
    </div></section>
  );
}
