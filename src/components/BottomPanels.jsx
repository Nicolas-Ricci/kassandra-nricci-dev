import React, { useState, useEffect } from 'react'

export default function BottomPanels({ isMobile }) {
  return (
    <>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <div
          className={`will-fade animate-fade-up pointer-events-auto ${
            isMobile
              ? 'flex gap-2 overflow-x-auto max-w-[100vw] px-2 pb-1 mobile-panels-scroll'
              : 'flex gap-3'
          }`}
          style={{ animationDelay: '1.4s' }}
        >
          <EventPanel isMobile={isMobile} />
          <StreakPanel isMobile={isMobile} />
          <NewsPanel isMobile={isMobile} />
        </div>
      </div>

      {/* Credits Footer — Bottom Left (hidden on mobile to reduce clutter) */}
      {!isMobile && (
        <div
          className="fixed bottom-6 left-8 z-50 flex items-center gap-2 will-fade animate-slide-right pointer-events-auto group"
          style={{ animationDelay: '1.8s' }}
        >
          <span className="w-4 h-4 text-gold-neon" style={{ filter: 'drop-shadow(0 0 5px #ffd60a)' }}>
            <StarIcon />
          </span>
          <span className="font-pixel text-[9px] tracking-widest text-gold-neon uppercase select-none">
            Desarrollado por
          </span>
          <a
            href="https://nricci.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixel text-[9px] tracking-widest text-gold-neon hover:text-white transition-colors uppercase ml-1"
            style={{ textShadow: '0 0 8px rgba(255, 214, 10, 0.4)' }}
          >
            n.ricci.dev
          </a>
          <span className="font-pixel text-[12px] text-gold-neon animate-tictac ml-[-4px]">_</span>
        </div>
      )}
    </>
  )
}

/* ====================================================
   EVENTO ACTIVO
   ==================================================== */
function EventPanel({ isMobile }) {
  return (
    <Panel title="FOCO ACTIVO" color="#ff2bd6" icon={<EventIcon />} isMobile={isMobile}>
      {!isMobile && (
        <p className="font-retro text-[14px] text-white leading-tight">
          Organizando tareas, mensajes<br />
          y pendientes del día.
        </p>
      )}
      <div className="mt-1 flex items-center gap-2">
        <span className="font-pixel text-[8px] text-magenta-neon">TRABAJANDO</span>
        <Countdown />
      </div>
    </Panel>
  )
}

function Countdown() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const h = time.getHours()
  const m = time.getMinutes()
  const s = time.getSeconds()
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className="flex gap-1 font-pixel text-[10px]">
      <Box value={pad(h)} />
      <span className="text-magenta-neon">:</span>
      <Box value={pad(m)} />
      <span className="text-magenta-neon">:</span>
      <Box value={pad(s)} />
    </div>
  )
}

function Box({ value }) {
  return (
    <span
      className="px-1.5 py-0.5 text-white"
      style={{
        background: 'rgba(7,2,23,0.85)',
        border: '1px solid #ff2bd6',
        boxShadow: '0 0 6px rgba(255,43,214,0.6) inset',
      }}
    >
      {value}
    </span>
  )
}

/* ====================================================
   RACHA DIARIA
   ==================================================== */
function StreakPanel({ isMobile }) {
  const now = new Date()
  const dayOfWeek = now.getDay() === 0 ? 7 : now.getDay()
  const days = Array.from({ length: 7 }, (_, i) => i + 1 <= dayOfWeek)

  return (
    <Panel title="PROGRESO SEMANAL" color="#00f0ff" icon={<FlameIcon />} isMobile={isMobile}>
      <div className="flex items-center gap-1">
        {days.map((d, i) => (
          <div
            key={i}
            className={`w-5 h-6 flex items-center justify-center font-pixel text-[7px] ${
              d ? 'text-deep' : 'text-cyan-soft/60'
            }`}
            style={{
              background: d ? 'linear-gradient(180deg, #00f0ff, #4dffb8)' : 'rgba(7,2,23,0.85)',
              border: `1px solid ${d ? '#4dffb8' : 'rgba(0,240,255,0.4)'}`,
              boxShadow: d ? '0 0 8px #00f0ff' : 'none',
            }}
          >
            D{i + 1}
          </div>
        ))}
      </div>
      {!isMobile && (
        <div className="font-retro text-[13px] text-cyan-soft mt-1">
          Día <span className="text-cyan-neon font-bold">{dayOfWeek}</span> · avance semanal:{' '}
          <span className="text-gold-neon">+{dayOfWeek * 15}</span>
        </div>
      )}
    </Panel>
  )
}

/* ====================================================
   ACTUALIZACIONES
   ==================================================== */
function NewsPanel({ isMobile }) {
  return (
    <Panel title="ACTUALIZACIONES" color="#ffd60a" icon={<MegaphoneIcon />} isMobile={isMobile}>
      {!isMobile && (
        <p className="font-retro text-[14px] text-white leading-tight">
          Nueva integración disponible.<br />
          Conecta tus herramientas.
        </p>
      )}
      <div className="font-retro text-[12px] text-cyan-soft/80 mt-1">
        {isMobile ? 'Nueva integración lista.' : 'Revisar configuración.'}
      </div>
    </Panel>
  )
}

/* ====================================================
   Generic panel frame
   ==================================================== */
function Panel({ title, color, icon, children, isMobile }) {
  return (
    <div
      className={`relative hover-lift cursor-default shrink-0 ${
        isMobile ? 'px-3 py-2 min-w-[160px]' : 'px-4 py-2.5 min-w-[260px] max-w-[300px]'
      }`}
      style={{
        background: 'linear-gradient(180deg, rgba(13,5,48,0.95) 0%, rgba(7,2,23,0.95) 100%)',
        border: `2px solid ${color}`,
        boxShadow: `0 0 14px ${color}66, inset 0 0 14px ${color}22`,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-1.5">
        <span
          className="inline-flex items-center justify-center w-4 h-4"
          style={{ color, filter: `drop-shadow(0 0 6px ${color})` }}
        >
          {icon}
        </span>
        <span
          className="font-pixel text-[8px] tracking-widest"
          style={{ color, textShadow: `0 0 8px ${color}` }}
        >
          {title}
        </span>
        <span
          className="ml-auto w-2 h-2 rounded-full notif-dot"
          style={{ background: color, boxShadow: `0 0 8px ${color}` }}
        />
      </div>
      {children}
      {/* Pixel corners */}
      <span className="absolute -top-1 -left-1 w-1.5 h-1.5" style={{ background: color }} />
      <span className="absolute -top-1 -right-1 w-1.5 h-1.5" style={{ background: color }} />
      <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5" style={{ background: color }} />
      <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5" style={{ background: color }} />
    </div>
  )
}

function EventIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full pixelated">
      <polygon points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6" fill="currentColor" />
    </svg>
  )
}
function FlameIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full pixelated">
      <path
        d="M8 1 C 9 5 13 6 12 10 C 11 13 9 14 8 14 C 7 14 5 13 4 10 C 3 7 6 6 6 3 C 7 4 7 4 8 1 Z"
        fill="currentColor"
      />
    </svg>
  )
}
function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full pixelated">
      <polygon points="2,6 12,2 12,14 2,10" fill="currentColor" />
      <rect x="12" y="6" width="2" height="4" fill="currentColor" />
    </svg>
  )
}
function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full pixelated">
      <polygon points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6" fill="currentColor" />
    </svg>
  )
}
