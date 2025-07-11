"use client";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="flex flex-col w-full">
    <label
      className="text-sm font-medium mb-1 text-gray-700"
      htmlFor={props.name}
    >
      {label}
    </label>
    <input
      {...props}
      className={
        "px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm bg-gray-50 placeholder-gray-400 " +
        (props.className || "")
      }
    />
  </div>
);

export default Input;
