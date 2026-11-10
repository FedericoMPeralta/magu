import Image from "next/image"
import Link from "next/link"

export default function Pulso() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #CCE1E2 0%, #CCE1E2 70%, #D7FCA4 100%)" }}
    >
    {/* Círculo centrado en la pantalla */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          href="/"
          className="grupo-circulo relative flex items-center justify-center cursor-pointer"
          style={{ width: "480px", height: "480px" }}
        >
          {/* Solo el aro se agranda */}
          <div className="circulo-hover absolute inset-0">
            <div
              className="circulo-respira w-full h-full rounded-full"
              style={{ border: "1px solid #D7FCA4" }}
            />
          </div>

          {/* El texto queda fijo */}
          <p className="relative font-[family-name:var(--font-dm-sans)] font-normal text-[#D7FCA4] text-3xl text-center leading-tight">
            Encontrá<br />tu pulso
          </p>
        </Link>
      </div>

      {/* Título en la zona amarilla */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-12 px-10 pointer-events-none">
        <div className="w-full max-w-7xl">
          <Image
            src="/titulo_animacion.png"
            alt="MagusMove"
            width={1400}
            height={300}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>
    </main>
  )
}