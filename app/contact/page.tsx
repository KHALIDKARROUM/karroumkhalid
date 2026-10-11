import type { Metadata } from 'next';
import { BackToHome } from '@/components/portfolio/BackToHome';
import { ContactCTA } from '@/components/portfolio/ContactCTA';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact and professional links for Khalid Karroum.',
};

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <BackToHome />
      <ContactCTA headingLevel={1}>
        <p>{profile.availability}</p>
      </ContactCTA>
    </main>
  );
}
