"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedSection } from '@/components/animated-section';

const faqItems = [
  {
    question: 'Shipping Locations',
    answer: 'We ship globally from India. Shipping availability depends on product category, destination country regulations, and order volume.',
  },
  {
    question: 'Shipping Time',
    answer: 'Production and dispatch timelines depend on product type and quantity.\nTypical timelines:\n\t•\tReady goods: 7 to 10 working days\n\t•\tCustom manufacturing: 20 to 45 days\n\t•\tTransit time depends on shipping method and destination.',
  },
  {
    question: 'Shipping Methods',
    answer: '\t•\tAir freight for small or urgent orders\n\t•\tSea freight for bulk shipments\n\t•\tCourier services for samples',
  },
  {
    question: 'Shipping Cost',
    answer: 'Shipping cost is not included in product price unless agreed in writing. Final shipping charges depend on weight, volume, destination, and Incoterms.',
  },
  {
    question: 'Tracking',
    answer: 'Tracking details are shared once shipment is dispatched.',
  },
  {
    question: 'Customs and Import Duties',
    answer: 'Import duties, taxes, and customs clearance charges in the destination country are the buyer’s responsibility unless otherwise agreed.',
  },
  {
    question: 'Damaged or Lost Shipment',
    answer: 'Claims must be reported within 48 hours of delivery with photos and documents. Insurance applies only if selected at the time of shipment.',
  },
  {
    question: 'Minimum Order Quantity',
    answer: 'MOQ varies depending on product and manufacturer.',
  },
];

export function ShippingFaqPage() {
  return (
    <AnimatedSection className="py-10 md:py-16">
      <div className="container max-w-4xl">
        <h1 className="h2 mb-10 text-center md:mb-16">Shipping FAQ</h1>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.question}>
              <AccordionTrigger className="text-left text-lg font-semibold">{item.question}</AccordionTrigger>
              <AccordionContent className="whitespace-pre-line pt-2 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}


