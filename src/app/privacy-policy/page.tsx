import { PrivacyPolicyPage } from '@/components/privacy-policy-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Mann Resourcing',
  description: 'Our privacy policy.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <PrivacyPolicyPage />
    </>
  );
}


