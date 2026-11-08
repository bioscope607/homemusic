import PageHeader from '../../components/PageHeader';
import CtaBand from '../../components/CtaBand';
import Photo from '../../components/Photo';
import { getEvents } from '../../lib/api';
export const metadata = {
  title: 'Events & Performances — Stage Shows, Recitals & Annual Concerts',
  description:
    'Experience student performances, annual concerts, stage shows, and award ceremonies that build confidence and turn practice into pride.',
  keywords: [
    'music events Burnpur',
    'student music concerts',
    'annual music performance',
    'music stage shows',
    'music recitals Asansol',
  ],
  alternates: { canonical: '/events/' },
  openGraph: {
    title: 'Events & Performances — From Classroom to Stage',
    description: 'Student performances, annual events and celebrations that turn practice into pride.',
    url: '/events/',
    images: [{ url: '/hero-image.webp', width: 1200, height: 630, alt: 'Music Events' }],
  },
};
export default async function Events() {
  const list = await getEvents();
  return (
    <main>
      <PageHeader eyebrow="Events" title="From the Classroom to the Stage" intro="Performances and celebrations that turn practice into pride." crumbs={[['Events']]} />
      <section className="sec"><div className="w"><div className="g3">{list.map((e) => (
        <div className="ev" key={e.title}><Photo src={e.photo} alt={e.title} glyph={e.glyph} hue={e.hue}></Photo><h3>{e.title}</h3><p>{e.text}</p></div>))}</div></div></section>
      <CtaBand />
    </main>
  );
}
