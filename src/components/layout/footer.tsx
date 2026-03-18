'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Logo } from '@/components/ui/logo';
import { useToast } from '@/hooks/use-toast';
import { AnimatedSection } from '@/components/animated-section';

const NewsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export function Footer() {
  const { toast } = useToast();
  const paymentImage = PlaceHolderImages.find((img) => img.id === 'payment-methods');

  const form = useForm<z.infer<typeof NewsletterSchema>>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof NewsletterSchema>) {
    console.log(values);
    toast({
      title: 'Subscribed!',
      description: "Thanks for subscribing to our newsletter.",
    });
    form.reset();
  }

  const footerLinks = {
    company: {
      title: 'Company',
      items: [
        { text: '+91 7067551253', isBold: true, href: 'tel:+917067551253' },
        { text: 'info@mannresourcing.com', isBold: false, href: 'mailto:info@mannresourcing.com' },
      ],
    },
    useful: {
      title: 'Useful links',
      items: [
        { text: 'New Products', href: '/new-products' },
        { text: 'Best Sellers', href: '/best-sellers' },
        { text: 'Bundle & Save', href: '/bundle-and-save' },
      ],
    },
    information: {
      title: 'Information',
      items: [
        { text: 'Contact Us', href: '/#contact' },
        { text: 'Shipping FAQ', href: '/shipping-faq' },
        { text: 'Terms & Conditions', href: '/terms-and-conditions' },
        { text: 'Privacy Policy', href: '/privacy-policy' },
      ],
    },
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/mannresourcing?s=11', label: 'Twitter' },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/mann_resourcing_industries?igsh=MXFrOXFqOHdzajVueQ%3D%3D&utm_source=qr',
      label: 'Instagram',
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@mannresourcingindustries?si=HXGzj4yYo6s4odNc',
      label: 'YouTube',
    },
  ];

  return (
    <AnimatedSection as="footer" className="bg-muted py-16 lg:py-24">
      <div className="container">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="mb-2.5 text-xl font-semibold text-black">{section.title}</h3>
              <ul>
                {section.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`py-1.5 text-sm transition-all hover:underline ${
                        item.isBold ? 'font-extrabold text-black' : 'text-foreground'
                      }`}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-3xl font-semibold leading-tight text-black">Good emails.</h3>
            <p className="my-2.5 text-sm leading-loose">
              Enter your email below to be the first to know about new collections and product launches.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="relative mt-9">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="h-auto bg-white p-3 pr-36 text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="absolute" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="absolute right-0 top-0 h-full rounded-l-none">
                  Subscribe
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <p className="text-sm">&copy; 2025 mannresourcing</p>
            <ul className="flex gap-5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-colors hover:text-primary"
                  >
                    <link.icon className="h-5 w-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <Logo />
          </div>

          {paymentImage && (
            <Image
              src={paymentImage.imageUrl}
              alt={paymentImage.description}
              data-ai-hint={paymentImage.imageHint}
              width={313}
              height={28}
              className="max-w-full"
            />
          )}
        </div>
        <div className="mt-4 flex justify-center lg:hidden">
          <Logo />
        </div>
      </div>
    </AnimatedSection>
  );
}


