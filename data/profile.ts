export const profile = {
  name: 'Khalid Karroum',
  role: 'Data Scientist & Machine Learning Engineer',
  location: 'Morocco',
  availability:
    'Looking for PFE and internship opportunities in data science and AI.',
  positioning:
    'I work with data, train machine-learning models, and build applications around them.',
  github: 'https://github.com/KHALIDKARROUM',
  email: undefined as string | undefined,
  linkedIn: 'https://www.linkedin.com/in/khalid-karroum/',
  resume: {
    path: '/Khalid-Karroum-CV.pdf',
    available: false,
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
} as const;

export const technicalInterests = [
  'Algorithms & Data Structures',
  'Statistical Modeling',
  'Machine Learning Systems',
  'MLOps',
  'Financial Data Science',
] as const;

export const languages = [
  { name: 'French', level: 'B2', description: 'Upper-intermediate' },
  { name: 'English', level: 'B2', description: 'Upper-intermediate' },
] as const;

export const socialAccounts = [
  {
    platform: 'linkedin',
    name: 'LinkedIn',
    handle: 'khalid-karroum',
    url: profile.linkedIn,
    description: 'Professional profile & connections',
  },
  {
    platform: 'github',
    name: 'GitHub',
    handle: 'KHALIDKARROUM',
    url: profile.github,
    description: 'Projects, source code & contributions',
  },
] as const;
