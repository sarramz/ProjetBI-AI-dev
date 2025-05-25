export default function Badge({ children, className = "" }) {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
  
  return (
    <span className={`${baseClasses} ${className}`}>
      {children}
    </span>
  )
}

