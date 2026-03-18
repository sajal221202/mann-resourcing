import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  // Assuming logo is in public/images/logo.png as it's a binary file.
  // The user will need to add this file.
  return (
    <Link href="/" className={cn("block shrink-0", className)}>
      <Image 
        src="/images/content/logo.png" 
        width={140} 
        height={80} 
        alt="Mann Resourcing"
        className="h-auto w-[110px] md:w-[130px] lg:w-[150px] object-contain"
      />
    </Link>
  );
}

