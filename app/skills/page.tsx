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
    <main id="main-content" className="inner-page" tabIndex={-1}>
      <BackToHome />
      <div className="page-heading">
        <p className="eyebrow">
          <span aria-hidden="true" />
          THE TOOLKIT
        </p>
        <h1>
          Skills<span className="heading-dot">.</span>
        </h1>
      </div>
      <SkillsGrid />
    </main>
  );
}
