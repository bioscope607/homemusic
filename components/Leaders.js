import Image from 'next/image';
export default function Leaders({ items, cls = '' }) {
  return (
    <div className={`lead ${cls}`}>{items.map((l) => (
      <div className="msg" key={l.role}>
        <div className="pic">{l.photo ? <Image src={l.photo} alt={l.name} fill sizes="200px" style={{ objectFit: 'cover' }} /> : <span>📷<br />Photo<br />placeholder</span>}</div>
        <p className="mq">“{l.message}”</p><h3>{l.name}</h3><small>{l.role}</small>
      </div>))}</div>
  );
}
