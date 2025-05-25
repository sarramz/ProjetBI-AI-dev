export default function Button({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  onClick,
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    default: "bg-teal-600 text-white hover:bg-teal-700",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
    outline: "border border-gray-300 bg-white hover:bg-gray-50"
  }
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-8 text-lg",
    icon: "h-10 w-10"
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
