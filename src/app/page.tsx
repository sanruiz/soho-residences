import Image from "next/image";
import { NavigationBar } from "@/components/NavigationBar";
import {
  FormInput,
  RadioGroup,
  BedroomSelector,
  SelectInput,
} from "@/components/FormInput";
import { BrochureButton } from "@/components/BrochureButton";

export default function Home() {
  return (
    <div className="w-full">
      {/* SECTION 1 - HERO */}
      <section className="w-full flex items-center justify-center h-screen bg-champagne-gold/30">
        <Image
          src="/images/hero-logo.png"
          alt="Soho Residences Los Cabos"
          width={500}
          height={200}
          className="max-w-[90%] max-h-[200px] w-auto h-auto"
          priority
        />
      </section>

      {/* SECTIONS 2-4 WITH NAVIGATION BAR */}
      <div className="relative">
        <NavigationBar />

        {/* SECTION 2 - PROJECT RENDER */}
        <section className="w-full bg-white flex items-center justify-center h-screen">
          <div className="w-full h-full pt-[70px] relative">
            <Image
              src="/images/scene2.png"
              alt="Soho Residences Los Cabos - Property Render"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* SECTION 3 - INQUIRY FORM */}
        <section
          id="inquire"
          className="w-full flex items-center justify-center px-6 md:px-20 h-screen pt-[70px]"
          style={{ backgroundColor: "#FFFEF7" }}
        >
          <div className="flex flex-col gap-0 w-full md:w-auto max-w-[650px]">
            <h2
              className="mb-8 text-[32px] tracking-[0.01em]"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Inquire now
            </h2>

            <RadioGroup
              label="Are you a Soho House member?"
              options={["Yes", "No"]}
              name="member"
            />

            <FormInput label="Full name" placeholder="" required />

            <FormInput
              label="Phone number"
              type="tel"
              placeholder=""
              required
            />

            <FormInput
              label="Email address"
              type="email"
              placeholder=""
              required
            />

            <BedroomSelector label="Number of bedrooms" />

            <RadioGroup
              label="Are you a real estate agent?"
              options={["Yes", "No"]}
              name="agent"
            />

            <SelectInput
              label="How did you learn about us?"
              options={[
                "Soho House",
                "Friends",
                "Social Media",
                "SOMA",
                "PR",
                "Other",
              ]}
            />

            {/* Privacy Policy Checkbox */}
            <label className="flex items-start gap-3 mt-6 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 border border-[rgb(141,141,141)] bg-transparent appearance-none checked:bg-front-door-navy cursor-pointer"
                required
              />
              <span className="text-[14px] leading-[1.6] tracking-[0.01em]">
                I confirm I have read and understood the terms of the{" "}
                <a href="#" className="font-semibold underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <button className="mt-6 transition-all px-6 h-12 rounded-full cursor-pointer hover:bg-front-door-navy border border-front-door-navy hover:text-linen bg-transparent text-front-door-navy w-full">
              Submit
            </button>

            <p className="mt-6 text-[12px] leading-[1.6] opacity-70 tracking-[0.01em]">
              This site is protected by reCAPTCHA and the{" "}
              <a href="#" className="font-semibold">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="font-semibold">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </section>

        {/* SECTION 4 - EDITORIAL BROCHURE */}
        <section
          id="brochure"
          className="w-full flex items-center justify-center px-6 md:px-20 h-screen pt-[70px] bg-champagne-gold/30"
        >
          <div className="flex flex-col items-center text-center max-w-[700px]">
            <h2 className="text-[48px] md:text-[64px] tracking-[0.01em] leading-[1.1] mb-8">
              Soho Residences
              <br />
              Los Cabos
            </h2>

            <p className="text-[16px] md:text-[17px] leading-[1.7] mb-4 text- opacity-85">
              Discover our collection of exclusive residences where the desert
              meets the sea. <br />
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
      <section className="w-full flex justify-center min-h-[600px] py-20 bg-front-door-navy">
        <div className="w-full px-6 md:px-20 max-w-[1440px]">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Left Column - Legal Text */}
            <div className="max-w-[640px] text-linen text-[13px] leading-[1.7] opacity-85 tracking-[0.01em]">
              <p className="mb-6">
                IMPORTANT NOTICE: The information contained in this website is
                for general informational purposes only and does not constitute
                an offer to sell or a solicitation of an offer to buy any units
                or residences. Any offering can only be made by means of a
                prospectus or offering plan, as applicable.
              </p>
              <p className="mb-6">
                All images, renderings, and descriptions are conceptual and for
                illustrative purposes only and are subject to change. Amenities,
                features, finishes, services, and other details shown are
                proposed and are subject to change at any time without notice.
              </p>
              <p className="mb-6">
                Development is being undertaken by Soho Residences Development
                LLC (&quot;Developer&quot;). The project will be marketed and
                sold by an appropriately licensed real estate broker. This is
                not intended to be an offer to sell, or solicitation of an offer
                to buy, units in any jurisdiction where prohibited by law.
              </p>
              <p className="mb-6">
                Soho House membership is separate and not included with the
                purchase of a residence. Membership is subject to availability
                and approval by Soho House. Equal Housing Opportunity.
              </p>
              <p>
                © 2025 Soho Residences. All rights reserved. Soho Residences,
                Soho House and all related marks are trademarks of Soho House
                &amp; Co. Inc.
              </p>
            </div>

            {/* Right Column - Logos */}
            <div className="flex flex-row items-end gap-6 md:self-end">
              <a
                href="https://soma.group/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/soma_black.svg"
                  alt="Soma"
                  width={118}
                  height={14}
                  className="invert opacity-85 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="https://www.sohohouse.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/soho-icon.svg"
                  alt="Soho House Icon"
                  width={40}
                  height={40}
                  className="invert opacity-85 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
