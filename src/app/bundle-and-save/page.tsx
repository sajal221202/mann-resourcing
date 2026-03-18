import { BundleAndSavePage } from '@/components/bundle-and-save-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bulk Order & Bundle Deals | Indian Export Company',
  description:
    'Get great deals on bulk orders from a top Indian export company. Save on our collections of ceramics, bamboo furniture, and more for your import-export business.',
};

export default function BundleAndSave() {
  return (
    <>
      <BundleAndSavePage />
    </>
  );
}


