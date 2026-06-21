import React from "react";

const CustomInput = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}) => {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`
          w-full
          px-4
          py-3
          rounded-xl
          border
          bg-white
          transition-all
          duration-200
          outline-none
          ${
            error
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          }
        `}
      />

      {error && (
        <p className="text-red-500 text-xs">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default CustomInput;