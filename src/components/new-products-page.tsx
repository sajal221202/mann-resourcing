"use client";

import Image from 'next/image';
import { ShoppingBag, Star, Repeat } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import React from 'react';

const productCategories = [
  {
    title: 'Handicraft',
    products: ['handicraft-1', 'handicraft-2', 'handicraft-3', 'handicraft-4'],
  },
  {
    title: 'Handmade Wooden Toys',
    products: ['wooden-toy-1', 'wooden-toy-2', 'wooden-toy-3', 'wooden-toy-4'],
  },
];

export function NewProductsPage() {
  return (
    <div className="py-10 md:py-16">
      <div className="container">
        <AnimatedSection>
          <h1 className="h2 mb-10 text-center md:mb-16">New Products</h1>
        </AnimatedSection>
        {productCategories.map((category) => (
          <AnimatedSection key={category.title} id={category.title.toLowerCase().replace(/ /g, '-')} className="mb-16">
            <h2 className="h2-large section-title mb-10">{category.title}</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {category.products.map((productId) => {
                const image = PlaceHolderImages.find((img) => img.id === productId);
                return (
                  <div key={productId} className="group relative overflow-hidden rounded-md border bg-card">
                    <div className="aspect-[3/4] bg-muted">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          width={540}
                          height={720}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 translate-x-full space-y-2.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 right-4">
                      <ProductActionButton icon={ShoppingBag} label="add to cart" />
                      <ProductActionButton icon={Star} label="add to wishlist" />
                      <ProductActionButton icon={Repeat} label="compare" />
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

const ProductActionButton = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <Button
    variant="outline"
    size="icon"
    className="h-11 w-11 rounded-full bg-white shadow-md hover:bg-primary hover:text-white"
    aria-label={label}
  >
    <Icon className="h-6 w-6" />
  </Button>
);


