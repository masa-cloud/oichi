import 'tailwindcss/tailwind.css'

export function H3({children}) {
  return (
      <h3 className="text-base sm:text-xl md:text-2xl">{children}</h3>
  )
}
