'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { AnimatedSection } from '@/components/animated-section';

const heroSlides = [
  {
    id: 'hero-silver',
    titleLine1: 'Silver',
    titleLine2: 'Exports',
    text: 'Delivering exquisite silver jewelry and decor, crafted by skilled artisans and exported worldwide with assured quality and care.',
  },
  {
    id: 'hero-global',
    titleLine1: 'Global',
    titleLine2: 'Exports',
    text: 'Facilitating seamless international trade by exporting a wide range of premium Indian goods to markets across the globe.',
  },
  {
    id: 'hero-metal',
    titleLine1: 'Metal',
    titleLine2: 'Crafts',
    text: 'Precision-crafted metal art and decor, blending durability with intricate design for discerning global buyers.',
  },
  {
    id: 'hero-ceramic',
    titleLine1: 'Ceramic',
    titleLine2: 'Exports',
    text: 'Ceramic Exports is a global supplier of high-quality ceramic products, catering to diverse industries with innovative designs and durable materials.',
  },
  {
    id: 'hero-handicraft',
    titleLine1: 'Handicraft',
    titleLine2: 'Exports',
    text: "Showcasing India's rich cultural heritage, our handicraft exports deliver unique, artisanal products to global markets.",
  },
];

export function Hero() {
  return (
    <AnimatedSection id="home" aria-label="hero" className="pt-0">
      <div className="container relative max-w-full px-0">
        <Carousel
          opts={{ loop: true, align: 'start' }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
        >
          <CarouselContent>
            {heroSlides.map((slide) => {
              const image = PlaceHolderImages.find((img) => img.id === slide.id);
              return (
                <CarouselItem key={slide.id}>
                  <div className="relative bg-gray-200 py-24 md:py-28 lg:py-32">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        priority={slide.id === 'hero-silver'}
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/25"></div>

                    <div className="container relative z-10">
                      <div className="max-w-md text-white">
                        <h1 className="hero-title">
                          {slide.titleLine1} <br />
                          {slide.titleLine2}
                        </h1>
                        <p className="hero-subtitle mt-4 bg-black/30 p-3 backdrop-blur-sm md:mt-8">
                          {slide.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <div className="pointer-events-none absolute bottom-6 right-5 z-10 hidden items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1.5 text-xs text-white md:flex">
          <span>Scroll</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </AnimatedSection>
  );
}


