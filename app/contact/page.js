import PageHeader from '../../components/PageHeader';
import EnquiryForm from '../../components/EnquiryForm';
import { getCourses } from '../../lib/api';
import { site } from '../../lib/content';
export const metadata = {
  title: 'Contact Us & Book a Trial Class — Home Music Tuition',
  description:
    'Book a trial class or enquire about online, offline, and home music tuition in Burnpur and Asansol. Call +91 81017 38358 or chat on WhatsApp.',
  keywords: [
    'contact home music tuition',
    'book music trial class',
    'music teacher phone number',
    'music tuition admission Burnpur',
    'music classes contact Asansol',
  ],
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: 'Contact Us & Book a Class — Home Music Tuition',
    description: 'Tell us about your child and the instrument they love. Book a trial class or chat with us on WhatsApp.',
    url: '/contact/',
    images: [{ url: '/hero-image.webp', width: 1200, height: 630, alt: 'Contact Home Music Tuition' }],
  },
};
export default async function Contact() {
  const courses = await getCourses();
  return (
    <main>
      <PageHeader eyebrow="Contact" title="Book a Class Class" intro="Tell us about your child and the instrument they love. We will get back to you quickly." crumbs={[['Contact']]} />
      <section className="sec"><div className="w split" style={{ alignItems: 'start' }}>
        <div><h2 style={{ fontSize: 'clamp(26px,3vw,38px)' }}>Talk to us</h2>
          <div className="cd">
            <a href={`https://wa.me/${site.whatsapp}`}><small>WhatsApp</small>Chat with us</a>
            <a href={`tel:${site.phone1.replace(/\s/g, '')}`}><small>Phone</small>{site.phone1}</a>
            {/* <a href={`tel:${site.phone2.replace(/\s/g, '')}`}><small>Phone</small>{site.phone2}</a> */}
            <a href={`mailto:${site.email}`}><small>Email</small>{site.email}</a>
            <div><small>Address</small><a href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x39f71e5c9488b5fb:0x76d98d99c3c9737c!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF" target="_blank" rel="noopener noreferrer">{site.address}</a></div><div><small>Timings</small>{site.hours}</div></div>
          <div
            style={{
              marginTop: 24,
              aspectRatio: '16/9',
              overflow: 'hidden',
              borderRadius: 12,
            }}
          >
            {/* <iframe
              src="https://www.google.com/maps?q=23.6707245,86.9315343&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Our location on Google Maps"
            /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29233.16213627061!2d86.91093472180019!3d23.67076249354388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71e5c9488b5fb%3A0x76d98d99c3c9737c!2sBurnpur%2C%20Asansol%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1793813448981!5m2!1sen!2sin" width="600" height="450" style={{"border":0}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>

        <div id="enquire" style={{ scrollMarginTop: 100 }}>
          <EnquiryForm courses={courses} />
        </div>
      </div></section>
    </main>
  );
}
