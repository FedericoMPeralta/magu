'use client'
import Image from "next/image";
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

/*
  Tamaños de texto fluidos: fijos en celular/tablet y proporcionales al ancho
  de pantalla en pantallas grandes, hasta llegar al tamaño original de tu diseño en 2560px.
*/
const BIG = "text-4xl md:text-6xl xl:text-[clamp(3rem,3.75vw,6rem)]"
const MID = "text-2xl md:text-4xl xl:text-[clamp(1.875rem,1.9vw,3rem)]"

const pasos = [
  {
    titulo: "Contratá tu plan favorito.",
    texto: "Una vez que se confirme el pago ya podrás comenzar.",
  },
  {
    titulo: "Create un usuario y contraseña.",
    texto: "Desde nuestra web create un usuario (clickeando en la esquina superior derecha “Ingresar”).",
  },
  {
    titulo: "Completá tu perfil en nuestra web.",
    texto: "Ingresá con tu usuario y contraseña y completá tu perfil con todos tus datos. Este paso es muy importante para una buena alineación con tu rutina. De lo contrario no podrás comenzar con el entrenamiento.",
  },
  {
    titulo: "Agendá tu primer encuentro con Magus.",
    texto: "Tendrás que agendar tu primer encuentro online con Magus. *Excepto el plan MoveYogui.",
  },
  {
    titulo: "Empezar a moverte con nosotros!",
    texto: "Todo listo! Según tu plan empezá a moverte y a cambiar tu estilo de vida con nosotros.",
  },
]

const agenda = [
  { tag: "salud digestiva", titulo: "Toma de plantas medicinales", img: "/labruma.png" },
  { tag: "running", titulo: "21K en Buenos Aires", img: "/labruma.png" },
  { tag: "salud digestiva", titulo: "Toma de plantas medicinales", img: "/labruma.png" },
  { tag: "running", titulo: "21K en Buenos Aires", img: "/labruma.png" },
  { tag: "salud digestiva", titulo: "Toma de plantas medicinales", img: "/labruma.png" },
  { tag: "running", titulo: "21K en Buenos Aires", img: "/labruma.png" },
]

