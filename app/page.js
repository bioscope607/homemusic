import Link from 'next/link';
import Leaders from '../components/Leaders';
import Photo from '../components/Photo';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import EnquiryForm from '../components/EnquiryForm';
import { getHome } from '../lib/api';
import { site } from '../lib/content';

const pad = (n) => String(n).padStart(2, '0');
const trust = [['15', 'Years of Musical Excellence'], ['6+', 'Years Teacher Experience'], ['2 ways', 'Online & Offline Classes'], ['Exam', 'Preparation'], ['1:1', 'Individual Attention']];
const why = [
  ['a', 'Experienced Teachers', 'Trained educators, each with 6+ years of teaching experience — patient with beginners, demanding in the right way.'],
  ['', 'Individual Attention', 'Lessons paced to the child.'], ['g', 'Exam Preparation', 'Structured, steady, stress-free.'],
  ['w2', 'Performance Opportunities', 'Recitals and events that turn practice into pride.'],
  ['', 'Awards & Recognition', 'Certificates and medals.'], ['', 'Home Tuition', 'Lessons at your doorstep.'],
];
const Head = ({ eye, title, href, cta }) => (
  <div className="head rv"><div><div className="eyebrow">{eye}</div><h2>{title}</h2></div>{href && <Link className="link" href={href}>{cta}</Link>}</div>
);

export const metadata = { alternates: { canonical: '/' } };

