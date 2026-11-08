import * as c from './content';
// Runs at BUILD time. With API_URL set, API data replaces the built-in values; otherwise (or on failure) the values in content.js show.
async function load(path, fallback) {
  const base = process.env.API_URL;
  if (!base) return fallback;
  try { const r = await fetch(`${base}${path}`); if (!r.ok) throw new Error(r.status); return await r.json(); }
  catch { return fallback; }
}
export const getHome = async () => ({ ...c.home, ...(await load('/home', {})) });
export const getCourses = () => load('/courses', c.courses);
export const getCourse = async (s) => (await load(`/courses/${s}`, null)) || c.courses.find((x) => x.slug === s) || null;
export const getPosts = () => load('/posts', c.posts);
export const getPost = async (s) => (await load(`/posts/${s}`, null)) || c.posts.find((x) => x.slug === s) || null;
export const getEvents = () => load('/events', c.events);
export const getGallery = () => load('/gallery', c.gallery);
export const getAchievements = () => load('/achievements', c.achievements);
export const getLeaders = () => load('/leaders', c.leaders);
export const getAbout = () => load('/about', c.aboutPage);
export const getExams = () => load('/exams', c.examsPage);
export const getHomeTuition = () => load('/home-tuition', c.homeTuitionPage);
