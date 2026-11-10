import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Newsletter from "@/components/Newsletter"

const eventos = [
  { tag: "salud digestiva", titulo: "Toma de plantas medicinales", img: "/labruma.png" },
  { tag: "running", titulo: "21K en Buenos Aires", img: "/labruma.png" },
  { tag: "salud digestiva", titulo: "Toma de plantas medicinales", img: "/labruma.png" },
  { tag: "running", titulo: "21K en Buenos Aires", img: "/labruma.png" },
]

export default function Agenda() {
  return (
    <main>
      <div style={{ backgroundColor: "#B8CFD4" }}>
        <Header color="#0C271D" logoNegro />

        <section className="pt-16 pb-32">

          {/* Título + línea (la línea empieza donde el título y tiene margen a la derecha) */}
          <div className="px-20">
            <h1 className="font-[family-name:var(--font-instrument-serif)] text-[#0C271D] text-8xl leading-none mb-8">
              Agenda de <span className="italic">Agosto</span>
            </h1>
            <div style={{ borderTop: "1px solid #0C271D" }} />
          </div>

          {/* 4 eventos: 2 arriba y 2 abajo */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-20 px-20 mt-16">
            {eventos.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="relative flex-shrink-0" style={{ width: "280px", height: "480px" }}>
                  <Image
                    src={item.img}
                    alt={item.titulo}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="280px"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-between py-2 flex-1">
                  <div className="flex flex-col gap-4">
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#0C271D] text-xl underline underline-offset-4">
                      {item.tag}
                    </span>
                    <p className="font-[family-name:var(--font-instrument-serif)] text-[#0C271D] text-5xl leading-tight">
                      {item.titulo}
                    </p>
                    <p className="font-[family-name:var(--font-dm-sans)] text-[#0C271D] text-sm leading-relaxed">
                      Descubrí nuestros planes de entrenamiento con clases, seguimiento y mucho más.
                    </p>
                  </div>
                  <button className="font-[family-name:var(--font-dm-sans)] self-start flex items-center gap-2 text-[#0C271D] text-base hover:opacity-50 transition-opacity cursor-pointer">
                    Descubrir más <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Transición al newsletter */}
      <div style={{ height: "120px", background: "linear-gradient(to bottom, #B8CFD4, #ffffff)" }} />

      <Newsletter />
      <Footer />
    </main>
  )
}