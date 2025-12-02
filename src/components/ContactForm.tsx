"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import {
  FormInput,
  RadioGroup,
  BedroomSelector,
  SelectInput,
} from "@/components/FormInput";

const initialState = {
  success: false,
  message: "",
  error: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (_prevState: typeof initialState, formData: FormData) => {
      const result = await submitContactForm(formData);
      return {
        success: result.success,
        message: result.message || "",
        error: result.error || "",
      };
    },
    initialState
  );

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="w-16 h-16 mb-6 rounded-full bg-front-door-navy flex items-center justify-center">
          <svg
            className="w-8 h-8 text-linen"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-medium mb-2">Thank you!</h3>
        <p className="text-lg opacity-80">{state.message}</p>

        <a
          href={`https://www.convergepay.com/hosted-payments?ssl_txn_auth_token=${process.env.NEXT_PUBLIC_CONVERGE_PAY_TOKEN}`}
          className="mt-6 transition-all px-6 h-12 rounded-full bg-front-door-navy border border-front-door-navy text-linen hover:bg-transparent hover:text-front-door-navy flex items-center justify-center"
          rel="noopener noreferrer"
          aria-label="Make a Payment"
        >
          Make A Payment
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-0 w-full">
      <RadioGroup
        label="Are you a Soho House member?"
        options={["Yes", "No"]}
        name="member"
        defaultValue="No"
      />

      <FormInput label="Full name" name="fullName" placeholder="" required />

      <FormInput
        label="Phone number"
        name="phoneNumber"
        type="tel"
        placeholder=""
        required
      />

      <FormInput
        label="Email address"
        name="email"
        type="email"
        placeholder=""
        required
      />

      <BedroomSelector
        label="Number of bedrooms you're interested in"
        defaultValue={2}
      />

      <RadioGroup
        label="Are you a real estate agent?"
        options={["Yes", "No"]}
        name="agent"
        defaultValue="No"
      />

      <SelectInput
        label="How did you learn about us?"
        name="howDidYouHear"
        defaultValue="Soho House"
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
          name="privacyPolicy"
          className="w-5 h-5 mt-0.5 border border-front-door-navy bg-transparent appearance-none checked:bg-front-door-navy cursor-pointer"
          required
        />
        <span className="text-sm leading-snug tracking-wide">
          I confirm I have read and understood the terms of the{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            className="font-semibold underline"
          >
            Privacy Policy
          </a>
          .
        </span>
      </label>

      {state.error && (
        <p className="mt-4 text-red-600 text-sm">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 transition-all px-6 h-12 rounded-full cursor-pointer bg-front-door-navy border border-front-door-navy text-linen hover:bg-transparent hover:text-front-door-navy w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>

      <p className="mt-6 text-xs leading-snug opacity-70 tracking-wide">
        This site is protected by reCAPTCHA and the{" "}
        <a href="/privacy-policy" target="_blank" className="font-semibold">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" target="_blank" className="font-semibold">
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </form>
  );
}
