import { notFound } from 'next/navigation';
import Link from 'next/link';
import Photo from '../../../components/Photo';
import PageHeader from '../../../components/PageHeader';
import CtaBand from '../../../components/CtaBand';
import { getCourse, getCourses } from '../../../lib/api';
import { site } from '../../../lib/content';
export const dynamicParams = false;
export async function generateStaticParams() { return (await getCourses()).map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = await getCourse(slug);
  return c
    ? {
        title: `${c.name} Classes — Learn ${c.name} at Home, Offline & Online`,
        description: `${c.blurb} Expert 1-on-1 instruction for beginners and advanced students with certified exam preparation.`,
        keywords: [
          `${c.name} classes`,
          `learn ${c.name}`,
          `${c.name} teacher near me`,
          `${c.name} lessons Burnpur`,
          `${c.name} classes Asansol`,
          `${c.name} home tuition`,
          `${c.name} exam preparation`,
        ],
        alternates: { canonical: `/courses/${slug}/` },
        openGraph: {
          title: `${c.name} Classes — Home Music Tuition`,
          description: c.blurb,
          url: `/courses/${slug}/`,
          images: c.photo ? [{ url: c.photo }] : [{ url: '/hero-image.webp' }],
        },
      }
    : {};
}
export default async function Course({ params }) {
  const { slug } = await params; const c = await getCourse(slug); if (!c) notFound();
  const more = (await getCourses()).filter((x) => x.slug !== slug).slice(0, 3);
  const ld = { '@context': 'https://schema.org', '@type': 'Course', name: `${c.name} Classes`, description: c.description, provider: { '@type': 'EducationalOrganization', name: site.name } };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHeader eyebrow="Course" title={`${c.name} Classes`} intro={c.blurb} crumbs={[['Courses', '/courses/'], [c.name]]} />
      <section className="sec"><div className="w split" style={{ alignItems: 'start' }}>
        <div>
          <Photo src={c.photo} alt={c.photoAlt} glyph={c.glyph} hue={c.hue} priority style={{ aspectRatio: '16/10' }} />
          {c.why && (
            <>
              <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', margin: '40px 0 14px' }}>Why learn {c.name}?</h2>
              <p style={{ color: 'var(--mute)', fontSize: 18, whiteSpace: 'pre-line' }}>{c.why}</p>
            </>
          )}
          <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', margin: '40px 0 14px' }}>About this course</h2>
          <p style={{ color: 'var(--mute)', fontSize: 18 }}>{c.description}</p>
          <h3 style={{ fontSize: 24, margin: '30px 0 0' }}>What you will learn</h3>
          <ul className="ticks">{c.learn.map((l) => <li key={l}>{l}</li>)}</ul>
        </div>
        <aside className="fact"><dl>
          <div><dt>Suitable for</dt><dd>{c.ages}</dd></div><div><dt>Format</dt><dd>{c.format}</dd></div>
          <div><dt>Exam preparation</dt><dd>{c.examReady ? 'Available' : 'On request'}</dd></div></dl>
          <Link className="btn gold" href="/contact/#enquire">Book a Class</Link>
          <a className="btn wa" href={`https://wa.me/${site.whatsapp}`}>Enquire on WhatsApp</a>
        </aside>
      </div></section>
      <section className="sec alt"><div className="w"><h2 style={{ marginBottom: 36 }}>More instruments</h2>
        <div className="cg">{more.map((m) => (
          <Link className="cc" href={`/courses/${m.slug}/`} key={m.slug}><Photo src={m.photo} alt={m.photoAlt} glyph={m.glyph} hue={m.hue} /><h3>{m.name}</h3><p>{m.blurb}</p><span className="link">Learn More →</span></Link>))}</div></div></section>
      <CtaBand />
    </main>
  );
}
