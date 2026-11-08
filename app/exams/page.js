import PageHeader from '../../components/PageHeader';
import CtaBand from '../../components/CtaBand';
import Photo from '../../components/Photo';
import { getExams } from '../../lib/api';
export const metadata = {
  title: 'Music Exam Preparation — Suro Bharati Sangeet Kala  Kendra Affiliated Center',
  description:
    'Official preparation for music grade examinations affiliated with Suro Bharati Sangeet Kala  Kendra (Affiliation No: C-24-100453 & WB25-0148). Practical and theory syllabus mastery, certifications, and recognized diplomas.',
  keywords: [
    'music exam preparation',
    'Suro Bharati Sangeet Kala  Kendra',
    'music board exams',
    'music examination center Burnpur Asansol',
    'music diploma certificate',
    'classical music grade exams',
    'music theory and practical exam',
  ],
  alternates: { canonical: '/exams/' },
  openGraph: {
    title: 'Music Exam Preparation — Suro Bharati Sangeet Kala  Kendra Affiliated Center',
    description:
      'Structured preparation and regular practice for examinations conducted by Suro Bharati Sangeet Kala  Kendra. Certifications, medals and recognized diplomas.',
    url: '/exams/',
    images: [{ url: '/exams/exam.webp', width: 800, height: 600, alt: 'Music Exam Preparation' }],
  },
};
export default async function Exams() {
  const e = await getExams();
  return (
    <main>
      <PageHeader eyebrow="Exam facilities" title="Prepare. Practice. Perform." intro={e.intro} crumbs={[['Exams']]} />
      <section className="sec"><div className="w split">
        <div><div className="eyebrow">Examination bodies</div><h2>Exams our students prepare for</h2>
          <div className="boards">{e.boards.map((b) =>
            <div className="board" key={b.name}><i>{b.name[0]}</i><div>
              <b>{b.name}</b><small>Examination body · informational reference</small></div></div>)
          }
          </div>
          <p className="note">{e.disclaimer}</p></div>


        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
          {(e.photos || [
            { src: '/exams/exam.webp', caption: 'Photo · exam practice', glyph: '🎼', hue: 205 },
            { src: '/exams/RAWM.webp', caption: 'Photo · exam preparation', glyph: '📜', hue: 205 },
          ]).map((p, idx) => (
            <Photo
              key={idx}
              glyph={p.glyph || (idx === 0 ? '🎼' : '📜')}
              src={p.src || p}
              alt={p.alt || p.caption || 'Exam photo'}
              caption={p.caption}
              hue={p.hue || 205}
              style={{ aspectRatio: '1' }}
            />
          ))}
        </div>
      </div></section>
      <section className="sec alt"><div className="w"><h2 style={{ marginBottom: 40 }}>How preparation works</h2>
        <div className="steps3">{e.steps.map((s) => <div key={s.t}><b>{s.t}</b><p>{s.text}</p></div>)}</div></div></section>
      <section className="sec"><div className="w"><h2 style={{ marginBottom: 30 }}>Common questions</h2>
        <div className="faq">{e.faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>
      <CtaBand />
    </main>
  );
}
