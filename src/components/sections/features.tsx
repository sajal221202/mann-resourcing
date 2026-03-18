import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/animated-section';

const featuresData = [
  {
    id: 'feature-network',
    title: 'Global Network',
    description: 'Mann Resourcing connects you with trusted suppliers and buyers worldwide, ensuring smooth international trade.',
  },
  {
    id: 'feature-solutions',
    title: 'Tailored Solutions',
    description: 'We offer customized import and export services, handling logistics, compliance, and delivery with precision.',
  },
  {
    id: 'feature-quality',
    title: 'Quality Assurance',
    description: 'Committed to excellence, we ensure the highest quality standards for all goods traded through our network.',
  },
];

export function Features() {
  return (
    <AnimatedSection aria-label="feature" className="section text-center">
      <div className="container">
        <h2 className="mb-10 text-3xl font-bold leading-tight text-black md:mb-16 md:text-5xl">
          Why Connect with{" "}
          <span className="text-primary">Mann Resourcing</span>
          <span className="text-black"> ?</span>
        </h2>
        <ul className="mx-auto grid max-w-sm grid-cols-1 gap-12 md:max-w-none md:grid-cols-3 md:gap-8 lg:gap-16">
          {featuresData.map((feature) => {
            const image = PlaceHolderImages.find((img) => img.id === feature.id);
            return (
              <li key={feature.id} className="flex flex-col items-center text-center gap-4">
                <div className="flex h-40 w-full items-center justify-center">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="h-32 w-auto object-contain"
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{feature.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </AnimatedSection>
  );
}


