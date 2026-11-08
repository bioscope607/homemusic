import PageHeader from '../../components/PageHeader';
import CtaBand from '../../components/CtaBand';
import Photo from '../../components/Photo';
import { getAchievements } from '../../lib/api';
export const metadata = {
  title: 'Student Achievements & Awards — Medals, Diplomas & Recognition',
  description:
    'Certificates, medals, award ceremonies, and examination toppers at Home Music Tuition. Celebrating student dedication, talent, and milestone achievements.',
  keywords: [
    'music student achievements',
    'music award ceremony',
    'music examination results',
    'music competition medals',
    'student certificates Burnpur',
  ],
  alternates: { canonical: '/achievements/' },
  openGraph: {
    title: 'Student Achievements & Awards — Home Music Tuition',
    description: 'Celebrating every achievement: board examination medals, diplomas, certificates, and stage honors.',
    url: '/achievements/',
    images: [{ url: '/hero-image.webp', width: 1200, height: 630, alt: 'Student Achievements' }],
  },
};
export default async function Achievements() {
  const a = await getAchievements();
  return (
    <main>
      <PageHeader eyebrow="Achievements" title="Celebrating Every Achievement" intro="Students may receive certificates and medals based on examination performance. We also recognise dedication, progress and achievements." crumbs={[['Achievements']]} />
      <section className="sec"><div className="w">
        <div className="mos">{a.photos.map((p) => <Photo key={p.caption} src={p.photo} alt={p.caption} glyph={p.glyph} caption={p.caption} hue={p.hue} sizes="50vw" />)}</div>
        <div className="stats">{a.stats.map(([b, s]) => <div key={b}><b>{b}</b><span>{s}</span></div>)}</div>
        <div className="al">{a.items.map((i) => <div key={i.title}><b>{i.year}</b><div><h3 style={{ fontSize: 20 }}>{i.title}</h3><p>{i.text}</p></div></div>)}</div>
      </div></section>
      <CtaBand title="Be our next success story" />
    </main>
  );
}
