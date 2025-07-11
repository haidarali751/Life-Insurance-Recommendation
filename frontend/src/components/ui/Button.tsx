"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ loading, children, ...props }) => (
  <button
    {...props}
    className={
      "bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow hover:bg-blue-700 transition w-full mt-4 flex items-center justify-center " +
      (props.className || "")
    }
    disabled={props.disabled || loading}
  >
    {loading ? (
      <span className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-blue-600 rounded-full inline-block"></span>
    ) : null}
    {children}
  </button>
);

export default Button;
