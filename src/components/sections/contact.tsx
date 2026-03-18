"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Instagram, Youtube, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const interests = ['Import', 'Export', 'Sourcing', 'B2B Trade', 'White Label'];

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  interests: z.array(z.string()).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Import']);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '', interests: ['Import'] },
  });

  const toggleInterest = (interest: string) => {
    const newInterests = selectedInterests.includes(interest)
      ? selectedInterests.filter((i) => i !== interest)
      : [...selectedInterests, interest];
    setSelectedInterests(newInterests);
    form.setValue('interests', newInterests);
  };

  async function onSubmit(data: ContactFormValues) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'b692b76c-8ca4-4235-ab87-48a24db7083d',
          ...data,
        }),
      });
      const result = await response.json();
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for contacting us. We will get back to you shortly.',
        });
        form.reset();
        setSelectedInterests(['Import']);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request. Please try again.',
      });
    }
  }

  return (
    <AnimatedSection id="contact" className="section bg-white text-foreground">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:gap-16 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold leading-snug text-foreground md:text-4xl">
              Connect with a leading <span className="text-primary">private import-export</span> company in{' '}
              <span className="text-primary">India.</span> We help you source premium handicrafts, furniture, and more.
            </h2>
            <p className="mt-8 text-base text-muted-foreground">
              So you can build your brand and fill retail shelves with stories crafted by tradition.
            </p>
            <div className="my-auto space-y-3 pt-8">
              <ContactInfoItem href="mailto:Info@mannresourcing.com" icon={Mail}>
                Info@mannresourcing.com
              </ContactInfoItem>
              <ContactInfoItem href="tel:+917067551253" icon={Phone}>
                +91 70675 51253
              </ContactInfoItem>
              <ContactInfoItem
                href="https://www.google.com/maps/search/?api=1&query=Garha+Fatak+Marg,+Jabalpur+482002,+Madhya+Pradesh,+India"
                icon={MapPin}
                target="_blank"
              >
                Garha Fatak Marg, Jabalpur 482002, India
              </ContactInfoItem>
            </div>
            <div className="mt-8 flex items-center gap-5 text-foreground">
              <SocialLink href="https://www.instagram.com/mann_resourcing_industries?igsh=MXFrOXFqOHdzajVueQ%3D%3D&utm_source=qr" icon={Instagram} label="Instagram" />
              <SocialLink href="https://youtube.com/@mannresourcingindustries?si=HXGzj4yYo6s4odNc" icon={Youtube} label="YouTube" />
              <SocialLink href="https://x.com/mannresourcing?s=11" icon={Twitter} label="Twitter" />
            </div>
          </div>

          <div className="rounded-2xl bg-black p-6 text-white shadow-lg">
            <div>
              <p className="font-bold text-white">I’m interested in...</p>
              <div className="mt-2.5 flex flex-wrap gap-2.5">
                {interests.map((interest) => (
                  <Button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    variant="outline"
                    size="sm"
                    className={cn(
                      'rounded-lg border-white/30 bg-transparent text-white hover:bg-white/10',
                      selectedInterests.includes(interest) && 'border-primary bg-primary text-primary-foreground hover:bg-primary/90'
                    )}
                  >
                    {interest}
                  </Button>
                ))}
              </div>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                <FormField control={form.control} name="name" render={({ field }) => <FormInput field={field} label="Your name" placeholder="Your name" inverted />} />
                <FormField control={form.control} name="email" render={({ field }) => <FormInput field={field} label="Your email" placeholder="Your email" type="email" inverted />} />
                <FormField control={form.control} name="message" render={({ field }) => <FormTextarea field={field} label="Your message" placeholder="Your message" inverted />} />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg" disabled={form.formState.isSubmitting}>
                  <Send className="mr-2 h-4 w-4" />
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

const FormInput = ({ field, label, placeholder, type = 'text', inverted = false }: any) => (
  <FormItem>
    <FormLabel className={cn("font-semibold", inverted ? "text-white" : "text-black")}>{label}</FormLabel>
    <FormControl>
      <Input
        {...field}
        type={type}
        placeholder={placeholder}
        className={cn(
          "p-5 text-base",
          inverted
            ? "bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-white/60"
            : "bg-white text-black"
        )}
      />
    </FormControl>
  </FormItem>
);

const FormTextarea = ({ field, label, placeholder, inverted = false }: any) => (
  <FormItem>
    <FormLabel className={cn("font-semibold", inverted ? "text-white" : "text-black")}>{label}</FormLabel>
    <FormControl>
      <Textarea
        {...field}
        placeholder={placeholder}
        className={cn(
          "min-h-[120px] p-5 text-base",
          inverted
            ? "bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-white/60"
            : "bg-white text-black"
        )}
      />
    </FormControl>
  </FormItem>
);

const ContactInfoItem = ({ href, icon: Icon, children, target }: any) => (
  <Link href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className="group flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
    <Icon className="h-5 w-5 text-primary" />
    <span>{children}</span>
  </Link>
);

const SocialLink = ({ href, icon: Icon, label }: any) => (
  <Link href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
    <Icon className="h-6 w-6" />
  </Link>
);
