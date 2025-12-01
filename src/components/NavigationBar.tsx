"use client";

import Image from "next/image";

export function NavigationBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between h-[70px] px-6 md:px-20">
        {/* Logo Icon */}
        <Image 
          src="/images/nav-logo.png" 
          alt="Soho Residences"
          width={120}
          height={32}
          className="h-8 w-auto"
        />
        
        {/* CTAs */}
        <div className="flex items-center gap-4 md:gap-8">
          <a 
            href="#inquire"
            className="transition-opacity hover:opacity-70 text-[14px] tracking-[0.02em] text-front-door-navy"
          >
            Inquire now
          </a>
          <a 
            href="#brochure"
            className="transition-opacity hover:opacity-70 text-[15px] tracking-[0.02em] text-front-door-navy"
          >
            Find out more
          </a>
          
        </div>
      </div>
    </nav>
  );
}
