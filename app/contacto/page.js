'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

const inputClass =
  "w-full bg-[#BACFD3] text-[#1a1a1a] placeholder:text-[#7F9BA3] font-[family-name:var(--font-dm-sans)] text-base px-5 py-3 outline-none focus:ring-2 focus:ring-[#0E2A22]/40 transition-all"

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [estado, setEstado] = useState('idle') // idle | enviando | ok | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    const { error } = await supabase.from('contactos').insert([form])
    if (error) {
      setEstado('error')
    } else {
      setEstado('ok')
      setForm({ nombre: '', email: '', asunto: '', mensaje: '' })
    }
  }

  return (
    <main style={{ backgroundColor: "#D7FCA4" }}>
      {/* Header + título + formulario con fondo degradé */}
      <div
        className="relative"
        style={{ background: "linear-gradient(to bottom, #CCE1E2 0%, #D7FCA4 55%)" }}
      >
        <Header color="#0C271D" logoNegro />

        {/* Título */}
        <div className="pt-10 md:pt-20 xl:pt-32 pb-6 md:pb-8">
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-4xl md:text-5xl text-center leading-none">
            Contactános ahora
          </h1>
        </div>
        <div style={{ borderTop: "1px solid rgba(26,26,26,0.5)" }} />

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-16 md:pb-32 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre" className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base px-5">
              Nombre y Apellido*
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              placeholder="Nombre Apellido"
              value={form.nombre}
              onChange={handleChange}
              className={`${inputClass} rounded-full`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base px-5">
              Correo electrónico*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="mail@gmail.com"
              value={form.email}
              onChange={handleChange}
              className={`${inputClass} rounded-full`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="asunto" className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base px-5">
              Asunto*
            </label>
            <input
              id="asunto"
              name="asunto"
              type="text"
              required
              placeholder="Escribir asunto..."
              value={form.asunto}
              onChange={handleChange}
              className={`${inputClass} rounded-full`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="mensaje" className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-base px-5">
              Mensaje*
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={4}
              placeholder="Escribir mensaje..."
              value={form.mensaje}
              onChange={handleChange}
              className={`${inputClass} rounded-3xl resize-none`}
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-3 mt-2">
            {estado === 'ok' && (
              <span className="font-[family-name:var(--font-dm-sans)] text-[#0E2A22] text-sm">
                ¡Mensaje enviado! Te respondemos pronto.
              </span>
            )}
            {estado === 'error' && (
              <span className="font-[family-name:var(--font-dm-sans)] text-red-700 text-sm">
                Hubo un error, probá de nuevo.
              </span>
            )}
            <button
              type="submit"
              disabled={estado === 'enviando'}
              className="font-[family-name:var(--font-dm-sans)] flex items-center gap-3 px-6 py-3 rounded-full bg-[#0E2A22] text-[#D7FCA4] text-base hover:opacity-80 disabled:opacity-50 transition-all"
            >
              {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'} <span>→</span>
            </button>
          </div>
        </form>
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* Espacio entre newsletter y footer */}
      <div className="h-10 md:h-[72px]" style={{ backgroundColor: "#D7FCA4" }} />

      {/* Footer */}
      <Footer />
    </main>
  )
}