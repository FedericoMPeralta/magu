'use client'
import Image from "next/image";
import { supabase } from '@/lib/supabase'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

/*
  Tamaños de texto fluidos:
  - celular / tablet: tamaños fijos chicos
  - desde xl (1280px): crecen con el ancho de pantalla (vw) hasta llegar
    al tamaño original de tu diseño en 2560px (text-8xl = 6rem, text-5xl = 3rem, etc.)
*/
const HERO = "text-4xl md:text-6xl xl:text-[clamp(3rem,5vw,6rem)]"
const BIG = "text-4xl md:text-6xl xl:text-[clamp(3rem,3.75vw,6rem)]"
const MID = "text-2xl md:text-4xl xl:text-[clamp(1.875rem,1.9vw,3rem)]"
const INTRO = "text-xl md:text-3xl xl:text-[clamp(1.5rem,1.4vw,2.25rem)]"
const CARD_Q = "text-3xl md:text-4xl xl:text-[clamp(1.5rem,3.75vw,6rem)]"
const CARD_NAME = "text-2xl md:text-3xl xl:text-[clamp(1.25rem,1.9vw,3rem)]"
const BTN = "text-base md:text-lg xl:text-xl"

const planes = [
  { question: "¿Tenés poco tiempo y querés moverte pero a tu ritmo?", planName: "Move Sync", proximamente: false },
  { question: "¿Buscás un espacio de calma y de reencuentro con vos?", planName: "Move Yogui", proximamente: false },
  { question: "¿Te gusta entrenar sola y de forma presencial?", planName: "Move One", proximamente: false },
  { question: "¿Buscás moverte en grupo?", planName: "Move Active", proximamente: true },
]

const metodo = [
  { num: "01", titulo: "Trabajar\n la conciencia\n corporal" },
  { num: "02", titulo: "Movimiento\nsegún\ntu ritmo" },
  { num: "03", titulo: "Paciencia, frecuencia\n y constancia" },
  { num: "04", titulo: "Guía y monitoreo constante" },
]

const agenda = [
  { tag: "salud digestiva", titulo: "Toma de plantas medicinales", img: "/labruma.png" },
  { tag: "running", titulo: "21K en Buenos Aires", img: "/labruma.png" },
  { tag: "salud digestiva", titulo: "Toma de plantas medicinales", img: "/labruma.png" },
  { tag: "running", titulo: "21K en Buenos Aires", img: "/labruma.png" },
  { tag: "salud digestiva", titulo: "Toma de plantas medicinales", img: "/labruma.png" },
  { tag: "running", titulo: "21K en Buenos Aires", img: "/labruma.png" },
]

