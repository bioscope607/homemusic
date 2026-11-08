// ============================================================================
// ALL SITE CONTENT LIVES HERE AS SEPARATE VARIABLES (sample copy — edit freely).
// If API_URL is set, lib/api.js replaces each variable with the API response;
// if the API is off or fails, these values are shown. Same shapes for API JSON.
// ============================================================================
export const site = {
  name: 'Home Music Tuition',
  tagline: 'Learn • Play • Grow',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '918101738358',
  phone1: '+91 81017 38358',
  // phone2: '+91 87591 21440',
  email: 'homemusictui90@gmail.com',
  hours: 'Class timings to be provided',
  address: `Burnpur
    P.S. - Hirapur, P.O. - Burnpur
    Dist. - Paschim Bardhaman
    State - West Bengal
    PIN - 713325`,
};

export const hero = [
  {
    video: '/hero-video.webm',
    videoMp4: '/hero-video.webm',
    poster: '/hero-video.webm',
    title: ""
  },
  { glyph: '🎹', caption: 'Music lesson', hue: 200, photo: '/hero-image.webp', title: "" },
  {
    glyph: '🥁',
    caption: 'Tabla practice',
    hue: 30,
    photo: "home-music-banner-guitar.webp",
    title: 'Practice with passion, play with confidence,<em> and shine with music</em>',
  },
  {
    glyph: '🎤',
    caption: 'First performance',
    hue: 215,
    photo: "home-music-banner-piano.webp",
    title: 'Let music be your passion, your inspiration, <em> and your way of life</em>',
  },
];

const std = { photo: null, ages: 'Beginners welcome', format: 'Online · Offline · Home tuition', examReady: true };
export const courses = [
  {
    ...std,
    slug: 'piano-keyboard',
    name: 'Piano / Keyboard',
    glyph: '🎹', hue: 200,
    photo: '/courses/keyboard_playing.webp',
    photoAlt: 'Young student playing keyboard during a piano lesson',
    blurb: 'Melody, harmony and reading music, from first notes to grades.',
    description: 'A complete foundation in keyboard and piano: posture, reading notation, scales, chords and playing real songs. Lessons move at the child’s pace, with regular practice goals and performance opportunities.',
    why: `Learning the synthesizer helps students develop a strong foundation in music, rhythm, melody, harmony, and creativity. It teaches them to play songs, understand chords and scales, explore different sounds, and accompany other musicians. Regular practice also improves concentration, coordination, confidence, and performance skills. 
    
    Learn the Synthesizer — Explore Sound, Create Music, Express Yourself.`,
    learn: ['Finger technique and posture', 'Reading staff notation', 'Scales, chords and harmony', 'Playing favourite songs']
  },
  {
    ...std,
    slug: 'guitar',
    name: 'Guitar',
    glyph: '🎸', hue: 25,
    photo: "/courses/guitar_playing.webp",
    photoAlt: "Young student playing guitar during a guitar lesson",
    blurb: 'Chords, rhythm and favourite songs, fast.',
    description: 'From first chords to confident strumming and picking. Students learn songs they love while building solid technique and rhythm.',
    why: 'Learning guitar is a wonderful way to develop musical skills, creativity, confidence, and self-expression. It helps students understand rhythm, chords, scales, and melodies while enjoying the experience of playing their favourite songs.',
    learn: ['Open chords and strumming', 'Rhythm and timing', 'Basic fingerpicking', 'Playing along with songs']
  },
  {
    ...std,
    slug: 'ukulele',
    name: 'Ukulele',
    photo: "/courses/ukule_playing.webp",
    photoAlt: "Young students are playing ukulele during a ukulele lesson",
    glyph: '🎸', hue: 45,
    blurb: 'A cheerful first instrument for young learners.',
    description: 'Small, friendly and quick to learn: an ideal first instrument for young children. Lessons are playful but structured.',
    why: 'The ukulele is a fun, simple, and versatile instrument that is great for beginners and experienced learners alike. Learning ukulele helps students develop rhythm, coordination, musical understanding, and confidence',
    learn: ['Holding and tuning', 'Simple chords', 'Strumming patterns', 'Singing while playing']
  },
  {
    ...std,
    slug: 'violin',
    name: 'Violin',
    glyph: '🎻', hue: 10,
    photo: "/courses/violin_playing.webp",
    photoAlt: "Young student playing violin during a violin lesson",
    blurb: 'Bowing, tone and expressive playing.',
    description: 'Careful, patient teaching of bow hold, intonation and tone. Students build the discipline and expression this instrument rewards.',
    why: 'Learning the violin is a wonderful way to develop musical skills, creativity, patience, and self-confidence. It helps students understand melody, rhythm, pitch, and musical expression while improving concentration and listening abilities.',
    learn: ['Bow hold and posture', 'Intonation and tone', 'Reading music', 'Expressive playing']
  },
  {
    ...std,
    slug: 'flute',
    name: 'Flute',
    glyph: '🎶', hue: 170,
    photo: "/courses/flute_playing.webp",
    photoAlt: "Young student playing flute during a flute lesson",
    blurb: 'Breath control and graceful melodies.',
    description: 'Lessons focus on breath control, embouchure and clean fingering, leading to graceful melodies and confident performance.',
    why: 'Learning the flute is a wonderful way to develop musical skills, creativity, and self-confidence. It helps students improve their breath control, rhythm, concentration, listening skills, and musical expression. With regular practice and proper guidance, students can learn melodies, understand music more deeply, and enjoy performing their favourite songs.',
    learn: ['Breath control', 'Embouchure and tone', 'Fingering and scales', 'Playing melodies']
  },
  {
    ...std,
    slug: 'tabla',
    name: 'Tabla',
    glyph: '🥁', hue: 30,
    photo: "/courses/tabla_playing.webp",
    photoAlt: "Young student playing tabla during a tabla lesson",
    blurb: 'Taal, rhythm and Indian percussion tradition.',
    description: 'Learn bols, taal and the traditions of Indian percussion, with a steady focus on clarity, rhythm and accompaniment.',
    why: 'Learning the Tabla is a wonderful way to develop rhythm, concentration, and musical expression. It helps students understand the foundation of Indian music while building discipline and confidence.',
    learn: ['Basic bols and strokes', 'Taal and laya', 'Compositions and patterns', 'Accompanying singing']
  },
  {
    ...std,
    slug: 'classical-singing',
    name: 'Classical Singing',
    glyph: '🎤', hue: 215,
    photo: "/courses/classical_singing.webp",
    photoAlt: "Young student singing classical music during a lesson",
    blurb: 'Voice, raga foundations and stage confidence.',
    description: 'Voice training rooted in the classical tradition: swara practice, raga foundations, and the confidence to perform.',
    why: 'Classical singing is the foundation of strong musical training. It helps students develop proper voice control, pitch accuracy, rhythm, breathing techniques, and musical expression. Regular practice improves vocal flexibility and confidence while building a deeper understanding of music.',
    learn: ['Voice and breath training', 'Swara and alankar practice', 'Raga foundations', 'Stage confidence']
  },
];

