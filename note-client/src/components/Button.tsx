import React from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  borderColor: string;
  backgroundColorHover: string;
  textColor: string;
  onClick?: () => void;
  ariaLabel?: string;
  children?: React.ReactNode;
}

export function Button({
                         type = "button",
                         borderColor,
                         backgroundColorHover,
                         textColor,
                         onClick,
                         ariaLabel,
                         children,
                       }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-transparent ${backgroundColorHover} ${textColor} font-semibold hover:text-white py-2 px-4 border-2 ${borderColor} hover:border-transparent rounded`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}