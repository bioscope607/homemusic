import Link from 'next/link';
export default function NotFound() {
  return (<main className="sec"><div className="w" style={{ textAlign: 'center' }}><div className="eyebrow">404</div><h1 style={{ fontSize: 56 }}>Page not found</h1><p style={{ color: 'var(--mute)', margin: '16px 0 28px' }}>That page may have moved. Let us get you back to the music.</p><Link className="btn gold" href="/">Back to Home</Link></div></main>);
}
