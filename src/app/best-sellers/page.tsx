import { BestSellersPage } from '@/components/best-sellers-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best-Selling Indian Exports | Mann Resourcing',
  description:
    'Explore best-selling Indian exports from a trusted private company. See popular handmade metal furniture, silver, and other items for your import business.',
};

export default function BestSellers() {
  return (
    <>
      <BestSellersPage />
    </>
  );
}


