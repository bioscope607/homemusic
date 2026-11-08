import Link from 'next/link';
export default function PageHeader({ eyebrow, title, intro, crumbs = [] }) {
  return (
    <section className="phd"><div className="w">
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link>{crumbs.map(([t, h]) => <span key={t}> / {h ? <Link href={h}>{t}</Link> : t}</span>)}</nav>
      <div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{intro && <p>{intro}</p>}
    </div></section>
  );
}
