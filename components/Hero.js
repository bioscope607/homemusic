'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Photo from './Photo';
import { site } from '../lib/content';
const pad = (n) => String(n).padStart(2, '0');

export default function Hero({ slides }) {
  const tr = useRef(null);
  const videoRefs = useRef({});
  const [i, setI] = useState(0);
  const n = slides.length;

  const go = useCallback((k) => {
    const e = tr.current;
    if (!e) return;
    const nextIdx = (k + n) % n;
    e.scrollTo({ left: nextIdx * e.clientWidth, behavior: 'smooth' });
    setI(nextIdx);
  }, [n]);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    if (n <= 1) return;

    const currentSlide = slides[i];
    let timer;

    if (currentSlide?.video) {
      const vid = videoRefs.current[i];
      if (vid) {
        vid.currentTime = 0;
        vid.play().catch(() => {});

        const handleEnded = () => {
          go(i + 1);
        };

        vid.addEventListener('ended', handleEnded, { once: true });

        const dur = (vid.duration && !isNaN(vid.duration) && vid.duration > 0)
          ? (vid.duration * 1000) + 400
          : 31000;

        timer = setTimeout(() => {
          go(i + 1);
        }, dur);

        const hasTitle = Boolean(slides[i]?.title);
  const fallbackTitle = slides[slides.length - 1]?.title || slides.find((s) => s.title)?.title || '';

  return () => {
          vid.removeEventListener('ended', handleEnded);
          clearTimeout(timer);
        };
      } else {
        timer = setTimeout(() => go(i + 1), 31000);
        const hasTitle = Boolean(slides[i]?.title);
  const fallbackTitle = slides[slides.length - 1]?.title || slides.find((s) => s.title)?.title || '';

  return () => clearTimeout(timer);
      }
    } else {
      timer = setTimeout(() => {
        go(i + 1);
      }, 6500);
      const hasTitle = Boolean(slides[i]?.title);
  const fallbackTitle = slides[slides.length - 1]?.title || slides.find((s) => s.title)?.title || '';

  return () => clearTimeout(timer);
    }
  }, [i, n, slides, go]);

  const hasTitle = Boolean(slides[i]?.title);
  const fallbackTitle = slides[slides.length - 1]?.title || slides.find((s) => s.title)?.title || '';

  return (
    <section className="hero" id="top">
      <div
        className="track"
        ref={tr}
        onScroll={(e) => {
          const newIdx = Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth);
          if (newIdx !== i && newIdx >= 0 && newIdx < n) {
            setI(newIdx);
          }
        }}
      >
        {slides.map((s, k) => (
          <Photo
            key={k}
            className="slide"
            src={s.photo}
            alt={s.caption}
            hue={s.hue}
            priority={k === 0}
            sizes="100vw"
            glyph={s.video ? undefined : s.glyph}
            caption={s.video ? undefined : `Hero photo · ${s.caption}`}
          >
            {s.video && (
              <video
                ref={(el) => {
                  if (el) videoRefs.current[k] = el;
                }}
                autoPlay
                muted
                loop={n === 1}
                playsInline
                preload="auto"
                poster={s.poster}
                aria-label={s.caption}
              >
                <source src={s.video} type="video/webm" />
                {s.videoMp4 && <source src={s.videoMp4} type="video/mp4" />}
              </video>
            )}
          </Photo>
        ))}
      </div>
      <div className="ov" />
      <div className="txt"><div className="w">
        <div className="heading-space">
          <h1
            key={i}
            style={{
              visibility: hasTitle ? 'visible' : 'hidden',
              pointerEvents: hasTitle ? 'auto' : 'none',
              userSelect: hasTitle ? 'auto' : 'none',
              animation: hasTitle ? undefined : 'none',
            }}
            aria-hidden={!hasTitle || undefined}
            dangerouslySetInnerHTML={{
              __html: hasTitle ? slides[i].title : fallbackTitle,
            }}
          />
        </div>

        {/* <p>{slides[i]?.text || 'Personalized music education for children and learners of all ages.'}</p> */}
        <p>  </p>
        <div className="cta">
          <Link className="btn gold" href="/#contact">Book a Class</Link>
          <Link className="btn ghost" href="/courses/">Explore Courses</Link>
          <a className="btn wa" href={`https://wa.me/${site.whatsapp}`}>Enquire on WhatsApp</a>
        </div>
      </div></div>
      <svg className="wave" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 30Q50 0 100 30T200 30T300 30T400 30T500 30T600 30T700 30T800 30T900 30T1000 30T1100 30T1200 30" fill="none" stroke="#E2B04A" strokeWidth="2" />
      </svg>
      <div className="ctl">
        <button onClick={() => go(i - 1)} aria-label="Previous slide">←</button>
        <span>{pad(i + 1)} / {pad(n)}</span>
        <button onClick={() => go(i + 1)} aria-label="Next slide">→</button>
      </div>
    </section>
  );
}