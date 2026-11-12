'use client'

export default function Newsletter() {
  return (
    <section className="relative isolate py-12 md:py-20 overflow-hidden min-h-[400px] flex items-center">
      {/* Fondo con degradado orgánico y grano tipo película */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
        <svg className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay pointer-events-none">
          <filter id="noiseFilter" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.12) 100%)" }}
        />
      </div>

      {/*
        Márgenes laterales:
        - celular/tablet: chicos
        - desde xl: proporcionales al ancho (8vw)
        - 2560px: los originales (450px izquierda / 600px derecha)
      */}
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12 pl-6 pr-6 md:pl-12 md:pr-12 xl:pl-[8vw] xl:pr-[8vw] min-[2200px]:pl-[450px] min-[2200px]:pr-[600px]">
        {/* Columna izquierda */}
        <div className="flex flex-col gap-2 text-left">
          <span className="font-[family-name:var(--font-dm-sans)] text-[#d7fca4] tracking-[0.3em] text-xs uppercase border-b border-[#d7fca4]/30 pb-1 self-start">
            NEWSLETTER
          </span>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-[#d7fca4] text-6xl md:text-8xl xl:text-[clamp(5rem,5vw,8rem)] not-italic font-normal tracking-tight leading-tight">
            Club<span className="italic">Move</span>
          </h2>
          <p className="font-[family-name:var(--font-instrument-serif)] text-[#d7fca4] text-2xl md:text-3xl xl:text-4xl">
            Newsletter semanal
          </p>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-auto">
          <div className="flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-3xl md:text-4xl">
              Suscribite para recibir
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base">
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

          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-2xl bg-[#b9d1d3]/90 backdrop-blur-sm rounded-3xl sm:rounded-full p-1.5 shadow-inner"
          >
            <input
              type="email"
              placeholder="mail@gmail.com"
              required
              className="w-full bg-transparent px-5 sm:px-7 py-3 font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] placeholder-[#1a1a1a]/60 focus:outline-none text-base md:text-lg"
            />
            <button
              type="submit"
              className="font-[family-name:var(--font-dm-sans)] bg-[#d7fca4] text-[#1a1a1a] px-7 md:px-9 py-3 rounded-full font-medium text-base md:text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
            >
              Suscribite ahora <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}