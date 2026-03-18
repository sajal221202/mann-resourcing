import { ShippingFaqPage } from '@/components/shipping-faq-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping FAQ - Mann Resourcing',
  description: 'Frequently asked questions about shipping.',
};

export default function ShippingFaq() {
  return (
    <>
      <ShippingFaqPage />
    </>
  );
}


