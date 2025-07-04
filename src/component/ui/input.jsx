export default function Input({ className = "", ...props }) {
  const baseClasses = "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
  
  return (
    <input className={`${baseClasses} ${className}`} {...props} />
  )
}