export default async function Home() {
  const d = await getHome();
  return (
    <main>
      <Hero slides={d.hero} />
      <div className="w"><div className="trust rv">{trust.map(([b, s]) => <div key={s}><b>{b}</b><span>{s}</span></div>)}</div></div>

      <section className="sec about" id="about"><div className="w split">
        <div className="pos rv"><Photo glyph="🎹" src="/banner.jpeg" alt="Home music tution banner" caption="Photo · student at keyboard" hue={195} /><div className="badge"><div><b>15</b>years of<br />music</div></div></div>
        <div className="rv"><div className="eyebrow">About us</div><h2>15 Years of Inspiring Musical Journeys</h2>
          <p>Home Music Tuition proudly celebrates 15 years of nurturing musical talent, building confidence and helping every student discover their potential through music — with trained teachers, patient guidance and real stages to perform on.</p>
          <Link className="link" href="/about/">Discover Our Story →</Link></div>
      </div>
      </section>
      <section className="sec" id="courses" style={{ paddingTop: 20 }}><div className="w">
        <Head eye="Courses" title="Explore Our World of Music" href="/courses/" cta="View All Courses →" />
        <div className="cs">{d.courses.map((c) => (
          <Link className="course" href={`/courses/${c.slug}/`} key={c.slug}>
            <Photo src={c.photo} alt={c.photoAlt} glyph={c.glyph} hue={c.hue} sizes="340px"><div className="in"><h3>{c.name}</h3><p>{c.blurb}</p><span>Learn More →</span></div></Photo>
          </Link>))}</div>
      </div></section>
      
      <section className="sec why" id="why"><div className="w">
        <div className="eyebrow">Why Home Music Tuition</div><h2 className="rv">More Than Music. A Journey of Growth.</h2>
        {/* <div className="bento rv">{why.map(([c, t, s], i) => <div className={`bx ${c}`} key={t}><i>{pad(i + 1)}</i><b>{t}</b><span>{s}</span></div>)}</div> */}
        <div className="bento rv">{why.map(([c, t, s], i) => <div className={`bx ${c}`} key={t}><b>{t}</b><span>{s}</span></div>)}</div>
      </div></section>

      <section className="sec" id="leadership"><div className="w">
        <div className="eyebrow">Leadership</div><h2 className="rv" style={{ marginBottom: 44, maxWidth: '16ch' }}>Words from Those Who Lead Us</h2>
        <Leaders items={d.leaders} cls="rv" />
      </div></section>

      <section className="sec exams" id="exams"><div className="w split">
        <div className="rv"><div className="eyebrow">Exam Facilities</div><h2>Prepare. Practice. Perform.</h2>
          <p style={{ color: 'var(--mute)', fontSize: 18, marginTop: 20 }}>Students receive structured preparation and regular practice for examinations conducted by these institutions.</p>
          <div className="boards">{['Suro Bharati Sangeet Kala  Kendra', 'RAWN'].map((n) => <div className="board" key={n}><i>{n[0]}</i><div><b>{n}</b><small>Examination body · informational reference</small></div></div>)}</div>
          <div className="steps"><span>Prepare</span><span>Practice</span><span>Perform</span></div>
          <p className="note">Home Music Tuition prepares students for these exams; it is not presented here as an official affiliate.</p><br />
          <Link className="link" href="/exams/">Explore Exam Facilities →</Link></div>
        <div className="rv" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
          <Photo glyph="🎼" src="/exams/exam.webp" caption="Photo · exam practice" hue={205} style={{ aspectRatio: '1' }} />
          <Photo glyph="📜" src="/exams/RAWM.webp" caption="Photo · exam preparation" hue={205} style={{ aspectRatio: '1' }} />
        </div>
      </div>

      </section>

      <section className="sec" id="awards"><div className="w">
        <Head eye="Achievements" title="Celebrating Every Achievement" href="/achievements/" cta="View Achievements →" />
        <div className="mos rv">
          {[
            ['🏆', 'Award ceremony', 42, '/celebration/award_ceremony.webp'],
            ['🏅', 'Medals', 200, '/celebration/medals.webp'],
            ['📜', 'Certificates', 180, '/celebration/certificate.webp'],
            ['🎤', 'Stage moment', 215, '/celebration/Stage_moment.webp'],
            ['👏', 'Celebration', 190, '/celebration/celebration.webp'],
          ].map(([g, c, h, p=null]) => (
            <Photo key={c} glyph={g} caption={c} showCaption hue={h} src={p} sizes="50vw" />
          ))}
        </div>
        <div className="stats rv"><div><b>Medals</b><span>by exam performance</span></div><div><b>Certificates</b><span>for every milestone</span></div><div><b>Recognition</b><span>for dedication &amp; progress</span></div></div>
      </div></section>

      <section className="sec gal" id="gallery"><div className="w">
        <Head eye="Gallery" title="Life at Home Music Tuition" href="/gallery/" cta="View Full Gallery →" />
        <Gallery items={d.gallery} />
      </div></section>

      <section className="sec" id="events"><div className="w">
        <Head eye="Events" title="From the Classroom to the Stage" href="/events/" cta="Explore Events →" />
        <div className="g3 rv">{d.events.map((e) => (
          <div className="ev" key={e.title}>
            <Photo src={e.photo} alt={e.title} glyph={e.glyph} hue={e.hue} sizes="(max-width:900px) 100vw, 33vw"></Photo>
            <h3>{e.title}</h3><p>{e.text}</p>
          </div>))}</div>
      </div></section>

      <section className="sec" id="blog" style={{ paddingTop: 0 }}><div className="w">
        <Head eye="Music Journal" title="From Our Music Room" href="/blog/" cta="View All Articles →" />
        <div className="g3 rv">{d.posts.map((p) => (
          <Link className="post" href={`/blog/${p.slug}/`} key={p.slug}>
            <Photo src={p.photo} alt={p.title} glyph={p.glyph} hue={p.hue} sizes="(max-width:900px) 100vw, 33vw" />
            <span className="tag">{p.category}</span><h3>{p.title}</h3><p>{p.excerpt}</p><span className="link">Read Article →</span>
          </Link>))}</div>
      </div></section>

      <section className="sec ht" id="hometuition" style={{ background: 'var(--secondary-2)' }}><div className="w split">
        <Photo className="rv" glyph="🏠" caption="Photo · teacher at home" hue={32} src="/teacher_at_home.webp" style={{ aspectRatio: '1306/816' }} />
        <div className="rv"><div className="eyebrow">Home Tuition</div><h2>Bring Music Home</h2>
          <p>Comfortable, personalised lessons in your own living room. No travel, no rush — just a dedicated teacher and a child who is relaxed enough to enjoy learning.</p>
          <Link className="link" href="/home-tuition/">Explore Home Tuition →</Link></div>
      </div></section>

      <section className="sec" id="voices"><div className="w">
        <div className="eyebrow">Testimonials</div><h2 className="rv" style={{ marginBottom: 40 }}>What Students &amp; Parents Say</h2>
        <div className="tq rv">{d.testimonials.map((t, i) => <div className={`q ${i === 0 ? 'big' : ''}`} key={t.who}><p>{t.quote}</p><small>{t.who}</small></div>)}</div>
      </div></section>

      <section className="contact" id="contact"><div className="w split">
        <div><div className="eyebrow" style={{ color: 'var(--accent)' }}>Enquire</div><h2>Ready to Begin Your Musical Journey?</h2>
          <p>Tell us about your child and the instrument they love. We&apos;ll get back to you to arrange a class —  online,offline or at home.</p>
          <div className="cta"><a className="btn gold" href="#contact">Book a Class</a><a className="btn wa" href={`https://wa.me/${site.whatsapp}`}>Chat on WhatsApp</a></div></div>
        <EnquiryForm courses={d.courses} />
      </div></section>
    </main>
  );
}
