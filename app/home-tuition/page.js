import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import CtaBand from '../../components/CtaBand';
import Photo from '../../components/Photo';
import { getHomeTuition } from '../../lib/api';
export const metadata = {
  title: 'Private Home Music Tuition — Guitar, Piano, Tabla & Singing at Home',
  description:
    'Comfortable, personalized 1-on-1 music lessons in your own living room across Burnpur & Asansol. Learn Guitar, Piano, Keyboard, Violin, Tabla and Singing at home with experienced teachers.',
  keywords: [
    'home music tuition',
    'private music teacher at home',
    'guitar teacher home visit',
    'piano classes at home',
    'tabla tutor home tuition',
    'singing classes at home',
    'music lessons Burnpur',
    'music teacher Asansol',
  ],
  alternates: { canonical: '/home-tuition/' },
  openGraph: {
    title: 'Private Home Music Tuition — Learn Music at Home',
    description:
      'Personalized music lessons in your own living room. No travel, no rush — dedicated 1-on-1 lessons in Guitar, Piano, Tabla, Violin & Singing.',
    url: '/home-tuition/',
    images: [{ url: '/teacher_at_home.webp', width: 1306, height: 816, alt: 'Teacher at home music lesson' }],
  },
};
export default async function HomeTuition() {
  const h = await getHomeTuition();
  return (
    <main>
      <PageHeader eyebrow="Home tuition" title="Bring Music Home" intro={h.intro} crumbs={[['Home Tuition']]} />
      <section className="sec"><div className="w split">
        <Photo glyph="🏠" caption="Photo · teacher at home" hue={32} style={{ aspectRatio: '1306/816' }} src="/teacher_at_home.webp"/>
        <div><div className="eyebrow">Why families choose it</div><h2>Lessons that fit your life</h2>
          <ul className="ticks">{h.benefits.map((b) => <li key={b.title}><b>{b.title}.</b> {b.text}</li>)}</ul>
          <Link className="btn gold" href="/contact/#enquire">Book a Class</Link></div>
      </div></section>
      <section className="sec alt"><div className="w"><h2 style={{ marginBottom: 40 }}>How it works</h2><div className="steps3">{h.steps.map((s) => <div key={s.t}><b>{s.t}</b><p>{s.text}</p></div>)}</div></div></section>
      <section className="sec"><div className="w"><h2 style={{ marginBottom: 30 }}>Common questions</h2><div className="faq">{h.faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>
      <CtaBand />
    </main>
  );
}