export default function Planes() {
  const [planes, setPlanes] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    supabase.from('planes').select('*').order('id').then(({ data }) => {
      if (data) setPlanes(data)
      setCargando(false)
    })
  }, [])

  const scrollAgenda = (dir) => {
    const el = document.getElementById('agenda-carousel')
    el?.scrollBy({ left: dir * (el.offsetWidth / 2 + 16), behavior: 'smooth' })
  }

  // Colores de cada card (en orden). El texto y los bordes se adaptan al fondo.
  const estilosCards = [
    { bg: "#A4BEC6", fg: "#1a1a1a", nota: "rgba(26,26,26,0.55)" },
    { bg: "#F6F4EE", fg: "#1a1a1a", nota: "rgba(26,26,26,0.45)" },
    { bg: "#0C271D", fg: "#F6F4EE", nota: "rgba(246,244,238,0.55)" },
    { bg: "#D7FCA4", fg: "#1a1a1a", nota: "rgba(26,26,26,0.5)" },
  ]

  return (
    <main className="overflow-x-hidden">
      <div style={{ backgroundColor: "#CCE1E2" }}>
        <Header color="#0C271D" logoNegro />
      </div>

      {/* Sección de planes */}
      <section style={{ backgroundColor: "#CCE1E2" }} className="px-6 md:px-10 xl:px-16 py-12 md:py-24">
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-3xl md:text-4xl text-center max-w-7xl mx-auto leading-tight mb-12 md:mb-24">
          Conocé nuestros planes <span className="italic">Move</span>
        </p>

        {/* 1 columna en celular, 2 en tablet y laptop, 4 en pantallas grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:px-4">
          {cargando
            ? [1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="rounded-3xl animate-pulse min-h-[500px] md:min-h-[700px] xl:min-h-[900px]"
                  style={{ backgroundColor: "rgba(26,26,26,0.06)" }}
                />
              ))
            : planes.map((plan, i) => {
                const { bg, fg, nota } = estilosCards[i % estilosCards.length]
                return (
                  <div
                    key={plan.id}
                    className="flex flex-col p-6 xl:p-8 rounded-3xl relative overflow-hidden isolate"
                    style={{
                      backgroundColor: bg,
                      color: fg,
                      "--fg": fg,
                      "--bg": bg,
                    }}
                  >
                    {/* Listón Próximamente */}
                    {plan.proximamente && (
                      <div
                        className="absolute z-10 left-1/2 top-[16%] w-[200%] h-12 md:h-[65px] flex items-center justify-center -translate-x-1/2 rotate-[25deg] bg-[#A4BEC6] text-[#1a1a1a] font-medium font-[family-name:var(--font-dm-sans)] text-lg md:text-2xl tracking-[0.2em]"
                      >
                        PRÓXIMAMENTE
                      </div>
                    )}

                    <div className="flex flex-col h-full flex-1 gap-6" style={{ opacity: plan.proximamente ? 0.15 : 1 }}>

                      {/* Número en círculo */}
                      <div className="flex justify-end">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ border: `1px solid ${fg}` }}
                        >
                          <span className="font-[family-name:var(--font-dm-sans)] text-sm">0{i + 1}</span>
                        </div>
                      </div>

                      {/* Nombre del plan */}
                      <p className="font-[family-name:var(--font-instrument-serif)] text-5xl md:text-6xl xl:text-[clamp(2rem,3vw,6rem)] min-[2200px]:text-8xl italic leading-tight">
                        {plan.nombre}
                      </p>

                      {/* Descripción */}
                      <p className="font-[family-name:var(--font-instrument-serif)] text-2xl md:text-3xl xl:text-[clamp(1.125rem,1.4vw,2.25rem)] leading-snug">
                        Un entrenamiento a distancia con rutina personalizada y seguimiento profesional
                      </p>

                      {/* Línea */}
                      <div style={{ borderTop: `1px solid ${fg}`, margin: "0 16px" }} />

                      {/* Objetivo */}
                      <div className="flex flex-col gap-2">
                        <p className="font-[family-name:var(--font-dm-sans)] text-base font-bold">Objetivo:</p>
                        <p className="font-[family-name:var(--font-dm-sans)] text-base leading-snug">
                          Empezar a entrenar, volver a moverse y/o mantener una rutina a tu ritmo con una guía profesional.
                        </p>
                      </div>

                      {/* Incluye */}
                      <div className="flex flex-col gap-2">
                        <p className="font-[family-name:var(--font-dm-sans)] text-base font-bold">Incluye:</p>
                        <ul className="font-[family-name:var(--font-dm-sans)] text-base flex flex-col gap-1">
                          <li>· Asesoría online.</li>
                          <li>· 1 encuentro individual por mes online.</li>
                          <li>· Seguimiento cada 2 semanas a distancia.</li>
                          <li>· Plan de alimentación (genérico).</li>
                          <li>· 1 video por semana.</li>
                          <li>· ClubMove: Newsletter semanal</li>
                        </ul>
                      </div>

                      {/* Línea */}
                      <div style={{ borderTop: `1px solid ${fg}`, margin: "0 16px" }} />

                      {/* Precio */}
                      <div className="flex flex-col gap-1">
                        <p className="font-[family-name:var(--font-dm-sans)] text-base font-bold">Suscripción mensual</p>
                        <p className="font-[family-name:var(--font-dm-sans)] text-5xl md:text-6xl xl:text-[clamp(1.5rem,2.1vw,4.5rem)] min-[2200px]:text-7xl">
                          $ {Number(plan.precio).toLocaleString('es-AR')}
                          <sup style={{ color: nota, fontSize: "12px" }}>(*)</sup>
                          .-
                        </p>
                      </div>

                      {/* Línea */}
                      <div style={{ borderTop: `1px solid ${fg}`, margin: "0 16px" }} />

                      {/* Nota */}
                      <p className="font-[family-name:var(--font-dm-sans)] text-sm" style={{ color: nota }}>
                        *Materiales de trabajo <span className="underline">no</span> incluidos.
                      </p>

                      {/* Botón */}
                      <button
                        className="font-[family-name:var(--font-dm-sans)] mt-auto self-start flex items-center gap-3 px-6 xl:px-8 py-3 xl:py-4 rounded-full text-base transition-all cursor-pointer hover:bg-[var(--fg)] hover:text-[var(--bg)]"
                        style={{ border: `1px solid ${fg}` }}
                      >
                        Quiero contratar el plan <span>→</span>
                      </button>

                    </div>
                  </div>
                )
              })}
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

        {/* ¿Duda? + Botón */}
        <div className="flex flex-col items-center mt-10 md:mt-16 gap-4 px-6 text-center">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base">
            ¿Hay alguna duda que no encontraste?
          </p>
          <button
            className="font-[family-name:var(--font-dm-sans)] flex items-center gap-2 px-6 md:px-8 py-3 rounded-full text-lg md:text-xl hover:opacity-80 transition-all cursor-pointer"
            style={{ backgroundColor: "#1a1a1a", color: "#CCE1E2" }}
          >
            Consultar ahora <span style={{ color: "#CCE1E2" }}>→</span>
          </button>
        </div>
      </section>

      {/* Transición D7FCA4 → CCE1E2 */}
      <div className="h-16 md:h-[120px]" style={{ background: "linear-gradient(to bottom, #D7FCA4, #CCE1E2)" }} />

      {/* Sección Pasos (línea de tiempo): vertical en celular/tablet, horizontal desde xl */}
      <section style={{ backgroundColor: "#CCE1E2" }} className="relative py-12 md:py-24 pb-16 md:pb-32 xl:pb-64 min-[2200px]:pb-[520px]">
        <div className="relative">

          {/* Línea horizontal de punta a punta (pasa por el centro de los círculos) */}
          <div
            className="hidden xl:block absolute left-0 w-full border-t border-[#1a1a1a]"
            style={{ top: "56px" }}
          />

          <div className="flex flex-col xl:flex-row xl:justify-center gap-10 xl:gap-8 min-[2200px]:gap-16 px-6 md:px-12 xl:px-10 min-[2200px]:px-34">
            {pasos.map((paso, i) => (
              <div
                key={i}
                className="relative flex flex-row xl:flex-col gap-5 xl:gap-0 items-start w-full xl:w-auto xl:flex-1 xl:min-w-0 min-[2200px]:flex-none min-[2200px]:w-[340px]"
              >

                {/* Línea vertical que une con el paso siguiente (solo celular y tablet) */}
                {i < pasos.length - 1 && (
                  <div className="xl:hidden absolute left-5 top-[56px] -bottom-10 border-l border-[#1a1a1a]" />
                )}

                {/* "Paso N" centrado sobre el círculo */}
                <div className="relative flex flex-col items-center w-10 flex-shrink-0">
                  <p className="h-7 mb-2 leading-7 whitespace-nowrap font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-lg font-medium">
                    Paso {i + 1}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-[#587372]/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#0C271D]" />
                  </div>
                </div>

                {/* Título + texto, alineados a la izquierda */}
                <div className="pt-9 xl:pt-0 xl:mt-8 flex flex-col gap-3 text-left">
                  <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-3xl md:text-4xl xl:text-[clamp(1.5rem,1.9vw,3rem)] leading-none whitespace-pre-line">
                    {paso.titulo}
                  </p>
                  <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base leading-snug">
                    {paso.texto}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
        <div className="absolute bottom-0 left-0 w-full border-t border-[#1a1a1a]" />
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

      {/* Sección Newsletter ClubMove (componente compartido, ya responsive) */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  );
}