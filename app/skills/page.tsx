import type { Metadata } from 'next';
import { BackToHome } from '@/components/portfolio/BackToHome';
import { SkillsGrid } from '@/components/portfolio/SkillsGrid';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Khalid Karroum’s skills in data science, machine learning, and development.',
};

export default function SkillsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <BackToHome />
      <h1>Skills</h1>
      <SkillsGrid />
    </main>
  );
}
