import { notFound } from 'next/navigation';
import Link from 'next/link';
import Photo from '../../../components/Photo';
import PageHeader from '../../../components/PageHeader';
import CtaBand from '../../../components/CtaBand';
import { getPost, getPosts } from '../../../lib/api';
import { site } from '../../../lib/content';
export const dynamicParams = false;
export async function generateStaticParams() { return (await getPosts()).map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = await getPost(slug);
  return p
    ? {
        title: p.title,
        description: p.excerpt,
        keywords: [p.category, 'music learning', 'music education', 'music student tips', p.title],
        alternates: { canonical: `/blog/${slug}/` },
        openGraph: {
          title: p.title,
          description: p.excerpt,
          type: 'article',
          url: `/blog/${slug}/`,
          images: p.photo ? [{ url: p.photo }] : [{ url: '/hero-image.webp' }],
        },
        twitter: {
          card: 'summary_large_image',
          title: p.title,
          description: p.excerpt,
          images: p.photo ? [p.photo] : ['/hero-image.webp'],
        },
      }
    : {};
}
export default async function Post({ params }) {
  const { slug } = await params; const p = await getPost(slug); if (!p) notFound();
  const more = (await getPosts()).filter((x) => x.slug !== slug).slice(0, 2);
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: p.title, description: p.excerpt, author: { '@type': 'Organization', name: site.name }, publisher: { '@type': 'Organization', name: site.name } };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHeader eyebrow={p.category} title={p.title} crumbs={[['Blog', '/blog/'], [p.category]]} />
      <article className="sec">
        <div className="w">
          <Photo src={p.photo} alt={p.title} glyph={p.glyph} hue={p.hue} priority style={{ aspectRatio: '16/8', marginBottom: 40 }} />
          <div className="art"><p className="meta">{p.date} · {p.readTime}</p>{p.body.map((t, i) => <p key={i}>{t}</p>)}</div>
        </div>
      </article>
      <section className="sec alt"><div className="w"><h2 style={{ marginBottom: 36 }}>Keep reading</h2><div className="g3" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>{more.map((m) => (
        <Link className="post" href={`/blog/${m.slug}/`} key={m.slug}><Photo src={m.photo} alt={m.title} glyph={m.glyph} hue={m.hue} /><span className="tag">{m.category}</span><h3>{m.title}</h3><span className="link">Read Article →</span></Link>))}</div></div></section>
      <CtaBand />
    </main>
  );
}
