'use client'
import Image from "next/image";
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Planes() {
  const [planes, setPlanes] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    supabase.from('planes').select('*').order('id').then(({ data }) => {
      if (data) setPlanes(data)
      setCargando(false)
    })
  }, [])

  // Colores de cada card (en orden). El texto y los bordes se adaptan al fondo.
  const estilosCards = [
    { bg: "#A4BEC6", fg: "#1a1a1a", nota: "rgba(26,26,26,0.55)" },
    { bg: "#F6F4EE", fg: "#1a1a1a", nota: "rgba(26,26,26,0.45)" },
    { bg: "#0C271D", fg: "#F6F4EE", nota: "rgba(246,244,238,0.55)" },
    { bg: "#D7FCA4", fg: "#1a1a1a", nota: "rgba(26,26,26,0.5)" },
  ]

  return (
    <main>
      <div style={{ backgroundColor: "#CCE1E2" }}>
        <Header color="#0C271D" logoNegro />   
      </div>
      {/* Sección de planes */}
      <section style={{ backgroundColor: "#CCE1E2" }} className="px-16 py-24">
        <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-4xl text-center max-w-7xl mx-auto leading-none mb-24">
          Conocé nuestros planes <span className="italic">Move</span>
        </p>

        <div className="flex gap-6 px-4">
          {cargando
            ? [1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="rounded-3xl animate-pulse"
                  style={{ flex: 1, minHeight: "900px", backgroundColor: "rgba(26,26,26,0.06)" }}
                />
              ))
            : planes.map((plan, i) => {
                const { bg, fg, nota } = estilosCards[i % estilosCards.length]
                return (
                  <div
                    key={plan.id}
                    className="flex flex-col p-8 rounded-3xl relative overflow-hidden"
                    style={{
                      backgroundColor: bg,
                      color: fg,
                      "--fg": fg,
                      "--bg": bg,
                      flex: 1,
                      
                      isolation: "isolate",
                    }}
                  >
                    {/* Listón Próximamente */}
                    {plan.proximamente && (
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

                    <div className="flex flex-col h-full gap-6" style={{ opacity: plan.proximamente ? 0.15 : 1 }}>

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
                      <p className="font-[family-name:var(--font-instrument-serif)] text-8xl italic leading-tight">
                        {plan.nombre}
                      </p>

                      {/* Descripción */}
                      <p className="font-[family-name:var(--font-instrument-serif)] text-4xl leading-snug">
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
                        <p className="font-[family-name:var(--font-dm-sans)] text-7xl">
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
                        className="font-[family-name:var(--font-dm-sans)] mt-auto self-start flex items-center gap-3 px-8 py-4 rounded-full text-base transition-all cursor-pointer hover:bg-[var(--fg)] hover:text-[var(--bg)]"
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

        {/* ¿Duda? + Botón */}
        <div className="flex flex-col items-center mt-16 gap-4">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base">
            ¿Hay alguna duda que no encontraste?
          </p>
          <button
            className="font-[family-name:var(--font-dm-sans)] flex items-center gap-2 px-8 py-3 rounded-full text-xl hover:opacity-80 transition-all cursor-pointer"
            style={{ backgroundColor: "#1a1a1a", color: "#CCE1E2" }}
          >
            Consultar ahora <span style={{ color: "#CCE1E2" }}>→</span>
          </button>
        </div>
      </section>

      {/* Transición D7FCA4 → CCE1E2 */}
      <div style={{ height: "120px", background: "linear-gradient(to bottom, #D7FCA4, #CCE1E2)" }} />

      {/* Sección Pasos (línea de tiempo) */}
      <section style={{ backgroundColor: "#CCE1E2" }} className="relative py-24 pb-[520px]">
        <div className="relative">

          {/* Línea de punta a punta (pasa por el centro de los círculos) */}
          <div
            className="absolute left-0 w-full border-t border-[#1a1a1a]"
            style={{ top: "56px" }}
          />


          <div className="flex justify-center gap-16 px-34">
            {[
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
            ].map((paso, i) => (
              <div key={i} className="shrink-0 w-[340px] flex flex-col items-start">

                {/* "Paso N" centrado sobre el círculo */}
                <div className="relative flex flex-col items-center w-10">
                  <p className="h-7 mb-2 leading-7 whitespace-nowrap font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-lg font-medium">
                    Paso {i + 1}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-[#587372]/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#0C271D]" />
                  </div>
                </div>

                {/* Título + texto, alineados a la izquierda */}
                <div className="mt-8 flex flex-col gap-3 text-left">
                  <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-5xl leading-none whitespace-pre-line">
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

        <div className="w-full flex flex-col lg:flex-row items-center justify-between" style={{ paddingLeft: "450px", paddingRight: "600px" }}>
          {/* Columna Izquierda: Títulos */}
          <div className="flex flex-col gap-2 text-left">
            <span className="font-[family-name:var(--font-dm-sans)] text-[#d7fca4] tracking-[0.3em] text-xs uppercase border-b border-[#d7fca4]/30 pb-1 self-start">
              NEWSLETTER
            </span>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-[#d7fca4] text-7xl md:text-9xl not-italic font-normal tracking-tight leading-tight">
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
              className="relative flex items-center w-full max-w-2xl bg-[#b9d1d3]/90 backdrop-blur-sm rounded-full p-1.5 shadow-inner"
            >
              <input
                type="email"
                placeholder="mail@gmail.com"
                required
                className="w-full bg-transparent px-7 py-3 font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] placeholder-[#1a1a1a]/60 focus:outline-none text-lg"
              />
              <button
                type="submit"
                className="font-[family-name:var(--font-dm-sans)] bg-[#d7fca4] text-[#1a1a1a] px-9 py-3 rounded-full font-medium text-lg hover:opacity-90 transition-all flex items-center gap-2 whitespace-nowrap shadow-sm"
              >
                Suscribite ahora <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
      
    </main>
  );
}
