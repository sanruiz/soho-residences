"use client";

import { sendGAEvent } from "@next/third-parties/google";

interface BrochureButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function BrochureButton({ className, children }: BrochureButtonProps) {
  const handleClick = () => {
    // Track the event in Google Analytics
    sendGAEvent("event", "download_brochure", {
      event_category: "engagement",
      event_label: "Soho Residences Brochure",
      value: 1,
    });

    // Open the brochure PDF in a new tab
    window.open("/documents/soho-residences-brochure.pdf", "_blank");
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
