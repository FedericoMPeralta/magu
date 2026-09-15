import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Primera sección: imagen de fondo + header + texto */}
      <div className="relative min-h-screen">
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
          <Image
            src="/logo_medium.png"
            alt="Logo"
            width={204}
            height={60}
            priority
          />
          <nav className="flex items-center gap-53">
            <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font-medium">Planes Move</a>
            <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font-medium">Agenda</a>
            <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font-medium">Nosotros</a>
            <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity">Contacto</a>

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
              <span className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] font-medium text-lg">Mi perfil</span>
              <div className="w-9 h-9 rounded-full border-2 border-white bg-white" />
            </div>
          </nav>
        </header>

        {/* Texto central */}
        <div className="flex items-center justify-center mt-80 px-10">
          <p className="font-[family-name:var(--font-instrument-serif)] text-[#F6F4EE] text-center text-8xl max-w-8xl leading-relaxed">
            <span className="italic">MagusMove</span> es un espacio de acompañamiento integral
            <br />
            liderado por María Agustina Cigana.
          </p>
        </div>
      </div>

      {/* Sección de planes */}
      <section style={{ backgroundColor: "#CCE1E2" }} className="px-16 py-24">
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-4xl text-center max-w-7xl mx-auto leading-relaxed mb-24">
          Cada cuerpo tiene su propio pulso interno por eso creamos un ecosistema de planes flexibles diseñado para adaptarse al ritmo, el contexto y las necesidades reales de cada persona.
        </p>

        <div className="flex gap-6 px-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-8 rounded-3xl"
              style={{
                boxShadow: "0 0 0 1px rgba(0,0,0,0.15), 0 4px 24px rgba(0,0,0,0.10)",
                flex: 1,
                minHeight: "420px",
              }}
            >
              <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-8xl leading-none">
                ¿Tenés poco tiempo y querés moverte pero a tu ritmo?
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-4xl mt-4">
                <span className="underline underline-offset-4 italic">Move Sync</span> es para vos.
              </p>
              <button className="font-[family-name:var(--font-dm-sans)] mt-8 self-start flex items-center gap-2 px-6 py-2 rounded-full border border-[#1a1a1a] text-[#1a1a1a] text-base hover:bg-[#1a1a1a] hover:text-white transition-all">
                Descubrir más <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Transición CCE1E2 → D7FCA4 */}
      <div style={{ height: "120px", background: "linear-gradient(to bottom, #CCE1E2, #D7FCA4)" }} />

      {/* Sección preguntas frecuentes */}
      <section style={{ backgroundColor: "#D7FCA4", minHeight: "100vh" }} className="py-24 flex flex-col">

        {/* Título */}
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-4xl text-center max-w-7xl mx-auto leading-relaxed mb-24">
          Preguntas frecuentes
        </p>

        {/* Cards apiladas */}
        <div className="flex flex-col w-full">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-12 py-8 pl-80"
              style={{ borderBottom: "1px solid #1a1a1a", borderTop: i === 1 ? "1px solid #1a1a1a" : "none" }}
            >
              <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-8xl leading-tight w-3/6">
                ¿Los planes son personalizados?
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xl leading-relaxed w-1/6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>

        {/* Botón */}
        <div className="flex justify-center mt-16">
          <button
            className="font-[family-name:var(--font-dm-sans)] flex items-center gap-2 px-8 py-3 rounded-full border border-[#1a1a1a] text-[#1a1a1a] text-base hover:opacity-80 transition-all"
            style={{ backgroundColor: "#CCE1E2" }}
          >
            Ver todos los planes <span>→</span>
          </button>
        </div>
      </section>

      {/* Sección Nosotros */}
      <section style={{ backgroundColor: "#D7FCA4", minHeight: "100vh" }} className="py-24 flex flex-col">
        {/* Texto pequeño */}
        <p className="font-[family-name:var(--font-instrument-seri)] text-[#1a1a1a] text-xl mb-6 text-center">
          Liderado por Magus Cigana
        </p>

        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-8xl leading-tight max-w-8xl mb-16 mx-auto text-center">
          Más de 10 años acompañando el movimiento
        </p>

        {/* Imágenes */}
        <div className="flex w-full my-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="relative flex-1" style={{ height: "700px" }}>
              <Image
                src="/labruma.png"
                alt={`Imagen ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="font-[family-name:var(--font-dm-sans)] flex items-center gap-2 px-8 py-3 rounded-full border border-[#1a1a1a] text-[#1a1a1a] text-base hover:opacity-80 transition-all"
            style={{ backgroundColor: "#CCE1E2" }}
          >
            Quiénes somos <span>→</span>
          </button>
        </div>
      </section>
    </main>
  );
}