// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Vibhum Sharma',
  role: 'Research Scholar · IIIT Allahabad',
  headline: 'I build machine-learning systems, from research to production.',
  intro:
    "Ph.D. research scholar working on multimodal disease prognosis at IIIT Allahabad. I build AI systems that go from prototype to production: ML models, computer-vision apps and Python backends, with internships on production AI products at ParallelDots and SmartED.",
  location: 'Prayagraj, India',
  email: 'vibhum10sharma@gmail.com',
  resume: '/resume.pdf',
  photo: 'profile',
};

export const links = [
  { label: 'GitHub', href: 'https://github.com/rovermask', handle: 'rovermask' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vibhum-sharma-10j', handle: 'vibhum-sharma-10j' },
  { label: 'Kaggle', href: 'https://www.kaggle.com/vibhumsharma', handle: 'vibhumsharma' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/rover9696/', handle: 'rover9696' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/vibhum10sharma', handle: 'vibhum10sharma' },
  { label: 'Hugging Face', href: 'https://huggingface.co/rovermask', handle: 'rovermask' },
  { label: 'Instagram', href: 'https://www.instagram.com/ig_rover', handle: '@ig_rover' },
];

export const research = {
  institute: 'Indian Institute of Information Technology Allahabad',
  program: 'Ph.D. in Information Technology',
  mode: 'Full-time',
  since: 'Jun 2026',
  area: 'Multimodal disease prognosis',
  patent: 'Patent application filed for a CNN-based tuberculosis detection system.',
  summary:
    'My research looks at predicting how a disease will progress by combining more than one kind of patient data, such as medical images and clinical records, in a single model.',
};

export const education = [
  {
    degree: 'Ph.D. in Information Technology',
    school: 'Indian Institute of Information Technology Allahabad',
    period: 'Jun 2026 – present',
    note: 'Research area: multimodal disease prognosis',
  },
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Sam Higginbottom University of Agriculture, Technology and Sciences (SHUATS), Prayagraj',
    period: 'Graduated 2025',
    note: '',
  },
];

export const experience = [
  {
    role: 'Backend Intern',
    company: 'ParallelDots',
    period: 'Oct 2025 – Jan 2026',
    place: 'Remote',
    points: [
      'Designed and ran automated and manual test cases for the backend APIs behind ShelfWatch, an AI retail shelf-analytics product.',
      'Worked with backend engineers to validate edge cases, error handling and performance on production-critical endpoints.',
    ],
    tags: ['Python', 'REST APIs', 'API testing'],
  },
  {
    role: 'Data Science & Machine Learning Intern',
    company: 'SmartED',
    period: 'Sep 2024 – Dec 2024',
    place: 'Remote',
    points: [
      'Built an end-to-end sentiment analysis pipeline: cleaning, feature extraction, model training and evaluation.',
      'Ran exploratory analysis on social-media data with pandas and seaborn, and handled tokenization, stemming and vectorization for NLP.',
    ],
    tags: ['Python', 'NLP', 'pandas', 'seaborn'],
  },
];

