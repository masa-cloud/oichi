import 'tailwindcss/tailwind.css'

export function H2({children}) {
  return (
      <h1 className="text-lg sm:text-2xl md:text-3xl">{children}</h1>
  )
}
