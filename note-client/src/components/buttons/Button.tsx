import React from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  borderColor: string;
  backgroundColor?: string;
  backgroundColorHover: string;
  onClick?: () => void;
  ariaLabel?: string;
  children?: React.ReactNode;
}

export function Button({
  type = "button",
  borderColor,
  backgroundColor,
  backgroundColorHover,
  onClick,
  ariaLabel,
  children
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-24 py-2 px-4 ${backgroundColor} ${backgroundColorHover} text-black dark:text-white font-semibold hover:text-white border-2 ${borderColor} hover:border-transparent rounded`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}