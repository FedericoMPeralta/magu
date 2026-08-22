import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/fondo_header.png"
          alt="Fondo"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6">
        {/* Logo */}
        <Image
          src="/logo_medium.png"
          alt="Logo"
          width={204}
          height={60}
          priority
        />

        {/* Navegación */}
        <nav className="flex items-center gap-53">
          <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font-medium">Planes Move</a>
          <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font-medium">Agenda</a>
          <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font-medium">Nosotros</a>
          <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font- ">Contacto</a>

          {/* Buscador */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full w-70" style={{ backgroundColor: "#F6F4EE" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#587372" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="font-[family-name:var(--font-dm-sans)] text-lg text-[#587372]">Buscar</span>
          </div>

          {/* Mi Perfil */}
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-dm-sans) text-[#F6F4EE] font-medium] text-lg">Mi perfil</span>
            <div className="w-9 h-9 rounded-full border-2 border-white bg-white" />
          </div>
        </nav>
      </header>

      {/* Texto central */}
      <div className="flex items-center justify-center mt-80 px-10">
        <p className="font-[family-name:var(--font-instrument-serif)]  text-[#F6F4EE] text-center text-8xl max-w-8xl leading-relaxed">
          <span className="italic">MagusMove</span> es un espacio de acompañamiento integral
          <br />
          liderado por María Agustina Cigana.
        </p>
      </div>
    </main>
  );
}