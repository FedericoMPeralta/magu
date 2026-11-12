'use client'
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

const links = [
  { label: "Planes Move", href: "/planes" },
  { label: "Agenda", href: "/agenda" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
]

const perfilItems = [
  { label: "Ver mi perfil", icon: "/mi_perfil.png", href: "#" },
  { label: "Editar perfil", icon: "/editar_perfil.png", href: "#" },
  { label: "Notificaciones", icon: "/notificaciones.png", href: "#" },
  { label: "Vista Magus", icon: "/editar_perfil.png", href: "/vista_magus" },
]

export default function Header({ color = "#F6F4EE", logoNegro = false }) {
  const [menuAbierto, setMenuAbierto] = useState(false) // dropdown de "Mi perfil" (pantallas grandes)
  const [navAbierto, setNavAbierto] = useState(false)   // menú hamburguesa (celular y tablet)

  const pathname = usePathname()

  const linkStyle = { color }

  return (
    <header className="flex items-center justify-between px-5 md:px-10 py-4 md:py-6 relative z-40">
      {/* Logo */}
      <a href="/pulso">
        <Image
          src="/logo_medium.png"
          alt="Logo"
          width={204}
          height={60}
          priority
          className="h-6 md:h-9 xl:h-11 w-auto"
          style={{ filter: logoNegro ? "brightness(0)" : "none" }}
        />
      </a>

      {/* Navegación (pantallas grandes) */}
      <nav className="hidden lg:flex items-center gap-8 xl:gap-16 2xl:gap-32 min-[2200px]:gap-80 mx-auto">
        {links.map((link) => {
          const activo = pathname === link.href || pathname.startsWith(link.href + "/")
          return (
            <a
              key={link.label}
              href={link.href}
              style={{ color, textDecorationColor: color }}
              className={`font-[family-name:var(--font-dm-sans)] text-base xl:text-lg tracking-wide font-medium hover:opacity-70 transition-opacity underline-offset-8 ${
                activo ? "underline decoration-1" : "no-underline"
              }`}
            >
              {link.label}
            </a>
          )
        })}
      </nav>

      {/* Mi Perfil (pantallas grandes) */}
      <div className="hidden lg:flex relative items-center gap-3">
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex items-center gap-3 focus:outline-none cursor-pointer"
        >
          <span style={linkStyle} className="font-[family-name:var(--font-dm-sans)] font-medium text-base xl:text-lg">Mi perfil</span>
          <div
            className="w-9 h-9 rounded-full"
            style={{ border: `2px solid ${color}`, backgroundColor: color }}
          />
        </button>

        {/* Dropdown */}
        {menuAbierto && (
          <div
            className="absolute top-14 right-0 rounded-2xl p-4 flex flex-col gap-2 min-w-[220px] z-50"
            style={{ backgroundColor: "rgba(246, 244, 238, 0.80)", backdropFilter: "blur(12px)" }}
          >
            {perfilItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-black/5 transition-all w-full cursor-pointer"
              >
                <Image src={item.icon} alt={item.label} width={20} height={20} />
                <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base">{item.label}</span>
              </a>
            ))}

            <div style={{ borderTop: "1px solid #1a1a1a", margin: "4px 12px" }} />

            <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-black/5 transition-all text-left w-full cursor-pointer">
              <Image src="/cerrar_sesion.png" alt="Cerrar sesión" width={20} height={20} />
              <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base">Cerrar sesión</span>
            </button>
          </div>
        )}
      </div>

      {/* Botón hamburguesa (celular y tablet) */}
      <button
        onClick={() => setNavAbierto(!navAbierto)}
        className="lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10 items-end focus:outline-none cursor-pointer"
        aria-label="Abrir menú"
        aria-expanded={navAbierto}
      >
        <span
          className="block h-0.5 w-7 transition-transform"
          style={{ backgroundColor: color, transform: navAbierto ? "translateY(8px) rotate(45deg)" : "none" }}
        />
        <span
          className="block h-0.5 w-7 transition-opacity"
          style={{ backgroundColor: color, opacity: navAbierto ? 0 : 1 }}
        />
        <span
          className="block h-0.5 w-7 transition-transform"
          style={{ backgroundColor: color, transform: navAbierto ? "translateY(-8px) rotate(-45deg)" : "none" }}
        />
      </button>

      {/* Menú desplegable (celular y tablet) */}
      {navAbierto && (
        <div
          className="lg:hidden absolute top-full left-4 right-4 md:left-auto md:w-[360px] md:right-10 rounded-2xl p-4 flex flex-col gap-1 z-50"
          style={{ backgroundColor: "rgba(246, 244, 238, 0.92)", backdropFilter: "blur(12px)" }}
        >
          {links.map((link) => {
            const activo = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setNavAbierto(false)}
                className={`font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-lg font-medium px-3 py-3 rounded-xl hover:bg-black/5 transition-all underline-offset-8 ${
                  activo ? "underline decoration-1" : "no-underline"
                }`}
              >
                {link.label}
              </a>
            )
          })}

          <div style={{ borderTop: "1px solid #1a1a1a", margin: "8px 12px" }} />

          {perfilItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setNavAbierto(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-black/5 transition-all w-full cursor-pointer"
            >
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base">{item.label}</span>
            </a>
          ))}

          <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-black/5 transition-all text-left w-full cursor-pointer">
            <Image src="/cerrar_sesion.png" alt="Cerrar sesión" width={20} height={20} />
            <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base">Cerrar sesión</span>
          </button>
        </div>
      )}
    </header>
  )
}