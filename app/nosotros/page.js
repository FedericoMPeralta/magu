'use client'
import Image from "next/image";
import { supabase } from '@/lib/supabase'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

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
    <main>
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
        <div className="flex items-center justify-center mt-150 px-10">
          <p className="font-[family-name:var(--font-instrument-serif)] text-[#F6F4EE] text-center text-8xl max-w-8xl leading-none">
            <span className="italic">MagusMove</span> es un espacio de acompañamiento integral
            <br />
            liderado por María Agustina Cigana.
          </p>
        </div>
      </div>

      {/* Sección perfil de Magus */}
      <section style={{ backgroundColor: "#F6F4EE" }} className="pt-16 pb-0">

        {/* Imágenes + texto */}
        <div className="flex gap-8 px-16 items-start">
          {/* Imagen chica */}
          <div className="relative flex-shrink-0" style={{ width: "22%", aspectRatio: "176 / 232" }}>
            <Image
              src="/magus_1.png"
              alt="Magus Cigana"
              fill
              className="object-cover"
              sizes="22vw"
            />
          </div>

          {/* Imagen grande */}
          <div className="relative flex-shrink-0" style={{ width: "34%", aspectRatio: "270 / 388" }}>
            <Image
              src="/magus_1.png"
              alt="Magus Cigana"
              fill
              className="object-cover"
              sizes="34vw"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col flex-1 min-w-0">
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-8xl leading-none mb-10">
              Magus Cigana
            </h2>

            <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-3xl leading-snug mb-16">
              <span className="italic">María Agustina Cigana</span> es una profesional del movimiento y el wellnes. Nacida en Buenos Aires, Argentina. Lorem ipsum es un espacio de acompañamiento integral que fusiona el movimiento físico, el autoconocimiento corporal y la nutrición para lograr un estilo de vida consciente.
            </p>

            <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-3xl leading-snug mb-16">
              Lorem ipsum es un espacio de acompañamiento integral que fusiona el movimiento físico, el autoconocimiento corporal y la nutrición para lograr un estilo de vida consciente y en armonía.
            </p>

            <div className="flex gap-16">
              {[1, 2].map((i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="font-[family-name:var(--font-dm-sans)] text-[#A4BEC6] text-sm tracking-[0.2em] uppercase">
                    Instagram
                  </span>
                  <span className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-3xl">
                    @magusmove
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formación */}
        <div className="px-16 mt-32 mb-24">
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
                <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-5xl leading-none">
                  {item.titulo}
                </p>
                <div className="flex flex-col gap-1">
                  {item.items.map((txt, j) => (
                    <p key={j} className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-lg leading-snug">
                      · {txt}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tira de 5 imágenes */}
        <div className="flex w-full">
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

        {/* Cards: test online + empezar a entrenar */}
        <div className="flex gap-6 px-64 py-48">
          {/* Card test */}
          <div
            className="relative flex-1 rounded-3xl overflow-hidden flex flex-col justify-between p-12"
            style={{ backgroundColor: "#CCE1E2", minHeight: "560px" }}
          >
            <div className="absolute top-0 right-0 h-full" style={{ width: "42%" }}>
              <Image
                src="/labruma.png"
                alt="Test online"
                fill
                className="object-cover rounded-l-3xl"
                sizes="20vw"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-6" style={{ maxWidth: "55%" }}>
              <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-8xl leading-none">
                Realizá el <span className="italic">test</span> online
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-lg leading-snug">
                Descubrí nuestros planes de entrenamiento con clases, seguimiento y mucho más.
              </p>
            </div>

            <button className="relative z-10 font-[family-name:var(--font-dm-sans)] self-start flex items-center gap-3 px-8 py-3 rounded-full border border-[#1a1a1a] text-[#1a1a1a] text-lg hover:bg-[#1a1a1a] hover:text-white transition-all">
              Empezar test <span>→</span>
            </button>
          </div>

          {/* Card entrenar */}
          <div
            className="relative flex-1 rounded-3xl overflow-hidden flex flex-col justify-between p-12"
            style={{ backgroundColor: "#D7FCA4", minHeight: "560px" }}
          >
            <div className="absolute top-0 right-0 h-full" style={{ width: "42%" }}>
              <Image
                src="/labruma.png"
                alt="Empezá a entrenar"
                fill
                className="object-cover rounded-l-3xl"
                sizes="20vw"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-6" style={{ maxWidth: "55%" }}>
              <p className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-8xl leading-none">
                Empezá a entrenar
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-lg leading-snug">
                Descubrí nuestros planes de entrenamiento con clases, seguimiento y mucho más.
              </p>
            </div>

            <button className="relative z-10 font-[family-name:var(--font-dm-sans)] self-start flex items-center gap-3 px-8 py-3 rounded-full border border-[#1a1a1a] text-[#1a1a1a] text-lg hover:bg-[#1a1a1a] hover:text-white transition-all">
              Elegí tu plan <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Transición F6F4EE → blanco */}
      <div style={{ height: "120px", background: "linear-gradient(to bottom, #F6F4EE, #ffffff)" }} />

      {/* Sección Newsletter ClubMove */}
      <Newsletter />
      {/* Footer */}
      <Footer />
    </main>
  );
}