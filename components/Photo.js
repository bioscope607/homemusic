import Image from 'next/image';
// Shows a real photo when `src` exists, otherwise a themed placeholder.
export default function Photo({ src, photo, alt = '', glyph, caption, showCaption, hue = 200, className = '', style, priority, sizes = '(max-width:900px) 100vw, 50vw', objectFit = 'cover', children }) {
  const imageSrc = src || photo;
  const displayCaption = caption && (!imageSrc || showCaption || !caption.startsWith('Photo ·'));
  return (
    <div className={`ph ${className}`} style={{ '--h': hue, ...style }} data-g={imageSrc ? undefined : glyph} data-c={displayCaption ? caption : undefined}>
      {imageSrc && <Image src={imageSrc} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit }} />}
      {children}
    </div>
  );
}
