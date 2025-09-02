import { type ReactNode, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface BaseButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  endIcon?: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  to?: string;
  dropdown?: ReactNode;
  className?: string;
}

export default function BaseButton({
  children,
  icon,
  endIcon,
  variant = "secondary",
  onClick,
  to,
  dropdown,
  className = "",
}: BaseButtonProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const baseClasses =
    "inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors w-full sm:w-auto";
  const variantClasses = {
    primary: "bg-neutral-800 hover:bg-neutral-700",
    secondary: "border border-neutral-600 hover:border-neutral-500",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  useEffect(() => {
    if (!dropdown) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdown]);

  const buttonContent = (
    <>
      {icon}
      <span>{children}</span>
      {endIcon}
    </>
  );

  if (dropdown) {
    return (
      <div ref={dropdownRef} className="relative group w-full sm:w-auto">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className={buttonClasses}
        >
          {buttonContent}
        </button>
        <div
          className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-neutral-900 border border-neutral-700 rounded-lg transition-opacity z-10 group-hover:opacity-100 group-hover:pointer-events-auto ${showDropdown ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          {dropdown}
        </div>
      </div>
    );
  }

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {buttonContent}
    </button>
  );
}
