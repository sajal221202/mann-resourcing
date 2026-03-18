import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/animated-section';

const servicesData = [
  {
    id: 'service-merchant',
    title: 'Merchant Export/Trading Export',
    text: "Mann Resourcing is involved in the import & export of a variety of food and commodities around the world. Our company works with a number of farmers, Merchant Exporter, agro suppliers, distributors and manufacturers around the world to supply the best quality items.",
  },
  {
    id: 'service-distribution',
    title: 'Products Distribution',
    text: 'Mann Resourcing also assists Businesses in worldwide purchasing, distribution and delivery. We have worked in a number of developing countries like Africa and Asia, USA, Middle East, Canada. Mann Resourcing has enabled businesses to set up their distribution channels and place their products in the target markets.',
  },
  {
    id: 'service-negotiation',
    title: 'Negotiation and partnership strategy',
    text: 'Mann Resourcing has a unique collaborative endeavor based on its own merits and homework that brings toward a win-win outcome. We have enabled companies from diverse geographies to come together and form an alliance.',
  },
];

export function Services() {
  return (
    <AnimatedSection id="services" aria-label="services" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-5xl text-center mb-10 md:mb-12 text-black">Our Services</h2>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {servicesData.map((service) => {
            const image = PlaceHolderImages.find((img) => img.id === service.id);
            return (
              <li key={service.id}>
                <div className="hover-shine group relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="has-bg-image object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/35 transition-opacity group-hover:from-black/80 group-hover:via-black/65"></div>
                  <div className="relative z-10 flex flex-grow flex-col p-8 text-white">
                    <h2 className="text-2xl font-semibold leading-tight mb-3 drop-shadow-lg">
                      {service.title}
                    </h2>
                    <p className="text-base leading-relaxed text-white/90 drop-shadow">
                      {service.text}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </AnimatedSection>
  );
}


