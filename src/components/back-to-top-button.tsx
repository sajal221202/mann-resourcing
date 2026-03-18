"use client";

import { ArrowUp } from 'lucide-react';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function BackToTopButton() {
  const { scrollY } = useScroll();
  const show = scrollY > 250;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      aria-label="back to top"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full bg-background text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        show ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
      )}
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
}