export const leaders = [
  {
    role: "Director's Message",
    name: 'Deep Kumar Das',
    photo: "director.webp",
    message: `Music is more than notes and instruments—it is a journey of creativity, confidence, discipline, and self-expression.

At Home Music Tuition, we provide a supportive environment where every student can discover their musical potential through proper guidance, practice, personalized attention, and performance opportunities.

Learn • Play • Express • Grow

Keep Learning. Keep Practicing. Keep Making Music.`,
  },
  {
    role: "Principal's Message",
    name: 'Subarna Karmakar',
    photo: "principal.webp",
    message: `Welcome to Home Music Tuition, where we nurture musical talent through learning, creativity, discipline, and confidence.

Our aim is to provide every student with proper guidance, personal attention, and an inspiring environment to explore and express their musical abilities.

Learn • Play • Express

Let your musical journey be filled with passion, practice, and joy.`,
  },
];

export const gallery = [
  ['Classes', '🎹', 'Keyboard class', 200, 240, '/galleries/keyboard_class.webp'],
  ['Performances', '🎤', 'Stage performance', 215, 320, "/galleries/stage_performance.webp"],
  ['Awards', '🏅', 'Examination centre', 42, 460, "/galleries/medal_moment.webp"],
  ['Events', '🎶', 'Annual event', 400, 200, "/galleries/annual_event.webp"],
  ['Classes', '🎸', 'Guitar group', 25, 300, '/galleries/guitar_group.webp'],
  ['Awards', '📜', 'Certificates', 180, 220, '/galleries/certificates.webp'],
  ['Performances', '🥁', 'Intimate Indian Classical Singing Session', 30, 260, '/galleries/Intimate_indian_classical_singing_session.webp'],
  ['Classes', '🎻', 'Violin lesson', 10, 340, "/galleries/violin.webp"],
  ['Events', '👏', 'Group photo', 195, 250, "/galleries/group_photo.webp"],
  ['Classes', '🎶', 'Flute practice', 170, 220, '/galleries/flute.webp'],
  ['Performances', '🎸', 'Tabla', 50, 225, '/galleries/tabla.webp'],
  ['Events', '🏆', 'Award ceremony', 45, 440, '/galleries/award_ceremony.webp'],
].map(([cat, glyph, caption, hue, h, photo = null]) => ({ cat, glyph, caption, hue, h, photo }));

