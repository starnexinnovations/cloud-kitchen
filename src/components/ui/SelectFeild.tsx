import React from "react";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  error?: string;
  
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  required,
  error
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-text-primary">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
       <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-2 rounded-xl border appearance-none bg-white ${
            error
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-200 focus:ring-primary"
          } focus:outline-none focus:ring-2 transition`}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
          ▼
        </div>
      </div>

      {/* Error */}
      {error && (
        <span className="text-xs text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
};

export default SelectField;