import Image from "next/image"

const links = [
  "Términos y condiciones",
  "Política de privacidad",
  "Contacto",
  "Volver al inicio",
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#ffffff" }} className="pt-16 md:pt-24 min-[2200px]:pt-32 pb-12 md:pb-24">

      {/* Línea separadora */}
      <div style={{ borderTop: "1px solid #1a1a1a" }} className="mb-8 md:mb-12" />

      {/* Botonera + Logo */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-8 px-6 md:px-12 xl:px-16 min-[2200px]:px-50">

        {/* Links */}
        <nav className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-3 xl:gap-x-12 min-[2200px]:gap-x-50">
          {links.map((label) => (
            <a
              key={label}
              href="#"
              className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base xl:text-xl hover:opacity-60 transition-opacity"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Logo + Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <Image
            src="/logo_medium.png"
            alt="Logo"
            width={180}
            height={60}
            className="h-6 xl:h-11 w-auto"
            style={{ filter: "brightness(0)" }}
          />
          <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-sm xl:text-xl text-center">
            © 2026 All Rights Reserved.
          </span>
        </div>

      </div>

    </footer>
  )
}