export const events = [
  { day: '14', month: 'DEC', title: 'Class room to stage', text: '1st in keyboard in Paschim Bardhaman', glyph: '🎤', photo: '/stage/class room to stage.webp', hue: 200 },
  { day: '08', month: 'JAN', title: 'Class room to stage', text: '2nd in keyboard in Paschim Bardhaman', glyph: '🎶', hue: 170, photo: '/stage/class room to stage 2.webp', },
  { day: '22', month: 'FEB', title: 'Class room to stage', text: '3rd in keyboard in Paschim Bardhaman', glyph: '🏆', hue: 45, photo: '/stage/class room to stage 3.webp', },
  { day: '22', month: 'FEB', title: 'Class room to stage', text: '1st in classical singing in Paschim Bardhaman', glyph: '🏆', hue: 45, photo: '/stage/class room to stage 4.webp', },
  { day: '22', month: 'FEB', title: 'Class room to stage', text: '2nd in classical singing in Paschim Bardhaman', glyph: '🏆', hue: 45, photo: '/stage/class room to stage 5.webp', },
];

export const posts = [
  {
    slug: 'how-music-builds-confidence', category: 'Growth', date: '', readTime: '', title: 'How Music Builds Confidence in Children', excerpt: 'Small performances, big changes: what regular practice does for a young learner.', glyph: '🎹', hue: 198, photo: "/music_room/build_confidence.webp",
    body: ['Learning an instrument gives children something rare: a skill that visibly improves with effort. Each new piece they master becomes proof that patience works.', 'Small, regular performances matter most. Playing for family, then classmates, then a stage teaches children that nerves are manageable and mistakes are survivable.', 'Parents can help by celebrating progress rather than perfection, keeping practice short and daily, and attending recitals.']
  },
  {
    slug: 'how-to-prepare-for-a-music-examination', category: 'Exams', date: '', readTime: '', title: 'How to Prepare for a Music Examination', excerpt: 'A calm, step-by-step approach to practice, theory and exam day.', glyph: '🎼', hue: 185, photo: "/music_room/prepare.webp",
    body: ['Good exam preparation starts months ahead. Break the syllabus into small weekly goals so nothing is left for the last week.', 'Balance technique, pieces and theory. Short daily sessions beat one long weekend session, and recording yourself helps spot problems early.', 'On exam day, a warm-up, a good night’s sleep and a familiar routine do more than last-minute cramming.']
  },
  {
    slug: 'choosing-the-right-instrument', category: 'Guidance', date: '', readTime: '', title: 'Choosing the Right Instrument for Your Child', excerpt: 'Age, temperament and interest: how to match a child to an instrument.', glyph: '🎻', hue: 220, photo: "/music_room/choosing_instrument.webp",
    body: ['The best instrument is the one a child wants to practise. Start with their interests: songs they love, sounds they are drawn to.', 'Consider age and size: ukulele and keyboard suit younger children, while violin and flute reward patient focus. Rhythm-minded children often love tabla.', 'A trial class is the easiest way to decide. Let the child try, and watch which instrument they ask about on the way home.']
  },
];

export const testimonials = [
  { quote: 'He used to hide when guests came. Now he asks to play for them. That change is the real result.', who: 'Priyanka MukherjeE' },
  { quote: 'My teacher makes hard things feel easy. I love practising now.', who: 'Rohit Kumar' },
  { quote: 'Flexible online classes fit our schedule perfectly.', who: ' Sneha Agarwal' },
  { quote: 'The exam preparation was structured and calm.', who: 'Ankita Singh' },
];

