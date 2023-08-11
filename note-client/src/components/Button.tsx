import React from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  borderColor: String;
  backgroundColorHover: String;
  textColor: String;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button({
                  type = "button",
                  borderColor,
                  backgroundColorHover,
                  textColor,
                  onClick,
                  children,
                }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-transparent ${backgroundColorHover} ${textColor} font-semibold hover:text-white py-2 px-4 border-2 ${borderColor} hover:border-transparent rounded`}
    >
      {children}
    </button>
  );
}

export default Button;