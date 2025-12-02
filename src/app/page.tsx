import Image from "next/image";
import { NavigationBar } from "@/components/NavigationBar";
import { ContactForm } from "@/components/ContactForm";
import { BrochureButton } from "@/components/BrochureButton";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* SECTION 1 - HERO */}
      <section className="w-full flex items-center justify-center h-screen bg-linen snap-start">
        <Image
          src="/icons/sohoresidencesloscaboslogo.svg"
          alt="Soho Residences Los Cabos"
          width={500}
          height={200}
          className="max-w-10/12 max-h-52 w-auto h-auto fill-front-door-navy"
          priority
        />
      </section>

      {/* SECTIONS 2-4 WITH NAVIGATION BAR */}
      <div className="relative snap-start">
        <NavigationBar />

        {/* SECTION 2 - PROJECT RENDER */}
        <section className="w-full flex items-center justify-center h-screen bg-white">
          <div className="w-full h-full pt-16 relative">
            <Image
              src="/images/Scene2.png"
              alt="Soho Residences Los Cabos - Property Render"
              fill
              className="object-cover object-center md:object-top"
              priority
            />
          </div>
        </section>

        {/* SECTION 3 - INQUIRY FORM */}
        <section
          id="inquire"
          className="w-full flex items-center justify-center px-6 md:px-20 h-screen pt-20 snap-start bg-beach-house"
        >
          <div className="flex flex-col gap-0 w-full md:w-auto max-w-2xl">
            <h2 className="mb-8 text-3xl tracking-[0.01em] text-front-door-navy ">
              Inquire now
            </h2>

            <ContactForm />
          </div>
        </section>

        {/* SECTION 4 - EDITORIAL BROCHURE */}
        <section
          id="brochure"
          className="w-full flex items-center justify-center px-6 md:px-20 h-screen pt-20 bg-champagne-gold/50 snap-start"
        >
          <div className="flex flex-col items-center text-center max-w-3xl text-front-door-navy">
            <h2 className="text-5xl md:text-6xl tracking-wide leading-snug  mb-8">
              Soho Residences
              <br />
              Los Cabos
            </h2>

            <p className="text-base md:text-lg leading-7  mb-4 opacity-85">
              Discover our collection of exclusive residences where the desert
              dances with the sea. <br />
              Download our brochure to explore floor plans, amenities, and the
              Soho House lifestyle.
            </p>

            <BrochureButton className="mt-6 transition-all px-6 h-10 rounded-full cursor-pointer hover:bg-front-door-navy border border-front-door-navy hover:text-linen bg-transparent text-front-door-navy">
              View brochure
            </BrochureButton>
          </div>
        </section>
      </div>

      {/* SECTION 5 - LEGAL DISCLAIMER */}
      <section className="w-full  justify-center  py-12 px-6 md:px-20 bg-front-door-navy snap-start">
        <div className="max-w-7xl mx-auto text-linen text-sm leading-5 opacity-85 tracking-wide">
          <div className="max-w-xl">
            <p className="mb-6">
              IMPORTANT NOTICE: The information contained in this website is for
              general informational purposes only and does not constitute an
              offer to sell or a solicitation of an offer to buy any units or
              residences. Any offering can only be made by means of a prospectus
              or offering plan, as applicable.
            </p>
            <p className="mb-6">
              All images, renderings, and descriptions are conceptual and for
              illustrative purposes only and are subject to change. Amenities,
              features, finishes, services, and other details shown are proposed
              and are subject to change at any time without notice.
            </p>
            <p className="mb-6">
              Development is being undertaken by Soho Residences Development LLC
              (&quot;Developer&quot;). The project will be marketed and sold by
              an appropriately licensed real estate broker. This is not intended
              to be an offer to sell, or solicitation of an offer to buy, units
              in any jurisdiction where prohibited by law.
            </p>
            <p className="mb-6">
              Soho House membership is separate and not included with the
              purchase of a residence. Membership is subject to availability and
              approval by Soho House. Equal Housing Opportunity.
            </p>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}
