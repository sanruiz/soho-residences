import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-front-door-navy py-6 text-linen ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <div className="flex md:flex-row  items-center justify-between w-full">
            <Link
              className="flex items-center gap-2 hover:opacity-70"
              href="https://www.sohohouse.com/"
              title="sohohouse.com"
              target="_blank"
            >
              <Image
                src="/icons/soho-icon.svg"
                alt="Soho Residences Los Cabos"
                width={40}
                height={40}
                className="h-10 w-auto invert  transition-opacity"
              />
              <Image
                src="/icons/soho-logo.svg"
                alt="Soho Residences Los Cabos"
                width={80}
                height={20}
                className="h-4 w-auto invert transition-opacity"
              />
            </Link>

            <Link href="https://soma.group/" title="soma.group" target="_blank">
              <Image
                src="/icons/soma_black.svg"
                alt="SOMA"
                width={100}
                height={32}
                className="h-8 w-auto invert hover:opacity-70 transition-opacity"
              />
            </Link>
          </div>

          {/* Links */}
          {/* <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:info@sohoresidencesloscabos.com"
              className="hover:opacity-70 transition-opacity"
            >
              info@sohoresidencesloscabos.com
            </a>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-linen/20 text-sm opacity-70">
          <p>
            © {new Date().getFullYear()} Soho Residences. All rights reserved.
            Soho Residences, Soho House and all related marks are trademarks of
            Soho House &amp; Co. Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