export default function Home() {
  useEffect(() => {
    supabase.from('planes').select('*').order('id').then(({ data }) => {
    })
  }, [])

  const scrollAgenda = (dir) => {
    const el = document.getElementById('agenda-carousel')
    el?.scrollBy({ left: dir * (el.offsetWidth / 2 + 16), behavior: 'smooth' })
  }

  return (
    <main className="overflow-x-hidden">
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
        <div className="flex items-center justify-center mt-24 md:mt-48 xl:mt-64 min-[2200px]:mt-80 px-6 md:px-10">
          <p className={`font-[family-name:var(--font-instrument-serif)] text-[#F6F4EE] text-center ${HERO} leading-none`}>
            <span className="italic">MagusMove</span> es un espacio de acompañamiento integral
            <br className="hidden md:block" />
            {" "}liderado por María Agustina Cigana.
          </p>
        </div>
      </div>

      {/* Sección de planes */}
      <section style={{ backgroundColor: "#CCE1E2" }} className="px-6 md:px-10 xl:px-16 py-12 md:py-24">
        <p className={`font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] ${INTRO} text-center max-w-7xl mx-auto leading-tight mb-12 md:mb-24`}>
          Cada cuerpo tiene su propio pulso interno por eso creamos un ecosistema de planes flexibles diseñado para adaptarse al ritmo, el contexto y las necesidades reales de cada persona.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:px-4">
          {planes.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 xl:p-8 rounded-3xl relative overflow-hidden isolate min-h-[380px] md:min-h-[460px] xl:min-h-[520px]"
              style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.15), 0 4px 24px rgba(0,0,0,0.10)" }}
            >
              {/* Listón Próximamente */}
              {item.proximamente && (
                <div
                  className="absolute z-10 left-1/2 top-[16%] w-[200%] h-12 md:h-[65px] flex items-center justify-center -translate-x-1/2 rotate-[25deg] bg-[#A4BEC6] text-[#1a1a1a] font-medium font-[family-name:var(--font-dm-sans)] text-lg md:text-2xl tracking-[0.2em]"
                >
                  PRÓXIMAMENTE
                </div>
              )}

              <div className="flex flex-col justify-between h-full flex-1" style={{ opacity: item.proximamente ? 0.15 : 1 }}>
                <div className="flex flex-col gap-6 xl:gap-8">
                  <p className={`font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] ${CARD_Q} leading-none`}>
                    {item.question}
                  </p>
                  <p className={`font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] ${CARD_NAME}`}>
                    <span className="underline underline-offset-4 italic">{item.planName}</span> es para vos.
                  </p>
                </div>
                <button className={`font-[family-name:var(--font-dm-sans)] mt-10 xl:mt-16 self-start flex items-center gap-3 px-6 xl:px-8 py-3 xl:py-4 rounded-full border border-[#1a1a1a] text-[#1a1a1a] ${BTN} hover:bg-[#1a1a1a] hover:text-white transition-all`}>
                  Descubrir más <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transición CCE1E2 → D7FCA4 */}
      <div className="h-16 md:h-[120px]" style={{ background: "linear-gradient(to bottom, #CCE1E2, #D7FCA4)" }} />

      {/* Sección preguntas frecuentes */}
      <section style={{ backgroundColor: "#D7FCA4" }} className="py-12 md:py-24 flex flex-col md:min-h-screen">

        {/* Título */}
        <p className={`font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] ${MID} text-center max-w-7xl mx-auto leading-relaxed mb-10 md:mb-24`}>
          Preguntas frecuentes
        </p>

        {/* Cards apiladas */}
        <div className="flex flex-col w-full">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 py-6 lg:py-8 px-6 md:px-10 lg:px-0 lg:pl-[12.5vw]"
              style={{ borderBottom: "1px solid #1a1a1a", borderTop: i === 1 ? "1px solid #1a1a1a" : "none" }}
            >
              <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-3xl md:text-5xl lg:text-[clamp(2rem,3.75vw,6rem)] leading-tight w-full lg:w-1/2">
                ¿Los planes son personalizados?
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base xl:text-xl leading-relaxed w-full lg:w-1/4 min-[2200px]:w-1/6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>

        {/* Botón */}
        <div className="flex justify-center mt-10 md:mt-16">
          <button
            className={`font-[family-name:var(--font-dm-sans)] flex items-center gap-2 px-6 md:px-8 py-3 rounded-full text-[#1a1a1a] ${BTN} hover:opacity-80 transition-all`}
            style={{ backgroundColor: "#CCE1E2" }}
          >
            Ver todos los planes <span>→</span>
          </button>
        </div>
      </section>

      {/* Sección Nosotros */}
      <section style={{ backgroundColor: "#D7FCA4" }} className="py-0 flex flex-col md:min-h-screen">
        {/* Texto pequeño */}
        <p className={`font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] ${MID} mb-4 md:mb-6 text-center px-6`}>
          Liderado por Magus Cigana
        </p>

        <p className={`font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] ${BIG} leading-tight mb-10 md:mb-16 mx-auto text-center px-6`}>
          Más de 10 años acompañando el movimiento
        </p>

        {/* Imágenes: en celular se desliza, desde tablet se ven las 5 juntas */}
        <div className="flex w-full my-8 md:my-16 overflow-x-auto md:overflow-visible scrollbar-hide">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="relative flex-none w-[70vw] md:w-auto md:flex-1 h-[320px] md:h-[380px] xl:h-[520px] 2xl:h-[600px] min-[2200px]:h-[700px]"
            >
              <Image
                src="/labruma.png"
                alt={`Imagen ${i}`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 20vw, 70vw"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center pb-12 md:pb-0">
          <button
            className="font-[family-name:var(--font-dm-sans)] flex items-center gap-2 px-6 md:px-8 py-3 rounded-full text-[#1a1a1a] text-lg md:text-xl xl:text-2xl hover:opacity-80 transition-all"
            style={{ backgroundColor: "#CCE1E2" }}
          >
            Quiénes somos <span>→</span>
          </button>
        </div>
      </section>

      {/* Transición D7FCA4 → CCE1E2 */}
      <div className="h-16 md:h-[120px]" style={{ background: "linear-gradient(to bottom, #D7FCA4, #CCE1E2)" }} />

      {/* Sección Método */}
      <section style={{ backgroundColor: "#CCE1E2" }} className="py-12 md:py-24 flex flex-col">

        {/* Título */}
        <p className={`font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] ${MID} text-center mx-auto leading-relaxed mb-8 md:mb-12 px-6 md:px-16`}>
          Nuestro método para sostener el movimiento
        </p>

        {/* Línea superior */}
        <div style={{ borderTop: "1px solid #1a1a1a" }} />

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-20 px-6 md:px-12 xl:px-16 min-[2200px]:px-64 py-10 xl:py-12">
          {metodo.map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-lg xl:text-xl underline underline-offset-4 text-center">
                {item.num}
              </span>
              <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-4xl md:text-5xl xl:text-[clamp(2rem,3.75vw,6rem)] leading-none text-center whitespace-pre-line">
                {item.titulo}
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base leading-tight text-center">
                Descubrí nuestros planes de<br className="hidden xl:block" /> entrenamiento con clases,<br className="hidden xl:block" /> seguimiento y mucho más.
              </p>
            </div>
          ))}
        </div>

        {/* Línea inferior */}
        <div style={{ borderTop: "1px solid #1a1a1a" }} />

      </section>

      {/* Sección Agenda */}
      <section style={{ backgroundColor: "#CCE1E2" }} className="py-12 md:py-24 flex flex-col px-6 md:px-10 xl:px-16">

        {/* Título pequeño */}
        <p className={`font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] ${MID} text-center mx-auto leading-relaxed mb-8 md:mb-12 md:px-16`}>
          Agenda: <span className="italic">Eventos, charlas y novedades</span>
        </p>

        {/* Título grande centrado */}
        <p className={`font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] ${BIG} leading-tight text-center mx-auto mb-10 md:mb-24`}>
          Moverse como estilo de vida también implica<br className="hidden xl:block" /> nutrirse y encontrarse con un otro.
        </p>

        {/* Carrusel */}
        <div className="relative px-0">
          <button
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 text-4xl text-[#1a1a1a] opacity-30 hover:opacity-70 transition-opacity"
            onClick={() => scrollAgenda(-1)}
          >
            ←
          </button>

          <div
            id="agenda-carousel"
            className="flex gap-8 xl:gap-12 overflow-x-auto scrollbar-hide px-0 md:px-12 xl:px-32"
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
            {agenda.map((item, i) => (
              <div key={i} className="flex gap-4 md:gap-6 flex-shrink-0 xl:min-w-[calc(50%-24px)]">
                <div className="relative flex-shrink-0 w-[150px] h-[280px] md:w-[240px] md:h-[420px] xl:w-[280px] xl:h-[480px]">
                  <Image
                    src={item.img}
                    alt={item.titulo}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(min-width: 1280px) 280px, (min-width: 768px) 240px, 150px"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-between py-2 w-[170px] md:w-[180px]">
                  <div className="flex flex-col gap-3 xl:gap-4">
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base xl:text-xl underline underline-offset-4">
                      {item.tag}
                    </span>
                    <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-2xl md:text-3xl xl:text-5xl leading-tight">
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
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 text-4xl text-[#1a1a1a] opacity-30 hover:opacity-70 transition-opacity"
            onClick={() => scrollAgenda(1)}
          >
            →
          </button>
        </div>

        {/* Botón ver agenda */}
        <div className="flex justify-center mt-10 md:mt-16">
          <button
            className="font-[family-name:var(--font-dm-sans)] flex items-center gap-2 px-6 md:px-8 py-3 rounded-full border border-[#1a1a1a] text-[#1a1a1a] text-lg md:text-xl xl:text-2xl hover:opacity-80 transition-all"
            style={{ backgroundColor: "#CCE1E2" }}
          >
            Ver agenda completa <span>→</span>
          </button>
        </div>

      </section>
      <div className="h-16 md:h-[120px]" style={{ background: "linear-gradient(to bottom, #CCE1E2, #ffffff)" }} />

      {/* Sección Newsletter ClubMove */}
      <Newsletter />
      {/* Footer */}
      <Footer />
    </main>
  );
}