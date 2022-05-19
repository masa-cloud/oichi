import 'tailwindcss/tailwind.css'

export function H1({children}) {
  return (
      <h1 className="text-xl sm:text-3xl md:text-4xl">{children}</h1>
  )
}
