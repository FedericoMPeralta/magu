'use client'
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="flex items-center justify-between px-10 py-6 relative">
      <a href="/">
        <Image
          src="/logo_medium.png"
          alt="Logo"
          width={204}
          height={60}
          priority
          style={{ width: "auto" }}
        />
      </a>
      <nav className="flex items-center gap-80 mx-auto">
        <a href="/planes" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font-medium">Planes Move</a>
        <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font-medium">Agenda</a>
        <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font-medium">Nosotros</a>
        <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity">Contacto</a>
      </nav>

      {/* Mi Perfil */}
      <div className="relative flex items-center gap-3">
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex items-center gap-3 focus:outline-none cursor-pointer"
        >
          <span className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] font-medium text-lg">Mi perfil</span>
          <div className="w-9 h-9 rounded-full border-2 border-white bg-white" />
        </button>

        {/* Dropdown */}
        {menuAbierto && (
          <div
            className="absolute top-14 right-0 rounded-2xl p-4 flex flex-col gap-2 min-w-[220px]"
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

            {/* Separador */}
            <div style={{ borderTop: "1px solid #1a1a1a", margin: "4px 12px" }} />

            {/* Cerrar sesión */}
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