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
    <main className="overflow-x-hidden">
      <div style={{ backgroundColor: "#B8CFD4" }}>
        <Header color="#0C271D" logoNegro />

        <section className="pt-8 md:pt-16 pb-16 md:pb-32">

          {/* Título + línea (la línea empieza donde el título y tiene margen a la derecha) */}
          <div className="px-6 md:px-10 xl:px-20">
            <h1 className="font-[family-name:var(--font-instrument-serif)] text-[#0C271D] text-5xl md:text-7xl xl:text-[clamp(4rem,3.75vw,6rem)] leading-none mb-6 md:mb-8">
              Agenda de <span className="italic">Agosto</span>
            </h1>
            <div style={{ borderTop: "1px solid #0C271D" }} />
          </div>

          {/* Eventos: 1 columna en celular y tablet, 2 columnas desde xl */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 xl:gap-x-16 gap-y-12 md:gap-y-20 px-6 md:px-10 xl:px-20 mt-8 md:mt-16">
            {eventos.map((item, i) => (
              <div key={i} className="flex gap-4 md:gap-6">
                <div className="relative flex-shrink-0 w-[150px] h-[280px] md:w-[240px] md:h-[420px] xl:w-[280px] xl:h-[480px]">
                  <Image
                    src={item.img}
                    alt={item.titulo}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(min-width: 1280px) 280px, (min-width: 768px) 240px, 150px"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-between py-2 flex-1 min-w-0">
                  <div className="flex flex-col gap-3 xl:gap-4">
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#0C271D] text-base xl:text-xl underline underline-offset-4">
                      {item.tag}
                    </span>
                    <p className="font-[family-name:var(--font-instrument-serif)] text-[#0C271D] text-3xl md:text-4xl xl:text-[clamp(1.75rem,1.9vw,3rem)] leading-tight">
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
      <div className="h-16 md:h-[120px]" style={{ background: "linear-gradient(to bottom, #B8CFD4, #ffffff)" }} />

      <Newsletter />
      <Footer />
    </main>
  )
}