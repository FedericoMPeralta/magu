'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function VistaMagus() {
  const [planes, setPlanes] = useState([])
  const [planSeleccionado, setPlanSeleccionado] = useState(null)
  const [editado, setEditado] = useState({})
  const [guardando, setGuardando] = useState(false)
  const [exito, setExito] = useState(false)

  useEffect(() => {
    supabase.from('planes').select('*').order('id').then(({ data }) => {
      if (data) {
        setPlanes(data)
        setPlanSeleccionado(data[0])
        setEditado(data[0])
      }
    })
  }, [])

  const handleCambio = (campo, valor) => {
    setEditado(prev => ({ ...prev, [campo]: valor }))
  }

  const guardar = async () => {
    setGuardando(true)
    setExito(false)
    const { error } = await supabase
      .from('planes')
      .update({ nombre: editado.nombre, precio: editado.precio })
      .eq('id', editado.id)

    if (!error) {
      setPlanes(prev => prev.map(p => p.id === editado.id ? editado : p))
      setPlanSeleccionado(editado)
      setExito(true)
      setTimeout(() => setExito(false), 2000)
    } else {
      alert('Error al guardar: ' + error.message)
    }
    setGuardando(false)
  }

  return (
    <div style={{ backgroundColor: "#F6F4EE", minHeight: "100vh" }}>
      <div style={{ backgroundColor: "#1a1a1a" }}>
        <Header />
      </div>

      <div className="px-5 md:px-10 xl:px-16 py-8 md:py-16">

        {/* Título */}
        <div className="mb-8 md:mb-12">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Panel de administración</p>
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-4xl md:text-6xl">Vista Magus</h1>
        </div>

        {/* Panel dividido: en celular y tablet se apila, desde lg va lado a lado */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:min-h-[600px]">

          {/* Lista de planes: horizontal y deslizable en celular, vertical desde lg */}
          <div className="flex flex-col gap-2 w-full lg:w-[280px] lg:flex-shrink-0 min-w-0">
            <p className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xs uppercase tracking-widest mb-2 opacity-50">Planes</p>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible scrollbar-hide pb-1 lg:pb-0">
              {planes.map((plan, i) => (
                <button
                  key={plan.id}
                  onClick={() => { setPlanSeleccionado(plan); setEditado(plan) }}
                  className="flex items-center gap-4 px-5 py-3 lg:py-4 rounded-2xl text-left transition-all cursor-pointer flex-none lg:flex-auto"
                  style={{
                    backgroundColor: planSeleccionado?.id === plan.id ? "#1a1a1a" : "rgba(26,26,26,0.06)",
                    color: planSeleccionado?.id === plan.id ? "#F6F4EE" : "#1a1a1a",
                  }}
                >
                  <span
                    className="font-[family-name:var(--font-dm-sans)] text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: planSeleccionado?.id === plan.id ? "rgba(246,244,238,0.2)" : "rgba(26,26,26,0.1)",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span className="font-[family-name:var(--font-instrument-serif)] text-xl italic whitespace-nowrap">{plan.nombre}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Detalle derecha */}
          {editado.id && (
            <div
              className="flex-1 min-w-0 rounded-3xl p-5 md:p-10 flex flex-col gap-6 md:gap-8"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-3xl md:text-4xl italic">{planSeleccionado?.nombre}</h2>
                <div className="flex items-center gap-3">
                  {exito && (
                    <span className="font-[family-name:var(--font-dm-sans)] text-sm" style={{ color: "#587372" }}>
                      ✓ Guardado
                    </span>
                  )}
                  <button
                    onClick={guardar}
                    disabled={guardando}
                    className="font-[family-name:var(--font-dm-sans)] px-6 py-2 rounded-full text-sm cursor-pointer transition-all"
                    style={{ backgroundColor: "#1a1a1a", color: "#F6F4EE", opacity: guardando ? 0.5 : 1 }}
                  >
                    {guardando ? "Guardando..." : "Guardar cambios"}
                  </button>
                </div>
              </div>

              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />

              {/* Campos */}
              <div className="flex flex-col gap-6">

                <div className="flex flex-col gap-2">
                  <label className="font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-widest opacity-50">Nombre del plan</label>
                  <input
                    value={editado.nombre || ''}
                    onChange={(e) => handleCambio('nombre', e.target.value)}
                    className="w-full font-[family-name:var(--font-instrument-serif)] text-[#1a1a1a] text-2xl italic px-4 py-3 rounded-xl focus:outline-none"
                    style={{ backgroundColor: "rgba(0,0,0,0.04)", border: "1px solid transparent" }}
                    onFocus={e => e.target.style.border = "1px solid rgba(0,0,0,0.2)"}
                    onBlur={e => e.target.style.border = "1px solid transparent"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-[family-name:var(--font-dm-sans)] text-xs uppercase tracking-widest opacity-50">Precio mensual</label>
                  <div className="flex items-center gap-2">
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xl">$</span>
                    <input
                      type="number"
                      value={editado.precio || ''}
                      onChange={(e) => handleCambio('precio', e.target.value)}
                      className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-2xl px-4 py-3 rounded-xl focus:outline-none w-full max-w-[200px]"
                      style={{ backgroundColor: "rgba(0,0,0,0.04)", border: "1px solid transparent" }}
                      onFocus={e => e.target.style.border = "1px solid rgba(0,0,0,0.2)"}
                      onBlur={e => e.target.style.border = "1px solid transparent"}
                    />
                    <span className="font-[family-name:var(--font-dm-sans)] text-[#1a1a1a] text-xl opacity-50">.-</span>
                  </div>
                </div>

              </div>

              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />

              <p className="font-[family-name:var(--font-dm-sans)] text-xs opacity-30">
                ID: {editado.id} · Más campos editables próximamente
              </p>

            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}