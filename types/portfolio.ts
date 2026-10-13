export type Metric = {
  label: string;
  value: string;
  context: string;
};

export type CaseStudySection = {
  id?: string;
  title: string;
  summary: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  oneLine: string;
  summary: string;
  problem: string;
  outcome: string;
  repository: string;
  featured: boolean;
  accent: 'lime' | 'blue' | 'amber' | 'violet';
  tags: string[];
  tech: string[];
  screenshots?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
  evidence?: { label: string; url: string }[];
  metrics?: Metric[];
  architecture?: string[];
  sections: CaseStudySection[];
  lessons: string[];
  futureImprovements: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};
