'use client'
import Image from "next/image";
import { supabase } from '@/lib/supabase'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

/*
  Tamaños de texto fluidos: fijos en celular/tablet y proporcionales al ancho
  de pantalla desde xl (1280px), hasta llegar al tamaño original de tu diseño en 2560px.
*/
const HERO = "text-4xl md:text-6xl xl:text-[clamp(3rem,5vw,6rem)]"
const BIG = "text-4xl md:text-6xl xl:text-[clamp(3rem,3.75vw,6rem)]"
const PARA = "text-xl md:text-2xl xl:text-[clamp(1.25rem,1.2vw,1.875rem)]"

const formacion = [
  {
    años: "2010–2015",
    titulo: "Personal trainer",
    items: [
      "Personal Trainer especializado en salud – IPEF",
      "Coach Ontológico – Axon Training",
    ],
  },
  {
    años: "2010–2015",
    titulo: "Vinyasa Yoga",
    items: ["Vinyasa Yoga – Cele Campos Bona"],
  },
  {
    años: "2010–2015",
    titulo: "Comedia musical",
    items: [
      "Graduada Comedia musical – Valeria Lynch",
      "Composición Coreográfica – UNA",
      "Lic. y docente en Arte dramático – USAL",
    ],
  },
  {
    años: "2010–2015",
    titulo: "Comedia musical",
    items: [
      "Graduada Comedia musical – Valeria Lynch",
      "Composición Coreográfica – UNA",
      "Lic. y docente en Arte dramático – USAL",
    ],
  },
]

