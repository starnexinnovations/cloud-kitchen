import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
   required?: boolean;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  error
}) => {
  return (
    <div className="flex flex-col gap-2">
       <label className="text-sm font-medium text-text-primary">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
       className={`px-4 py-2 rounded-xl border ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-200 focus:ring-primary"
        } focus:outline-none focus:ring-2 transition`}
      />
        {error && (
        <span className="text-xs text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
};

export default InputField;