export const projects = [
  {
    title: 'LungVision',
    subtitle: 'Tuberculosis detection from chest X-rays',
    description:
      'A CNN that classifies chest X-rays as TB-positive or normal, with augmentation for robustness and accuracy and confusion-matrix views. Served through a Flask app on Render.',
    tags: ['TensorFlow', 'Keras', 'Flask', 'Computer vision'],
    highlight: '97.7% accuracy · patent filed',
    github: 'https://github.com/rovermask/LungVision',
    live: 'https://tb-detection-flask.onrender.com',
    note: 'The live demo can take up to a minute to wake up on first load.',
    featured: true,
  },
  {
    title: 'WatchBuddy',
    subtitle: 'Track movies, series and books',
    description:
      'A React app with Firebase auth and Firestore. Live search suggestions from TMDB and Google Books, ISBN barcode scanning, custom lists, recommendations, a dashboard and light/dark mode.',
    tags: ['React 19', 'Firebase', 'TMDB API', 'Google Books'],
    github: 'https://github.com/rovermask/watch-buddy',
    live: 'https://watch-buddy-one.vercel.app',
    featured: true,
  },
  {
    title: 'Job Application Sender',
    subtitle: 'Role-based email automation',
    description:
      'A FastAPI tool that sends role-specific application emails with templates, automatic resume selection, validation, rate limiting and sent-mail logging.',
    tags: ['FastAPI', 'Python', 'SMTP', 'Bootstrap'],
    github: 'https://github.com/rovermask/job-application-sender',
    live: 'https://job-application-sender-sigma.vercel.app',
    featured: true,
  },
  {
    title: 'Drowsiness Detection',
    subtitle: 'Live driver-alertness monitor',
    description:
      'Tracks blinks and yawns from webcam video using MediaPipe Face Mesh, with eye and mouth aspect ratios feeding a small state machine that raises a drowsiness alert on a Flask dashboard.',
    tags: ['MediaPipe', 'OpenCV', 'Flask', 'Computer vision'],
    github: 'https://github.com/rovermask/drowsiness-detection',
    featured: true,
  },
  {
    title: 'AirCanvas',
    subtitle: 'Draw in the air with hand gestures',
    description:
      'Real-time virtual drawing with hand tracking from a webcam, with gestures to erase, clear and change brush size.',
    tags: ['Python', 'OpenCV', 'MediaPipe'],
    github: 'https://github.com/rovermask/air-canvas',
  },
  {
    title: 'CryptYourMind',
    subtitle: 'Cryptography learning platform',
    description:
      'A Django site with interactive encryption and decryption tools that teach the core cryptographic algorithms.',
    tags: ['Django', 'Python', 'Cryptography'],
    github: 'https://github.com/rovermask/CYM',
  },
  {
    title: 'TMDB Proxy Server',
    subtitle: 'Small API proxy for WatchBuddy',
    description: 'A lightweight Python service that proxies TMDB search and movie lookups so the API key stays server-side.',
    tags: ['Python', 'REST API', 'Vercel'],
    github: 'https://github.com/rovermask/tmdb-proxy-server',
  },
];

const drive = (id) => `https://drive.google.com/file/d/${id}/view`;

export const featuredCerts = [
  {
    title: 'Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    year: '2025',
    href: 'https://learn.microsoft.com/en-gb/users/vibhumsharma-5511/credentials/69bc5983bdc9b454',
    hrefLabel: 'Verify credential',
  },
  {
    title: 'Agentic AI Development',
    issuer: 'Eduxlabs, IIT Madras',
    year: '2025',
    href: drive('1z68KM2C9R3ypNJ2vmNKpbnhGfH4Nqk5h'),
  },
  {
    title: 'Python for Data Science and Machine Learning Bootcamp',
    issuer: 'Udemy',
    year: '2025',
    href: drive('1atB0EFFwlUovXqTlnjh_6dQbjlW-CV_H'),
  },
  {
    title: 'Data Analytics and Visualization Job Simulation',
    issuer: 'Accenture (Forage)',
    year: 'Jan 2025',
    href: drive('1HaVwocSke3dW8uYUhKH-EX1sBqAc0res'),
  },
  {
    title: 'Machine Learning Internship',
    issuer: 'SmartED',
    year: 'Dec 2024',
    href: drive('11jX3-ec9fN9cMyJYpCg8gU7iBk8ZPKjT'),
  },
  {
    title: 'AI Tools Workshop',
    issuer: 'Be10x',
    year: 'Jun 2026',
    href: drive('1M6AyUpftOrRCnA6JtbBk_-_KURtLncNY'),
  },
];

