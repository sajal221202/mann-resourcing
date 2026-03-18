import { NewProductsPage } from '@/components/new-products-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Indian Export Products | Mann Resourcing',
  description:
    'Discover the latest arrivals from our Indian suppliers. As a leading private export company, we offer new handicrafts, handmade wooden toys, and unique items for your import business.',
};

export default function NewProducts() {
  return (
    <>
      <NewProductsPage />
    </>
  );
}


