import Link from 'next/link';
import Photo from '../../components/Photo';
import PageHeader from '../../components/PageHeader';
import CtaBand from '../../components/CtaBand';
import { getPosts } from '../../lib/api';
export const metadata = {
  title: 'Music Journal — Articles, Guides & Tips for Music Learners',
  description:
    'Expert advice for parents and learners: choosing the right instrument, exam preparation guides, building practice habits, and musical development.',
  keywords: [
    'music blog',
    'music learning tips',
    'how to learn guitar',
    'choosing musical instrument for kids',
    'music exam preparation tips',
    'piano practice guide',
  ],
  alternates: { canonical: '/blog/' },
  openGraph: {
    title: 'Music Journal — From Our Music Room',
    description: 'Expert advice for parents and learners on music education, exams, and instrument mastery.',
    url: '/blog/',
    images: [{ url: '/hero-image.webp', width: 1200, height: 630, alt: 'Music Journal' }],
  },
};
export default async function Blog() {
  const [first, ...rest] = await getPosts();
  return (
    <main>
      <PageHeader eyebrow="Music journal" title="From Our Music Room" intro="Advice for parents and learners." crumbs={[['Blog']]} />
      <section className="sec"><div className="w">
        {first && <Link className="feat" href={`/blog/${first.slug}/`}><Photo src={first.photo} alt={first.title} glyph={first.glyph} hue={first.hue} priority /><div><span className="tag">{first.category} · {first.date}</span><h2 style={{ margin: '14px 0' }}>{first.title}</h2><p>{first.excerpt}</p><span className="link">Read Article →</span></div></Link>}
        <div className="g3">{rest.map((p) => (
          <Link className="post" href={`/blog/${p.slug}/`} key={p.slug}><Photo src={p.photo} alt={p.title} glyph={p.glyph} hue={p.hue} /><span className="tag">{p.category}</span><h3>{p.title}</h3><p>{p.excerpt}</p><span className="link">Read Article →</span></Link>))}</div>
      </div></section>
      <CtaBand />
    </main>
  );
}
