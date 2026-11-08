import Photo from '../../components/Photo';
import PageHeader from '../../components/PageHeader';
import CtaBand from '../../components/CtaBand';
import Leaders from '../../components/Leaders';
import { getAbout, getLeaders } from '../../lib/api';
export const metadata = {
  title: 'About Us — 15 Years of Inspiring Musical Journeys',
  description:
    '15+ years of nurturing musical talent, building confidence, and helping students discover their potential in Burnpur, Asansol and online. Meet our faculty and musical heritage.',
  keywords: [
    'about home music tuition',
    'music school Burnpur',
    'music academy Asansol',
    'experienced music teachers',
    'music institute Paschim Bardhaman',
  ],
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'About Us — 15 Years of Musical Excellence',
    description: '15+ years of nurturing musical talent, building confidence, and helping students discover their potential.',
    url: '/about/',
    images: [{ url: '/banner.jpeg', width: 1200, height: 630, alt: 'About Home Music Tuition' }],
  },
};
export default async function About() {
  const [a, leaders] = await Promise.all([getAbout(), getLeaders()]);
  return (
    <main>
      <PageHeader eyebrow="About us" title="15 Years of Inspiring Musical Journeys" intro={a.intro} crumbs={[['About']]} />
      <section className="sec"><div className="w split">
        <Photo glyph="🎹" src="/banner.jpeg" alt="Home music tution banner" caption="Photo · music learning" hue={195} style={{ aspectRatio: '4/5' }} />
        <div><div className="eyebrow">Our story</div><h2>Where every note begins</h2>{a.story.map((p, i) => <p key={i} style={{ color: 'var(--mute)', fontSize: 18, marginTop: 20 }}>{p}</p>)}</div>
      </div></section>
      <section className="sec alt"><div className="w"><div className="stats" style={{ justifyContent: 'space-between', marginTop: 0 }}>{a.numbers.map(([b, s]) => <div key={s}><b style={{ fontSize: 56 }}>{b}</b><span>{s}</span></div>)}</div></div></section>
      <section className="sec"><div className="w"><div className="eyebrow">What we believe</div><h2 style={{ marginBottom: 40 }}>Our values</h2>
        <div className="vals">{a.values.map((v) => <div key={v.title}><b>{v.title}</b><p>{v.text}</p></div>)}</div></div></section>
      <section className="sec alt" id="leadership"><div className="w"><div className="eyebrow">Leadership</div><h2 style={{ marginBottom: 44, maxWidth: '16ch' }}>Words from Those Who Lead Us</h2><Leaders items={leaders} /></div></section>
      <CtaBand />
    </main>
  );
}
