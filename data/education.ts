type EducationEntry = {
  id: string;
  degree: string;
  field: string;
  institution?: string;
  location?: string;
  startYear?: string;
  endYear?: string;
  expected?: boolean;
  coursework: string[];
};

export const education: EducationEntry[] = [
  {
    id: 'master',
    degree: 'Master d’Excellence',
    field: 'Data Science & Information Systems Security',
    institution: 'Université Sultan Moulay Slimane',
    location: 'Beni Mellal, Morocco',
    startYear: '2025',
    endYear: '2027',
    expected: true,
    coursework: [
      'Advanced Machine Learning',
      'Deep Learning',
      'Data Analysis',
      'Advanced Python / OOP',
    ],
  },
  {
    id: 'licence',
    degree: 'Licence d’Excellence',
    field: 'Data Science & Information Systems Security',
    institution: 'Université Sultan Moulay Slimane',
    location: 'Beni Mellal, Morocco',
    startYear: '2024',
    endYear: '2025',
    coursework: [
      'Machine Learning',
      'Feature Engineering',
      'Operations Research',
      'Networks & Cybersecurity',
    ],
  },
  {
    id: 'deug',
    degree: 'DEUG',
    field: 'Mathematics & Computer Science',
    institution: 'Université Sultan Moulay Slimane',
    location: 'Beni Mellal, Morocco',
    startYear: '2021',
    endYear: '2024',
    coursework: [],
  },
  {
    id: 'baccalaureate',
    degree: 'Baccalaureate',
    field: 'Sciences Mathématiques A',
    coursework: [],
  },
];
