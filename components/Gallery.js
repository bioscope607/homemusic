'use client';
import { useState, useEffect } from 'react';
import Photo from './Photo';
const F = ['All', 'Classes', 'Performances', 'Awards', 'Events'];
export default function Gallery({ items }) {
  const [c, setC] = useState('All'); const [o, setO] = useState(null);
  useEffect(() => { const k = (e) => e.key === 'Escape' && setO(null); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, []);
  const list = items.filter((g) => c === 'All' || g.cat === c);
  return (
    <>
      <div className="f">{F.map((f) => <button key={f} className={f === c ? 'on' : ''} onClick={() => setC(f)}>{f}</button>)}</div>
      <div className="mas">
        {list.map((g, k) => (
          <button type="button" className="gi" key={g.caption + k} data-caption={g.caption} onClick={() => setO(g)} aria-label={`Open ${g.caption}`}>
            <Photo src={g.photo} alt={g.caption} glyph={g.glyph} caption={g.caption} hue={g.hue} style={{ height: g.h }} sizes="(max-width:900px) 100vw, 25vw" />
          </button>
        ))}
      </div>
      {o && <div className="lb on" role="dialog" aria-modal="true" onClick={() => setO(null)}><b aria-label="Close">×</b><Photo src={o.photo} alt={o.caption} glyph={o.glyph} caption={o.caption} hue={o.hue} sizes="90vw" /></div>}
    </>
  );
}