export const moreCerts = [
  {
    group: 'Programming & data',
    items: [
      { title: 'Introduction to Python (MTA)', issuer: 'Microsoft', href: drive('17ozR5OUGWrasZdRVtJIKHeDekTaj5qqk') },
      { title: 'MTA Python exam score report', issuer: 'Microsoft', href: drive('17ksjdRRmnHqT58FrBoaZ7IIhFP2NFu7N') },
      { title: 'Data Analysis with NumPy, Pandas and Python', issuer: 'Scaler', href: drive('16dpu2r6lZWYh4GAnVuKQpKMBsysagYqU') },
      { title: 'Java: Mastering the Fundamentals', issuer: 'Scaler', href: drive('1oiXy2e_siNq6KI5KSTNHCtuezfhIT5zF') },
      { title: 'JavaScript: Unlocking the Power of JavaScript', issuer: 'Scaler', href: drive('1ngLhX5ZZdkBKtVs6-L9TWPee8esSI7XF') },
      { title: 'What it takes to be a Data Scientist at Microsoft', issuer: 'Scaler', href: drive('1Z29VIHSigCheg71mG8G_d7bat0VduYsI') },
      { title: 'Machine Learning', issuer: 'SmartEd', href: drive('1ChnFvSmImk6ffojTZecaT8YX2iXZGd3N') },
      { title: 'Python project letter', issuer: 'Aspirevision', href: drive('14UiLvEMI91QU6xYVPNHjFH6l_h8GTQII') },
      { title: 'Introduction to SEO', issuer: 'SkillUp', href: drive('1P9lZGrAyb_rrjMU1wrQKEtQSYvieV986') },
      { title: 'LinkedIn Learning certificate', issuer: 'LinkedIn Learning', href: drive('1e1uQtxEHK7mbf_uUU5ytZHD-J7QqdZaK') },
    ],
  },
  {
    group: 'HackerRank',
    items: [
      { title: 'Python (Basic)', issuer: 'HackerRank', href: drive('1CnxwAEApMdIwpdLXKE7DVSgCjRXbd76H') },
      { title: 'SQL (Basic)', issuer: 'HackerRank', href: drive('1eSrS47FpVHKxeSoh_O-DOo4-d-x2hO_o') },
      { title: 'Problem Solving (Basic)', issuer: 'HackerRank', href: drive('11pMmPNLjQ4aMUaa1JW8qqRCIhDIDppW0') },
      { title: 'Problem Solving (Intermediate)', issuer: 'HackerRank', href: drive('1HJsjyiwKbcTqMLwdMMBVprEQ7P7DP4L0') },
      { title: 'C# (Basic)', issuer: 'HackerRank', href: drive('1Iiv_JPqLrp8at-cTIQDaQwBMxVyqWSxa') },
    ],
  },
  {
    group: 'Workshops & events',
    items: [
      { title: 'Data Analytics Workshop', issuer: 'Jobaaj', href: drive('1YqWA45HcXpUNGqwzBsM0R3HZkzWtiGee') },
      { title: 'Management Consulting Workshop', issuer: 'Jobaaj', href: drive('1V8AXkyjHKoA7XxoFLvLOPjWeWamHVLhu') },
      { title: 'Jaipuria Quiz League 2024', issuer: 'Jaipuria', href: drive('164rtGav0yLQQKjn6nw7wzzRowypg0zXr') },
      { title: 'CyVIT 2020', issuer: 'CyVIT', href: drive('1MrzDCSB_6gfyB_V8g2AJR292MvXrSY_3') },
    ],
  },
];

export const skills = [
  { group: 'Machine learning', items: ['TensorFlow', 'Keras', 'scikit-learn', 'OpenCV', 'MediaPipe', 'NLP', 'LangChain', 'RAG'] },
  { group: 'Languages', items: ['Python', 'C++', 'SQL', 'JavaScript'] },
  { group: 'Backend & web', items: ['FastAPI', 'Flask', 'Django', 'REST APIs', 'React', 'HTML/CSS'] },
  { group: 'Data', items: ['pandas', 'NumPy', 'Matplotlib', 'seaborn', 'MySQL', 'Firebase'] },
  { group: 'Cloud & tools', items: ['Azure', 'Vercel', 'Render', 'Git', 'GitHub'] },
];
