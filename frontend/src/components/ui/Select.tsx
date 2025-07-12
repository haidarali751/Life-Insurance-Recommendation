"use client";
import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ label, options, ...props }) => (
  <div className="flex flex-col w-full">
    <label
      className="text-sm font-medium mb-1 text-gray-700"
      htmlFor={props.name}
    >
      {label}
    </label>
    <select
      {...props}
      className={
        "px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm bg-gray-50 text-gray-700 " +
        (props.className || "")
      }
    >
      {options.map((opt) => (
        <option key={opt} value={opt} className="text-gray-700">
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
