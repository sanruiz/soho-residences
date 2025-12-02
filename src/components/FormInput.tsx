"use client";

interface FormInputProps {
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: FormInputProps) {
  return (
    <div className="relative w-full -mt-px first:mt-0">
      {label && (
        <label className="absolute top-2 left-4 pointer-events-none text-xs tracking-[0.01em] capitalize">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full transition-all focus:outline-none focus:border-black focus:relative focus:z-10 border border-front-door-navy pt-6 pb-2 px-4 text-base bg-transparent"
      />
    </div>
  );
}

interface RadioGroupProps {
  label: string;
  options: string[];
  name: string;
  defaultValue?: string;
  required?: boolean;
}

export function RadioGroup({
  label,
  options,
  name,
  defaultValue,
  required,
}: RadioGroupProps) {
  const defaultOption = defaultValue || options[1]; // Default to second option (usually "No")

  return (
    <div className="relative w-full border border-front-door-navy pt-6 pb-2 px-4 -mt-px first:mt-0">
      <label className="absolute top-2 left-4 text-xs tracking-[0.01em] capitalize">
        {label}
      </label>
      <div className="flex gap-6">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={option}
              defaultChecked={option === defaultOption}
              required={required}
              className="w-4 h-4 cursor-pointer accent-black"
            />
            <span className="text-base opacity-90">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

interface BedroomSelectorProps {
  label: string;
  defaultValue?: number;
}

export function BedroomSelector({
  label,
  defaultValue = 2,
}: BedroomSelectorProps) {
  return (
    <div className="relative w-full border border-front-door-navy pt-8 pb-2 px-4 -mt-px first:mt-0">
      <label className="absolute top-2 left-4 text-xs tracking-[0.01em] capitalize">
        {label}
      </label>
      <div className="flex gap-3">
        {[2, 3, 4].map((num) => (
          <label key={num} className="cursor-pointer">
            <input
              type="radio"
              name="bedrooms"
              value={num}
              defaultChecked={num === defaultValue}
              className="peer sr-only"
            />
            <div className="w-12 h-12 flex items-center justify-center transition-all border border-front-door-navy text-base peer-checked:bg-front-door-navy hover:bg-front-door-navy peer-checked:text-linen hover:text-linen">
              {num}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

interface SelectInputProps {
  label: string;
  name?: string;
  options: string[];
  required?: boolean;
  defaultValue?: string;
}

export function SelectInput({
  label,
  name,
  options,
  required,
  defaultValue,
}: SelectInputProps) {
  return (
    <div className="relative w-full -mt-px first:mt-0">
      <label className="absolute top-2 left-4 pointer-events-none z-10 text-xs tracking-[0.01em] capitalize">
        {label}
      </label>
      <select
        name={name}
        required={required}
        defaultValue={defaultValue || options[0]}
        className="w-full transition-all focus:outline-none focus:border-black focus:relative focus:z-10 cursor-pointer appearance-none border border-front-door-navy pt-6 pb-2 px-4 text-base bg-transparent bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201L6%206L11%201%22%20stroke%3D%22%23000%22%20stroke-width%3D%221.5%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-position-[right_16px_center]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
