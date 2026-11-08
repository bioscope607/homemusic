import { getCourses, getPosts } from '../lib/api';

export const dynamic = 'force-static';

export default async function sitemap() {
  const b = process.env.NEXT_PUBLIC_SITE_URL || 'https://homemusictuition.com';
  const now = new Date();

  const coreRoutes = [
    { url: `${b}/`, priority: 1.0, changeFrequency: 'weekly', lastModified: now },
    { url: `${b}/home-tuition/`, priority: 0.95, changeFrequency: 'weekly', lastModified: now },
    { url: `${b}/courses/`, priority: 0.95, changeFrequency: 'weekly', lastModified: now },
    { url: `${b}/exams/`, priority: 0.9, changeFrequency: 'monthly', lastModified: now },
    { url: `${b}/contact/`, priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${b}/about/`, priority: 0.8, changeFrequency: 'monthly', lastModified: now },
    { url: `${b}/achievements/`, priority: 0.75, changeFrequency: 'monthly', lastModified: now },
    { url: `${b}/gallery/`, priority: 0.75, changeFrequency: 'weekly', lastModified: now },
    { url: `${b}/events/`, priority: 0.7, changeFrequency: 'monthly', lastModified: now },
    { url: `${b}/blog/`, priority: 0.8, changeFrequency: 'weekly', lastModified: now },
  ];

  const courseRoutes = (await getCourses()).map((c) => ({
    url: `${b}/courses/${c.slug}/`,
    priority: 0.85,
    changeFrequency: 'monthly',
    lastModified: now,
  }));

  const blogRoutes = (await getPosts()).map((p) => ({
    url: `${b}/blog/${p.slug}/`,
    priority: 0.7,
    changeFrequency: 'monthly',
    lastModified: now,
  }));

  return [...coreRoutes, ...courseRoutes, ...blogRoutes];
}
