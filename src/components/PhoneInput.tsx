"use client";

import * as React from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";

type PhoneInputProps = {
  label?: string;
  name?: string;
  required?: boolean;
  defaultCountry?: RPNInput.Country;
};

export function PhoneInput({
  label,
  name,
  required,
  defaultCountry = "MX",
}: PhoneInputProps) {
  const [value, setValue] = React.useState<RPNInput.Value | undefined>(undefined);

  return (
    <div className="relative w-full -mt-px first:mt-0">
      {label && (
        <label className="absolute top-2 left-4 pointer-events-none text-xs tracking-[0.01em] capitalize z-10">
          {label}
        </label>
      )}
      <input type="hidden" name={name} value={value || ""} />
      <RPNInput.default
        international
        countryCallingCodeEditable={false}
        defaultCountry={defaultCountry}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        flags={flags}
        className="phone-input-container w-full transition-all focus-within:border-black focus-within:relative focus-within:z-10 border border-front-door-navy pt-6 pb-2 px-4 text-base bg-transparent flex items-center gap-2"
        inputComponent={CustomInput}
        countrySelectComponent={CountrySelectComponent}
      />
      {required && (
        <input
          type="text"
          required
          value={value || ""}
          onChange={() => {}}
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

const CustomInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ className: _className, ...props }, ref) => (
  <input
    ref={ref}
    className="flex-1 bg-transparent border-none outline-none text-base"
    {...props}
  />
));
CustomInput.displayName = "CustomInput";

type CountrySelectProps = {
  value: RPNInput.Country;
  onChange: (country: RPNInput.Country) => void;
  options: { value?: RPNInput.Country; label: string }[];
  disabled?: boolean;
};

const CountrySelectComponent = ({
  value,
  onChange,
  options,
  disabled,
}: CountrySelectProps) => {
  const Flag = value ? flags[value] : null;

  return (
    <div className="relative flex items-center">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as RPNInput.Country)}
        disabled={disabled}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        aria-label="Select country"
      >
        {options
          .filter((option) => option.value)
          .map((option) => (
            <option key={option.value} value={option.value}>
              {option.label} (+{option.value && RPNInput.getCountryCallingCode(option.value)})
            </option>
          ))}
      </select>
      <div className="flex items-center gap-1 pointer-events-none">
        <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20">
          {Flag && <Flag title={value} />}
        </span>
        <svg
          className="w-3 h-3 opacity-60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default PhoneInput;
