import { TermsAndConditionsPage } from '@/components/terms-and-conditions-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Mann Resourcing',
  description: 'Our terms and conditions for doing business.',
};

export default function TermsAndConditions() {
  return (
    <>
      <TermsAndConditionsPage />
    </>
  );
}


