"use client";

import { useRef, type ElementType, type HTMLAttributes } from 'react';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
}

export function AnimatedSection({ as: Tag = 'section', className, children, ...props }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  // Triggers when the element is about 1/3 from the top of the viewport
  const isVisible = useOnScreen(ref, '-33%');

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        'transform opacity-0 translate-y-24',
        isVisible && 'opacity-100 translate-y-0',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}


