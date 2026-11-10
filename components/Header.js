'use client'
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
export default function Header({ color = "#F6F4EE", logoNegro = false }) {

  const [menuAbierto, setMenuAbierto] = useState(false)

  const pathname = usePathname()

  const links = [
    { label: "Planes Move", href: "/planes" },
    { label: "Agenda", href: "/agenda" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ]

  const linkStyle = { color }

  return (
    
    <header className="flex items-center justify-between px-10 py-6 relative">
      <a href="/pulso">
      <Image
        src="/logo_medium.png"
        alt="Logo"
        width={204}
        height={60}
        priority
        style={{ width: "auto", filter: logoNegro ? "brightness(0)" : "none" }}
      />
    </a>
      <nav className="flex items-center gap-80 mx-auto">
        {links.map((link) => {
          const activo = pathname === link.href || pathname.startsWith(link.href + "/")
          return (
            <a
              key={link.label}
              href={link.href}
              style={{ color, textDecorationColor: color }}
              className={`font-[family-name:var(--font-dm-sans)] text-lg tracking-wide font-medium hover:opacity-70 transition-opacity underline-offset-8 ${
                activo ? "underline decoration-1" : "no-underline"
              }`}
            >
              {link.label}
            </a>
          )
        })}
      </nav>

      {/* Mi Perfil */}
      <div className="relative flex items-center gap-3">
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex items-center gap-3 focus:outline-none cursor-pointer"
        >
          <span style={linkStyle} className="font-[family-name:var(--font-dm-sans)] font-medium text-lg">Mi perfil</span>
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
            {[
              { label: "Ver mi perfil", icon: "/mi_perfil.png", href: "#" },
              { label: "Editar perfil", icon: "/editar_perfil.png", href: "#" },
              { label: "Notificaciones", icon: "/notificaciones.png", href: "#" },
              { label: "Vista Magus", icon: "/editar_perfil.png", href: "/vista_magus" },
            ].map((item) => (
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
    </header>
  )
}