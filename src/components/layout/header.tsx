'use client';

import Link from 'next/link';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/#contact', label: 'Contact Us' },
];

export function Header() {
  const { scrollY, scrollDirection } = useScroll();
  const isSticky = scrollY > 150;
  const isHidden = isSticky && scrollDirection === 'down';

  return (
    <header className={cn('relative z-40 transition-all duration-300', isSticky ? 'pb-0' : 'pb-0')}>
      <div
        className={cn(
          'bg-white transition-transform duration-500 shadow-sm',
          isSticky && 'fixed top-0 left-0 right-0 shadow-md',
          isHidden ? '-translate-y-full' : 'translate-y-0'
        )}
      >
        <div className="container flex items-center justify-center py-4">
          <nav>
            <ul className="flex items-center justify-center gap-12 md:gap-16 text-lg font-semibold text-black">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-full after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}


