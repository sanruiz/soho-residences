import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Soho Residences Los Cabos",
  description: "Legal notice and data protection information for Soho Residences Los Cabos.",
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-linen text-front-door-navy flex flex-col">
      {/* Navigation */}
      <NavigationBar />

      {/* Content */}
      <main className="flex-1 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header Info */}
          <div className="text-right mb-12">
            <p className="text-base">Los Cabos, Baja California Sur, Mexico.</p>
            <p className="text-base">{currentDate}</p>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold mb-8">Legal Notice and Data Protection:</h1>

          {/* Introduction */}
          <p className="text-base leading-relaxed mb-8">
            Thank you for your interest in our upcoming development:
          </p>

          <h2 className="text-2xl font-bold text-center mb-8">
            &ldquo;SOHO RESIDENCES LOS CABOS&rdquo;
          </h2>

          {/* Data Protection Section */}
          <div className="space-y-6 mb-12">
            <p className="text-base leading-relaxed">
              By registering on this list, you agree that the personal information you provide will be
              used exclusively to keep you informed about the project, assess your eligibility, and
              contact you with relevant updates.
            </p>

            <p className="text-base leading-relaxed">
              Your information will be handled confidentially and in accordance with applicable data
              protection regulations. We inform you that we will not share your data with third parties
              without your consent.
            </p>
          </div>

          {/* Refundable Deposit Section */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4">Refundable Deposit:</h3>
            
            <div className="space-y-6">
              <p className="text-base leading-relaxed">
                We confirm that the deposit you made to access this interest list is{" "}
                <strong>fully refundable</strong> at any time prior to signing a definitive contract.
                This deposit does not constitute a commitment to purchase, does not guarantee future
                availability, and does not create any obligation for either party.
              </p>

              <p className="text-base leading-relaxed">
                By proceeding, you confirm that you have read and accept these terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
