'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Star, Repeat } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';

const products = [
  { id: 'product-1' },
  { id: 'product-2' },
  { id: 'product-3' },
  { id: 'product-4' },
  { id: 'product-1' }, // Repeating for carousel effect
  { id: 'product-2' },
];

export function Products() {
  return (
    <AnimatedSection id="featured-products" aria-label="products" className="section">
      <div className="container">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Featured Products</h2>
          <Link href="/products" className="inline-flex items-center gap-1 font-semibold text-black transition-colors hover:text-primary">
            <span>Shop All Products</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent className="-ml-6 lg:-ml-8">
            {products.map((product, index) => {
              const image = PlaceHolderImages.find((img) => img.id === product.id);
              return (
                <CarouselItem key={index} className="basis-full pl-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
                    <div className="relative h-[420px] w-full bg-white sm:h-[380px] md:h-[400px] lg:h-[420px]">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          fill
                          sizes="(min-width: 1280px) 240px, (min-width: 1024px) 220px, (min-width: 768px) 240px, 100vw"
                          loading="lazy"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 translate-x-full space-y-2.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 right-4">
                      <ProductActionButton icon={ShoppingBag} label="add to cart" />
                      <ProductActionButton icon={Star} label="add to wishlist" />
                      <ProductActionButton icon={Repeat} label="compare" />
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
        </Carousel>
      </div>
    </AnimatedSection>
  );
}

const ProductActionButton = ({ icon: Icon, label }: { icon: React.ElementType, label: string }) => (
  <Button variant="outline" size="icon" className="h-11 w-11 rounded-full bg-white shadow-md hover:bg-primary hover:text-white" aria-label={label}>
    <Icon className="h-6 w-6" />
  </Button>
);


