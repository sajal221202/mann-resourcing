import { ProductsPage } from '@/components/products-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products from a Leading Indian Export Company | Mann Resourcing',
  description:
    'Browse quality products from a leading private export company in India. We offer handicrafts, furniture, silver, and more for international import and B2B trade.',
};

export default function Products() {
  return (
    <>
      <ProductsPage />
    </>
  );
}


