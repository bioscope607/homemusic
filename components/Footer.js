import Link from 'next/link';
import { site } from '../lib/content';
import Image from 'next/image';
const L = [['Home', '/'], ['About', '/about/'], ['Courses', '/courses/'], ['Exams', '/exams/'], ['Achievements', '/achievements/'], ['Home Tuition', '/home-tuition/'], ['Gallery', '/gallery/'], ['Blog', '/blog/'], ['Contact', '/contact/']];
export default function Footer() {
  return (
    <footer><div className="w">
      <div className="fg">
        <div>
          <Link className="logo" href="/" style={{ color: 'var(--ink)' }}>
            <Image src="/logo.PNG" alt="Home Music Tuition logo" width={575} height={496}
              style={{ height: 64, width: 'auto' }} />
              Home Music Tuition
          </Link>
          <p style={{ margin: '14px 0 4px' }}><b style={{ color: 'var(--accent)' }}>The beginning of tomorrow • Starts from here</b></p>
          <p style={{ margin: '0 0 8px' }}>
            Phone: <a href={`tel:${site.phone1.replace(/\s/g, '')}`}>{site.phone1}</a>
            <br />
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p style={{ whiteSpace: 'pre-line', margin: 0 }}>Address:{'\n'}{site.address}</p>
        </div>
        <div><h4>Navigate</h4><ul>{L.map(([t, h]) => <li key={h}><Link href={h}>{t}</Link></li>)}</ul></div>
        <div>
          <h4>Follow</h4>
            <ul style={{ columns: 1 }}>
              <li><a href="https://www.facebook.com/share/1KHdE61yb8/" target="_blank">Facebook</a></li>
              <li><a href="https://www.instagram.com/homemusictuition?xtok=ZDNlZDc0MzIxNw==" target="_blank">Instagram</a></li>
              <li><a href="https://www.youtube.com/@homemusictuition?si=cho01ajPh5iiswaP" target="_blank">YouTube</a></li>
              <li><a href="https://x.com/HOMEMUSICT90" target="_blank">Twitter</a></li>
            </ul></div>
      </div>
      <div style={{ borderTop: '1px solid var(--line)', paddingTop: 20, fontSize: 13 }}>© Home Music Tuition</div>
    </div></footer>
  );
}
