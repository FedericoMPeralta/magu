'use client'
import Image from "next/image";
import { supabase } from '@/lib/supabase'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    supabase.from('profiles').select('*').then(({ data, error }) => {
      console.log('Conexión Supabase:', data, error)
    })
  }, [])
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
            style={{ width: "auto" }}
          />
          <nav className="flex items-center gap-53">
            <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font-medium">Planes Move</a>
            <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font-medium">Agenda</a>
            <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity font-medium">Nosotros</a>
            <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#F6F4EE] text-lg tracking-wide hover:opacity-70 transition-opacity">Contacto</a>

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
                sizes="20vw"
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
            {/* Transición D7FCA4 → CCE1E2 */}
      <div style={{ height: "120px", background: "linear-gradient(to bottom, #D7FCA4, #CCE1E2)" }} />

      {/* Sección Método carrusel */}
      <section style={{ backgroundColor: "#CCE1E2" }} className="py-24 flex flex-col">

        {/* Título */}
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-4xl text-center mx-auto leading-relaxed mb-12 px-16">
          Nuestro método para sostener el movimiento
        </p>

        {/* Línea superior */}
        <div style={{ borderTop: "1px solid #1a1a1a" }} />

        {/* Carrusel */}
        <div className="flex gap-16 overflow-x-auto px-16 py-12 scrollbar-hide">
          {[
            { num: "01", titulo: "Trabajar la conciencia corporal" },
            { num: "02", titulo: "Movimiento según tu ritmo" },
            { num: "01", titulo: "Trabajar la conciencia corporal" },
            { num: "02", titulo: "Movimiento según tu ritmo" },
            { num: "01", titulo: "Trabajar la conciencia corporal" },
            { num: "02", titulo: "Movimiento según tu ritmo" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4 min-w-[350px]">
              <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xl underline underline-offset-4 text-center">
                {item.num}
              </span>
              <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-8xl leading-tight text-center">
                {item.titulo}
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base leading-relaxed text-center">
                Descubrí nuestros planes de entrenamiento con clases, seguimiento y mucho más.
              </p>
            </div>
          ))}
        </div>

        {/* Línea inferior */}
        <div style={{ borderTop: "1px solid #1a1a1a" }} />

      </section>
            {/* Sección Agenda */}
      <section style={{ backgroundColor: "#CCE1E2" }} className="py-24 flex flex-col px-16">

        {/* Título pequeño */}
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-4xl text-center mx-auto leading-relaxed mb-12 px-16">
          Agenda: Eventos, charlas y novedades
        </p>

        {/* Título grande centrado */}
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-8xl leading-tight text-center max-w-5xl mx-auto mb-24">
          Moverse como estilo de vida también implica nutrirse y encontrarse con un otro.
        </p>

        {/* Carrusel */}
        <div className="relative px-0">
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-4xl text-[#1a1a1a] opacity-30 hover:opacity-70 transition-opacity"
            onClick={() => {
              const el = document.getElementById('agenda-carousel')
              el.scrollBy({ left: -(el.offsetWidth / 2 + 16), behavior: 'smooth' })
            }}
          >
            ←
          </button>

          <div
            id="agenda-carousel"
            className="flex gap-12 overflow-x-auto scrollbar-hide px-32"
            ref={(el) => {
              if (el && el.scrollLeft === 0) {
                el.scrollLeft = el.scrollWidth / 3
              }
            }}
            onScroll={(e) => {
              const el = e.currentTarget
              const third = el.scrollWidth / 3
              if (el.scrollLeft < 16) el.scrollLeft = third + el.scrollLeft
              if (el.scrollLeft > third * 2 - 16) el.scrollLeft = el.scrollLeft - third
            }}
          >
            {[
              { tag: "salud digestiva", titulo: "Toma de plantas medicinales", img: "/labruma.png" },
              { tag: "running", titulo: "21K en Buenos Aires", img: "/labruma.png" },
              { tag: "salud digestiva", titulo: "Toma de plantas medicinales", img: "/labruma.png" },
              { tag: "running", titulo: "21K en Buenos Aires", img: "/labruma.png" },
              { tag: "salud digestiva", titulo: "Toma de plantas medicinales", img: "/labruma.png" },
              { tag: "running", titulo: "21K en Buenos Aires", img: "/labruma.png" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 min-w-[calc(50%-24px)] flex-shrink-0">
                <div className="relative flex-shrink-0" style={{ width: "280px", height: "480px" }}>
                  <Image
                    src={item.img}
                    alt={item.titulo}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="280px"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-between py-2" style={{ width: "180px" }}>
                  <div className="flex flex-col gap-4">
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xl underline underline-offset-4">
                      {item.tag}
                    </span>
                    <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-5xl leading-tight">
                      {item.titulo}
                    </p>
                    <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-sm leading-relaxed">
                      Descubrí nuestros planes de entrenamiento con clases, seguimiento y mucho más.
                    </p>
                  </div>
                  <button className="font-[family-name:var(--font-dm-sans)] self-start flex items-center gap-2 text-[#1a1a1a] text-base hover:opacity-50 transition-opacity">
                    Descubrir más <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-4xl text-[#1a1a1a] opacity-30 hover:opacity-70 transition-opacity"
            onClick={() => {
              const el = document.getElementById('agenda-carousel')
              el.scrollBy({ left: el.offsetWidth / 2 + 16, behavior: 'smooth' })
            }}
          >
            →
          </button>
        </div>

        {/* Botón ver agenda */}
        <div className="flex justify-center mt-16">
          <button
            className="font-[family-name:var(--font-dm-sans)] flex items-center gap-2 px-8 py-3 rounded-full border border-[#1a1a1a] text-[#1a1a1a] text-base hover:opacity-80 transition-all"
            style={{ backgroundColor: "#CCE1E2" }}
          >
            Ver agenda completa <span>→</span>
          </button>
        </div>

      </section>
      <div style={{ height: "120px", background: "linear-gradient(to bottom, #CCE1E2, #ffffff)" }} />
      {/* Sección Newsletter ClubMove */}
      <section className="relative isolate py-20 px-12 md:px-24 overflow-hidden min-h-[400px] flex items-center">
        {/* Fondo con degradado orgánico y grano tipo película */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Degradado base: una luz por esquina + lineal de fondo */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 45% 70% at 88% 0%, rgba(240, 252, 190, 0.95) 0%, rgba(225, 245, 175, 0.6) 40%, transparent 75%),
                radial-gradient(ellipse 40% 60% at 98% 100%, rgba(95, 140, 85, 0.75) 0%, transparent 70%),
                radial-gradient(ellipse 45% 70% at 0% 100%, rgba(22, 90, 120, 0.9) 0%, transparent 70%),
                radial-gradient(ellipse 50% 80% at 0% 0%, #06352f 0%, transparent 75%),
                linear-gradient(100deg, #0a3d3f 0%, #2f6a58 35%, #8fb88a 62%, #c9e8a0 85%, #dff2b4 100%)
              `,
            }}
          />

          {/* Grano monocromático fino */}
          <svg className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay pointer-events-none">
            <filter id="noiseFilter" x="0" y="0" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="4"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>

          {/* Viñeta sutil para dar profundidad */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.12) 100%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Columna Izquierda: Títulos */}
          <div className="flex flex-col gap-2 text-left">
            <span className="font-[family-name:var(--font-dm-sans)] text-[#d7fca4] tracking-[0.3em] text-xs uppercase border-b border-[#d7fca4]/30 pb-1 self-start">
              NEWSLETTER
            </span>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-[#d7fca4] text-7xl md:text-8xl not-italic font-normal tracking-tight leading-tight">
              Club<span className="italic">Move</span>
            </h2>
            <p className="font-[family-name:var(--font-instrument-serif)] text-[#d7fca4] text-3xl md:text-4xl">
              Newsletter semanal
            </p>
          </div>

          {/* Columna Derecha: Beneficios y Formulario */}
          <div className="flex flex-col gap-8 w-full lg:w-auto">
            <div className="flex flex-col gap-4">
              <h3 className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-3xl md:text-4xl">
                Suscribite para recibir
              </h3>

              {/* Lista en dos columnas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base">
                <ul className="space-y-1">
                  <li>· Recomendaciones</li>
                  <li>· Recetas</li>
                  <li>· Toma de plantas</li>
                  <li>· Series y películas</li>
                </ul>
                <ul className="space-y-1">
                  <li>· Actividades y/o agenda cultural</li>
                  <li>· Descuentos en preventa</li>
                  <li>para experiencias o clases</li>
                </ul>
              </div>
            </div>

            {/* Input de email con botón integrado */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center w-full max-w-xl bg-[#b9d1d3]/90 backdrop-blur-sm rounded-full p-1.5 shadow-inner"
            >
              <input
                type="email"
                placeholder="mail@gmail.com"
                required
                className="w-full bg-transparent px-6 py-3 font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] placeholder-[#1a1a1a]/60 focus:outline-none text-base"
              />
              <button
                type="submit"
                className="font-[family-name:var(--font-dm-sans)] bg-[#d7fca4] text-[#1a1a1a] px-8 py-3 rounded-full font-medium text-base hover:opacity-90 transition-all flex items-center gap-2 whitespace-nowrap shadow-sm"
              >
                Suscribite ahora <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
            {/* Footer */}
      <footer style={{ backgroundColor: "#ffffff" }} className="pt-32 pb-24">
        
        {/* Línea separadora */}
        <div style={{ borderTop: "1px solid #1a1a1a" }} className="mb-12" />

        {/* Botonera + Logo */}
        <div className="flex items-center justify-between px-32">
          
          {/* Links */}
          <nav className="flex items-center gap-24">
            <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-2xl hover:opacity-60 transition-opacity">Términos y condiciones</a>
            <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-2xl hover:opacity-60 transition-opacity">Política de privacidad</a>
            <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-2xl hover:opacity-60 transition-opacity">Contacto</a>
            <a href="#" className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-2xl hover:opacity-60 transition-opacity">Volver al inicio</a>
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
    </main>
  );
}
