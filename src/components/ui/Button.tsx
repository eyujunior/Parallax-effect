// components/ui/Button.tsx
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "gradient" | "outline" | "ghost";
};

export default function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  let base = "rounded-full font-medium transition-colors cursor-pointer";

  if (variant === "default") {
    base += " bg-white text-black";
  }
  if (variant === "gradient") {
    base += " border gradient-border text-white";
  }
  if (variant === "outline") {
    base += " border border-white/50 hover:bg-white/10 text-white";
  }

  if (variant === "ghost") {
    base += " text-white bg-transparent hover:text-gray-300";
  }

  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
