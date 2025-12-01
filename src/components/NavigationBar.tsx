"use client";

import Image from "next/image";

export function NavigationBar() {
  return (
    <nav className="sticky top-0 z-50 px-6 md:px-20 bg-linen">
      <div className="flex max-w-7xl mx-auto items-center justify-between h-16 gap-8 ">
        {/* Logo Icon */}
        <Image
          src="/images/nav-logo.png"
          alt="Soho Residences"
          width={120}
          height={32}
          className="h-8 w-auto"
        />

        {/* CTAs */}
        <div className="flex items-center gap-4 text-lg md:gap-8  text-front-door-navy">
          <a
            href="#inquire"
            className="transition-opacity hover:opacity-70 hover:border-b box-content border-front-door-navy"
          >
            Inquire now
          </a>
          <a
            href="#brochure"
            className="transition-opacity hover:opacity-70  hover:border-b border-front-door-navy"
          >
            Find out more
          </a>
        </div>
      </div>
    </nav>
  );
}
