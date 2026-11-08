'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const L = [['Home', '/'], ['About', '/about/'], ['Courses', '/courses/'], ['Leadership', '/about/#leadership'], ['Exams', '/exams/'], ['Achievements', '/achievements/'], ['Home Tuition', '/home-tuition/'], ['Gallery', '/gallery/'], ['Blog', '/blog/'], ['Contact', '/contact/']];
export default function Header() {
  const [o, setO] = useState(false);
  return (
    <header>
      <div className="w nav">
        <Link className="logo" href="/">
          <Image src="/logo.PNG" alt="Home Music Tuition logo" width={44} height={44} priority />
          Home Music Tuition
        </Link>
        <nav><ul className={o ? 'on' : ''} onClick={() => setO(false)}>{L.map(([t, h]) => <li key={h}><Link href={h}>{t}</Link></li>)}</ul></nav>
        <Link className="btn gold" href="/#contact">Book a Class</Link>
        <button className="burger" aria-label="Menu" aria-expanded={o} onClick={() => setO(!o)}>☰</button>
      </div>
    </header>
  );
}
