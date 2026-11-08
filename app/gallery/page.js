import PageHeader from '../../components/PageHeader';
import CtaBand from '../../components/CtaBand';
import Gallery from '../../components/Gallery';
import { getGallery } from '../../lib/api';
export const metadata = {
  title: 'Photo Gallery — Music Classes, Stage Performances & Events',
  description:
    'Browse photos of classroom lessons, home tuition sessions, annual concert performances, and award ceremonies at Home Music Tuition.',
  keywords: [
    'music photo gallery',
    'music classes photos',
    'student stage performances',
    'music award ceremony photos',
    'Burnpur music tuition gallery',
  ],
  alternates: { canonical: '/gallery/' },
  openGraph: {
    title: 'Photo Gallery — Life at Home Music Tuition',
    description: 'Photos of classes, performances, award ceremonies and events.',
    url: '/gallery/',
    images: [{ url: '/hero-image.webp', width: 1200, height: 630, alt: 'Gallery Photos' }],
  },
};
export default async function GalleryPage() {
  const items = await getGallery();
  return (
    <main>
      <PageHeader eyebrow="Gallery" title="Life at Home Music Tuition" intro="Classes, performances, awards and events." crumbs={[['Gallery']]} />
      <section className="sec gal"><div className="w"><Gallery items={items} /></div></section>
      <CtaBand />
    </main>
  );
}
