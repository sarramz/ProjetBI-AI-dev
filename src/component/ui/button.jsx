export default function Button({ children, className = "", variant = "default", size = "md", ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  let variantClasses = "";
  if (variant === "ghost") variantClasses = "bg-transparent hover:bg-gray-100";
  else variantClasses = "bg-teal-600 text-white hover:bg-teal-700";

  let sizeClasses = "";
  if (size === "icon") sizeClasses = "p-2";
  else sizeClasses = "px-6 py-3";

  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}