export default function Home() {
  useEffect(() => {
    supabase.from('planes').select('*').order('id').then(({ data }) => {
    })
  }, [])
  return (
    <main className="overflow-x-hidden">
      {/* Primera sección: imagen de fondo + header + texto */}
      <div className="relative min-h-screen">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/inicio_nosotros.png"
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
        <div className="flex items-center justify-center mt-24 md:mt-48 xl:mt-72 min-[2200px]:mt-150 px-6 md:px-10">
          <p className={`font-[family-name:var(--font-instrument-serif)] text-[#F6F4EE] text-center ${HERO} leading-none`}>
            <span className="italic">MagusMove</span> es un espacio de acompañamiento integral
            <br className="hidden md:block" />
            {" "}liderado por María Agustina Cigana.
          </p>
        </div>
      </div>

      {/* Sección perfil de Magus */}
      <section style={{ backgroundColor: "#F6F4EE" }} className="pt-8 md:pt-16 pb-0">

        {/* Imágenes + texto: apilado hasta tablet, en fila desde xl */}
        <div className="flex flex-col xl:flex-row gap-8 px-6 md:px-10 xl:px-16 items-start">

          {/* Las dos imágenes: lado a lado en celular/tablet, y desde xl se integran a la fila */}
          <div className="flex gap-4 md:gap-6 w-full xl:contents items-start">
            {/* Imagen chica */}
            <div className="relative flex-shrink-0 w-[35%] xl:w-[22%]" style={{ aspectRatio: "176 / 232" }}>
              <Image
                src="/magus_1.png"
                alt="Magus Cigana"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 22vw, 35vw"
              />
            </div>

            {/* Imagen grande */}
            <div className="relative flex-shrink-0 w-[65%] xl:w-[34%]" style={{ aspectRatio: "270 / 388" }}>
              <Image
                src="/magus_1.png"
                alt="Magus Cigana"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 34vw, 65vw"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col flex-1 min-w-0">
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-5xl md:text-6xl xl:text-[clamp(3.5rem,3.75vw,6rem)] leading-none mb-6 xl:mb-10">
              Magus Cigana
            </h2>

            <p className={`font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] ${PARA} leading-snug mb-8 xl:mb-16`}>
              <span className="italic">María Agustina Cigana</span> es una profesional del movimiento y el wellnes. Nacida en Buenos Aires, Argentina. Lorem ipsum es un espacio de acompañamiento integral que fusiona el movimiento físico, el autoconocimiento corporal y la nutrición para lograr un estilo de vida consciente.
            </p>

            <p className={`font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] ${PARA} leading-snug mb-8 xl:mb-16`}>
              Lorem ipsum es un espacio de acompañamiento integral que fusiona el movimiento físico, el autoconocimiento corporal y la nutrición para lograr un estilo de vida consciente y en armonía.
            </p>

            <div className="flex flex-wrap gap-8 md:gap-16">
              {[1, 2].map((i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="font-[family-name:var(--font-dm-sans)] text-[#A4BEC6] text-sm tracking-[0.2em] uppercase">
                    Instagram
                  </span>
                  <span className={`font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] ${PARA}`}>
                    @magusmove
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formación */}
        <div className="px-6 md:px-10 xl:px-16 mt-16 md:mt-24 xl:mt-32 mb-12 md:mb-24">

          {/* Celular y tablet: cada formación como bloque, en 1 o 2 columnas */}
          <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {formacion.map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-lg">
                  {item.años}
                </span>
                <div style={{ borderTop: "1px solid #1a1a1a" }} />
                <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-4xl leading-none mt-2">
                  {item.titulo}
                </p>
                <div className="flex flex-col gap-1">
                  {item.items.map((txt, j) => (
                    <p key={j} className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base leading-snug">
                      · {txt}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pantallas grandes: años arriba, línea, y títulos abajo en 4 columnas */}
          <div className="hidden xl:block">
            {/* Años + flecha */}
            <div className="flex items-center mb-4">
              <div className="grid grid-cols-4 gap-8 flex-1">
                {formacion.map((item, i) => (
                  <span key={i} className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xl">
                    {item.años}
                  </span>
                ))}
              </div>
              <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-2xl">→</span>
            </div>

            <div style={{ borderTop: "1px solid #1a1a1a" }} />

            {/* Títulos + detalle */}
            <div className="grid grid-cols-4 gap-8 mt-8">
              {formacion.map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-[clamp(1.875rem,1.9vw,3rem)] leading-none">
                    {item.titulo}
                  </p>
                  <div className="flex flex-col gap-1">
                    {item.items.map((txt, j) => (
                      <p key={j} className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base min-[2200px]:text-lg leading-snug">
                        · {txt}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tira de 5 imágenes: en celular se desliza, desde tablet se ven las 5 juntas */}
        <div className="flex w-full overflow-x-auto md:overflow-visible scrollbar-hide">
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

        {/* Cards: test online + empezar a entrenar (apiladas hasta laptop chica, lado a lado desde xl) */}
        <div className="flex flex-col xl:flex-row gap-6 px-6 md:px-10 xl:px-16 min-[2200px]:px-64 py-12 md:py-24 min-[2200px]:py-48">
          {/* Card test */}
          <div
            className="relative flex-1 rounded-3xl overflow-hidden flex flex-col justify-between gap-8 p-6 md:p-12 min-h-[420px] md:min-h-[480px] xl:min-h-[560px]"
            style={{ backgroundColor: "#CCE1E2" }}
          >
            {/* Imagen: arriba en celular, a la derecha desde tablet */}
            <div className="relative -mx-6 -mt-6 h-52 md:absolute md:m-0 md:top-0 md:right-0 md:h-full md:w-[42%]">
              <Image
                src="/labruma.png"
                alt="Test online"
                fill
                className="object-cover md:rounded-l-3xl"
                sizes="(min-width: 768px) 25vw, 100vw"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-6 md:max-w-[55%]">
              <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-5xl md:text-6xl xl:text-[clamp(2.5rem,3.75vw,6rem)] leading-none">
                Realizá el <span className="italic">test</span> online
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base md:text-lg leading-snug">
                Descubrí nuestros planes de entrenamiento con clases, seguimiento y mucho más.
              </p>
            </div>

            <button className="relative z-10 font-[family-name:var(--font-dm-sans)] self-start flex items-center gap-3 px-6 md:px-8 py-3 rounded-full border border-[#1a1a1a] text-[#1a1a1a] text-base md:text-lg hover:bg-[#1a1a1a] hover:text-white transition-all">
              Empezar test <span>→</span>
            </button>
          </div>

          {/* Card entrenar */}
          <div
            className="relative flex-1 rounded-3xl overflow-hidden flex flex-col justify-between gap-8 p-6 md:p-12 min-h-[420px] md:min-h-[480px] xl:min-h-[560px]"
            style={{ backgroundColor: "#D7FCA4" }}
          >
            <div className="relative -mx-6 -mt-6 h-52 md:absolute md:m-0 md:top-0 md:right-0 md:h-full md:w-[42%]">
              <Image
                src="/labruma.png"
                alt="Empezá a entrenar"
                fill
                className="object-cover md:rounded-l-3xl"
                sizes="(min-width: 768px) 25vw, 100vw"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-6 md:max-w-[55%]">
              <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-5xl md:text-6xl xl:text-[clamp(2.5rem,3.75vw,6rem)] leading-none">
                Empezá a entrenar
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base md:text-lg leading-snug">
                Descubrí nuestros planes de entrenamiento con clases, seguimiento y mucho más.
              </p>
            </div>

            <button className="relative z-10 font-[family-name:var(--font-dm-sans)] self-start flex items-center gap-3 px-6 md:px-8 py-3 rounded-full border border-[#1a1a1a] text-[#1a1a1a] text-base md:text-lg hover:bg-[#1a1a1a] hover:text-white transition-all">
              Elegí tu plan <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Transición F6F4EE → blanco */}
      <div className="h-16 md:h-[120px]" style={{ background: "linear-gradient(to bottom, #F6F4EE, #ffffff)" }} />

      {/* Sección Newsletter ClubMove */}
      <Newsletter />
      {/* Footer */}
      <Footer />
    </main>
  );
}