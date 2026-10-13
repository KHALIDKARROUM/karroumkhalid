import { profile } from '@/data/profile';
import { Download } from 'lucide-react';

type ResumeLinkProps = {
  compact?: boolean;
};

export function ResumeLink({ compact = false }: ResumeLinkProps) {
  if (!profile.resume.available) return null;

  return (
    <a
      className="button button-secondary"
      href={profile.resume.path}
      download="Khalid-Karroum-CV.pdf"
    >
      <Download size={16} aria-hidden="true" />
      {compact ? 'Resume' : 'Download CV'}
    </a>
  );
}
