import Link from 'next/link';
import Photo from '../../components/Photo';
import PageHeader from '../../components/PageHeader';
import CtaBand from '../../components/CtaBand';
import { getCourses } from '../../lib/api';
export const metadata = {
  title: 'Music Courses — Piano, Guitar, Violin, Tabla, Flute & Singing',
  description:
    'Explore comprehensive music courses for kids, beginners and advanced learners: Keyboard, Piano, Guitar, Ukulele, Violin, Flute, Tabla, Classical Singing and Suro Bharati Sangeet Kala  Kendra exam syllabus.',
  keywords: [
    'music courses',
    'guitar classes',
    'piano lessons',
    'tabla classes',
    'violin classes',
    'flute lessons',
    'classical singing classes',
    'ukulele classes',
    'music classes Burnpur Asansol',
  ],
  alternates: { canonical: '/courses/' },
  openGraph: {
    title: 'Music Courses — Piano, Guitar, Violin, Tabla, Flute & Singing',
    description: 'Seven instruments taught by experienced educators. Online, offline, and home tuition classes.',
    url: '/courses/',
    images: [{ url: '/hero-image.webp', width: 1200, height: 630, alt: 'Home Music Tuition Courses' }],
  },
};
export default async function Courses() {
  const list = await getCourses();
  return (
    <main>
      <PageHeader eyebrow="Courses" title="Explore Our World of Music" intro="Seven instruments, taught by experienced teachers, online, offline or at home." crumbs={[['Courses']]} />
      <section className="sec"><div className="w"><div className="cg">{list.map((c) => (
        <Link className="cc" href={`/courses/${c.slug}/`} key={c.slug}>
          <Photo src={c.photo} alt={c.photoAlt} glyph={c.glyph} hue={c.hue} sizes="(max-width:900px) 100vw, 33vw" />
          <h3>{c.name}</h3><p>{c.blurb}</p><div className="chips"><span>{c.ages}</span>{c.examReady && <span>Exam preparation</span>}</div><span className="link">Learn More →</span>
        </Link>))}</div></div></section>
      <section className="sec alt"><div className="w"><div className="eyebrow">How you can learn</div><h2 style={{ marginBottom: 40 }}>Three ways to join</h2>
        <div className="steps3">{[['Online', 'Live lessons from home, flexible and easy to schedule.'], ['Offline', 'In-person classes with a teacher and a real instrument.'], ['Home tuition', 'A teacher comes to you for personalised lessons.']].map(([t, x]) => <div key={t}><b>{t}</b><p>{x}</p></div>)}</div></div></section>
      <CtaBand />
    </main>
  );
}
