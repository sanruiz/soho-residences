"use client";

interface FormInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export function FormInput({ label, type = "text", placeholder, required }: FormInputProps) {
  return (
    <div className="relative w-full">
      {label && (
        <label 
          className="absolute top-2 left-4 pointer-events-none text-[11px] opacity-60 tracking-[0.01em] capitalize"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full transition-all focus:outline-none focus:border-black border border-[rgb(141,141,141)] pt-6 pb-2 px-4 text-base bg-transparent"
      />
    </div>
  );
}

interface RadioGroupProps {
  label: string;
  options: string[];
  name: string;
}

export function RadioGroup({ label, options, name }: RadioGroupProps) {
  return (
    <div className="relative w-full border border-[rgb(141,141,141)] pt-6 pb-2 px-4">
      <label 
        className="absolute top-2 left-4 text-[11px] opacity-60 tracking-[0.01em] capitalize"
      >
        {label}
      </label>
      <div className="flex gap-6">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
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
}

export function BedroomSelector({ label }: BedroomSelectorProps) {
  return (
    <div className="relative w-full border border-[rgb(141,141,141)] pt-6 pb-2 px-4">
      <label 
        className="absolute top-2 left-4 text-[11px] opacity-60 tracking-[0.01em] capitalize"
      >
        {label}
      </label>
      <div className="flex gap-3">
        {[3, 4, 5].map((num) => (
          <label key={num} className="cursor-pointer">
            <input
              type="radio"
              name="bedrooms"
              value={num}
              className="peer sr-only"
            />
            <div 
              className="w-12 h-12 flex items-center justify-center transition-all border border-front-door-navy text-base peer-checked:bg-front-door-navy hover:bg-front-door-navy peer-checked:text-linen hover:text-linen"
            >
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
  options: string[];
}

export function SelectInput({ label, options }: SelectInputProps) {
  return (
    <div className="relative w-full">
      <label 
        className="absolute top-2 left-4 pointer-events-none z-10 text-[11px] opacity-60 tracking-[0.01em] capitalize"
      >
        {label}
      </label>
      <select
        className="w-full transition-all focus:outline-none focus:border-black cursor-pointer appearance-none border border-[rgb(141,141,141)] pt-6 pb-2 px-4 text-base bg-transparent bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201L6%206L11%201%22%20stroke%3D%22%23000%22%20stroke-width%3D%221.5%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_16px_center]"
      >
        <option value="">Select option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
