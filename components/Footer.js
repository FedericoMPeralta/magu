import Image from "next/image"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#ffffff" }} className="pt-32 pb-24">
      
      {/* Línea separadora */}
      <div style={{ borderTop: "1px solid #1a1a1a" }} className="mb-12" />

      {/* Botonera + Logo */}
      <div className="flex items-center justify-between px-50">
        
        {/* Links */}
        <nav className="flex items-center gap-50">
          <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xl hover:opacity-60 transition-opacity">Términos y condiciones</a>
          <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xl hover:opacity-60 transition-opacity">Política de privacidad</a>
          <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xl hover:opacity-60 transition-opacity">Contacto</a>
          <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xl hover:opacity-60 transition-opacity">Volver al inicio</a>
        </nav>

        {/* Logo + Copyright */}
        <div className="flex items-center gap-6">
          <Image
            src="/logo_medium.png"
            alt="Logo"
            width={180}
            height={60}
            style={{ width: "auto", filter: "brightness(0)" }}
          />
          <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xl">© 2026 All Rights Reserved.</span>
        </div>

      </div>

    </footer>
  )
}