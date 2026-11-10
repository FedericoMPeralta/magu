'use client'
import Image from "next/image";
import { supabase } from '@/lib/supabase'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  useEffect(() => {
    supabase.from('planes').select('*').order('id').then(({ data }) => {
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
        <Header />

        {/* Texto central */}
        <div className="flex items-center justify-center mt-80 px-10">
          <p className="font-[family-name:var(--font-instrument-serif)] text-[#F6F4EE] text-center text-8xl max-w-8xl leading-none">
            <span className="italic">MagusMove</span> es un espacio de acompañamiento integral
            <br />
            liderado por María Agustina Cigana.
          </p>
        </div>
      </div>

      {/* Sección de planes */}
      <section style={{ backgroundColor: "#CCE1E2" }} className="px-16 py-24">
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-4xl text-center max-w-7xl mx-auto leading-none mb-24">
          Cada cuerpo tiene su propio pulso interno por eso creamos un ecosistema de planes flexibles diseñado para adaptarse al ritmo, el contexto y las necesidades reales de cada persona.
        </p>

        <div className="flex gap-6 px-4">
          {[
            { question: "¿Tenés poco tiempo y querés moverte pero a tu ritmo?", planName: "Move Sync", proximamente: false },
            { question: "¿Buscás un espacio de calma y de reencuentro con vos?", planName: "Move Yogui", proximamente: false },
            { question: "¿Te gusta entrenar sola y de forma presencial?", planName: "Move One", proximamente: false },
            { question: "¿Buscás moverte en grupo?", planName: "Move Active", proximamente: true },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-8 rounded-3xl relative overflow-hidden"
              style={{
                boxShadow: "0 0 0 1px rgba(0,0,0,0.15), 0 4px 24px rgba(0,0,0,0.10)",
                flex: 1,
                minHeight: "520px",
                isolation: "isolate",
              }}
            >
              {/* Listón Próximamente */}
              {item.proximamente && (
                <div
                  className="absolute font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] font-medium"
                  style={{
                    backgroundColor: "#A4BEC6",
                    top: "80px",
                    right: "-180px",
                    width: "750px",
                    height: "65px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    transform: "rotate(25deg)",
                    transformOrigin: "center",
                    zIndex: 10,
                    opacity: 1,
                    letterSpacing: "0.2em",
                  }}
                >
                  PRÓXIMAMENTE
                </div>
              )}

              <div className="flex flex-col justify-between h-full" style={{ opacity: item.proximamente ? 0.15 : 1 }}>
                <div className="flex flex-col gap-8">
                  <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-8xl leading-none">
                    {item.question}
                  </p>
                  <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-5xl">
                    <span className="underline underline-offset-4 italic">{item.planName}</span> es para vos.
                  </p>
                </div>
                <button className="font-[family-name:var(--font-dm-sans)] mt-16 self-start flex items-center gap-3 px-8 py-4 rounded-full border border-[#1a1a1a] text-[#1a1a1a] text-xl hover:bg-[#1a1a1a] hover:text-white transition-all">
                  Descubrir más <span>→</span>
                </button>
              </div>
          </div>
          ))}
        </div>
      </section>
      {/* Transición CCE1E2 → D7FCA4 */}
      <div style={{ height: "120px", background: "linear-gradient(to bottom, #CCE1E2, #D7FCA4)" }} />

      {/* Sección preguntas frecuentes */}
      <section style={{ backgroundColor: "#D7FCA4", minHeight: "100vh" }} className="py-24 flex flex-col">

        {/* Título */}
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-5xl text-center max-w-7xl mx-auto leading-relaxed mb-24">
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
            className="font-[family-name:var(--font-dm-sans)] flex items-center gap-2 px-8 py-3 rounded-full text-[#1a1a1a] text-xl hover:opacity-80 transition-all"
            style={{ backgroundColor: "#CCE1E2" }}
          >
            Ver todos los planes <span>→</span>
          </button>
        </div>
      </section>

      {/* Sección Nosotros */}
      <section style={{ backgroundColor: "#D7FCA4", minHeight: "100vh" }} className="py-0 flex flex-col">
        {/* Texto pequeño */}
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-5xl mb-6 text-center">
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
            className="font-[family-name:var(--font-dm-sans)] flex items-center gap-2 px-8 py-3 rounded-full text-[#1a1a1a] text-2xl hover:opacity-80 transition-all"
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
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-5xl text-center mx-auto leading-relaxed mb-12 px-16">
          Nuestro método para sostener el movimiento
        </p>

        {/* Línea superior */}
        <div style={{ borderTop: "1px solid #1a1a1a" }} />

        {/* Items */}
        <div className="flex gap-20 px-64 py-12 justify-center">
          {[
            { num: "01", titulo: "Trabajar\n la conciencia\n corporal" },
            { num: "02", titulo: "Movimiento\nsegún\ntu ritmo" },
            { num: "03", titulo: "Paciencia, frecuencia\n y constancia" },
            { num: "04", titulo: "Guía y monitoreo constante" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4" style={{ width: "750px" }}>
              <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xl underline underline-offset-4 text-center">
                {item.num}
              </span>
              <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-8xl leading-none text-center whitespace-pre-line">
                {item.titulo}
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base leading-tight text-center">
                Descubrí nuestros planes de<br /> entrenamiento con clases,<br /> seguimiento y mucho más.
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
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-5xl text-center mx-auto leading-relaxed mb-12 px-16">
          Agenda: <span className="italic">Eventos, charlas y novedades</span> 
        </p>

        {/* Título grande centrado */}
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-8xl leading-tight text-center max-w-8xl mx-auto mb-24">
          Moverse como estilo de vida también implica<br /> nutrirse y encontrarse con un otro.
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
            className="font-[family-name:var(--font-dm-sans)] flex items-center gap-2 px-8 py-3 rounded-full border border-[#1a1a1a] text-[#1a1a1a] text-2xl hover:opacity-80 transition-all"
            style={{ backgroundColor: "#CCE1E2" }}
          >
            Ver agenda completa <span>→</span>
          </button>
        </div>

      </section>
      <div style={{ height: "120px", background: "linear-gradient(to bottom, #CCE1E2, #ffffff)" }} />
      {/* Sección Newsletter ClubMove */}
      <Newsletter />
      {/* Footer */}
      <Footer />
    </main>
  );
}
