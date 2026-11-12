import Image from "next/image"
import Link from "next/link"

export default function Pulso() {
  return (
    <main
      className="relative min-h-[100svh] overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #A4BEC6 0%, #A4BEC6 70%, #D7FCA4 100%)" }}
    >
      {/* Animación del fondo: se va tiñendo de verde/amarillo */}
      <style>{`
        @keyframes fondo-aparece {
          0%, 100% { opacity: 0; }
          50%      { opacity: 1; }
        }
        @keyframes respirar-touch {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.3); }
        }
        .fondo-final {
          opacity: 0;
        }
        main:has(.grupo-circulo:hover) .fondo-final {
          animation: fondo-aparece 4s ease-in-out infinite;
        }
        @media (hover: none) {
          .grupo-circulo .circulo-respira {
            animation: respirar-touch 4s ease-in-out infinite;
          }
          .fondo-final {
            animation: fondo-aparece 4s ease-in-out infinite;
          }
        }
      `}</style>

      {/* Fondo final (primera imagen) que aparece encima del inicial */}
      <div
        className="fondo-final absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #A4BEC6 0%, #A4BEC6 15%, #D7FCA4 100%)" }}
      />

      {/* Círculo centrado en la pantalla: 70% del ancho en celular, máximo 480px */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Link
          href="/"
          className="grupo-circulo relative flex items-center justify-center cursor-pointer w-[min(70vw,480px)] h-[min(70vw,480px)]"
        >
          {/* Solo el aro se agranda */}
          <div className="circulo-hover absolute inset-0">
            <div
              className="circulo-respira w-full h-full rounded-full"
              style={{ border: "1px solid #D7FCA4" }}
            />
          </div>

          {/* El texto queda fijo */}
          <p className="relative font-[family-name:var(--font-dm-sans)] font-normal text-[#D7FCA4] text-2xl md:text-3xl text-center leading-tight">
            Encontrá<br />tu pulso
          </p>
        </Link>
      </div>

      {/* Título pegado al borde inferior (la "g" queda cortada) */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none">
        <div className="w-[95vw]">
          <Image
            src="/titulo_animacion.png"
            alt="MagusMove"
            width={2400}
            height={514}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              transform: "translateY(4%)",
            }}
            priority
          />
        </div>
      </div>
    </main>
  )
}