export const achievements = {
  stats: [['Medals', 'by exam performance'], ['Certificates', 'for every milestone'], ['Recognition', 'for dedication & progress']],
  items: [
    { title: 'Exam results and medals', text: 'Add exam achievements here: student names, results and medals.' },
    { title: 'Annual award ceremony', text: 'Add ceremony highlights, chief guests and award categories here.' },
    { title: 'Dedication & progress awards', text: 'Recognition for students who show exceptional commitment.' },
  ],
  photos: [
    ['🏆', 'Award ceremony', 42, '/celebration/award_ceremony.webp'],
    ['🏅', 'Medals', 200, '/celebration/medals.webp'],
    ['📜', 'Certificates', 180, '/celebration/certificate.webp'],
    ['🎤', 'Stage moment', 215, "/celebration/Stage_moment.webp"],
    ['👏', 'Celebration', 190, '/celebration/celebration.webp']
  ].map(([glyph, caption, hue, photo = null]) => ({ glyph, caption, hue, photo })),
};

export const aboutPage = {
  intro: 'Home Music Tuition proudly celebrates 15 years of nurturing musical talent, building confidence and helping every student discover their potential through music.',
  story: ['Home Music Tuition began with a simple belief: every child can learn music, given the right teacher and enough encouragement. Over 15 years that belief has grown into a community of students, parents and trained teachers.', 'Today we teach seven instruments across online, offline and home tuition, prepare students for music examinations, and give them real stages to perform on.'],
  numbers: [['15', 'Years of teaching'], ['7', 'Instruments'], ['6+', 'Years teacher experience'], ['3', 'Ways to learn']],
  values: [{ title: 'Patient teaching', text: 'Every student learns at their own pace, with individual attention.' }, { title: 'Confidence first', text: 'Performance opportunities turn practice into pride.' }, { title: 'Real recognition', text: 'Certificates, medals and awards celebrate effort and progress.' }],
};

export const examsPage = {
  intro: 'Students receive structured preparation and regular practice for examinations conducted by the institutions below.',
  photos: [
    { src: '/exams/exam.webp', alt: 'Exam practice', caption: 'Photo · exam practice', glyph: '🎼', hue: 205 },
    { src: '/exams/RAWM.webp', alt: 'Exam preparation', caption: 'Photo · exam preparation', glyph: '📜', hue: 205 },
  ],
  boards: [{ name: 'Suro Bharati Sangeet Kala  Kendra', photo: '/exams/exam.webp' }, { name: 'RAWN', photo: '/exams/RAWM.webp' }],
  steps: [{ t: 'Prepare', text: 'Your teacher maps the syllabus into small weekly goals.' }, { t: 'Practice', text: 'Regular practice, mock runs and theory revision build readiness.' }, { t: 'Perform', text: 'Students sit the examination with confidence, supported throughout.' }],
  faqs: [
    { q: 'Which examinations do students prepare for?', a: 'We prepare students for examinations conducted by Suro Bharati Sangeet Kala  Kendra.' },
    { q: 'Is exam preparation compulsory?', a: 'No. Students may learn for enjoyment, or follow exam-focused preparation. Your teacher will advise on the right path.' },
    { q: 'Do students receive certificates and medals?', a: 'Students may receive certificates and medals based on examination performance. We also recognise dedication, progress and achievements.' },
  ],
  disclaimer: 'Home Music Tuition prepares students for these examinations. The institutions are shown as informational references and are not presented as official affiliates.',
};

export const homeTuitionPage = {
  intro: 'Comfortable, personalised lessons in your own living room: no travel, no rush.',
  benefits: [{ title: 'Convenient', text: 'Lessons come to you, saving travel time every week.' }, { title: 'Personal', text: 'One teacher, one child, full attention.' }, { title: 'Comfortable', text: 'Children relax at home and enjoy learning more.' }],
  steps: [{ t: 'Enquire', text: 'Tell us the instrument, location and preferred timing.' }, { t: 'Trial class', text: 'A teacher visits for a first lesson, so you can decide.' }, { t: 'Regular lessons', text: 'Weekly lessons with practice goals and progress updates.' }],
  faqs: [{ q: 'Which instruments are available as home tuition?', a: 'Please enquire for the instrument you want; availability depends on teacher and location.' }, { q: 'Can we switch to online or offline classes later?', a: 'Yes, you can choose online, offline or home tuition to suit your family.' }],
};

export const home = { hero, courses, leaders, gallery, events, posts, testimonials };
