import React, { useState, useEffect, useRef } from 'react'

export default function TopHUD({ isMusicOn, onToggleMusic, isMobile, isLaptop }) {
  const [activePopup, setActivePopup] = useState(null)

  return (
    <header className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
      {/* LEFT — Kassandra profile (desktop only) */}
      {!isMobile && (
        <div className="absolute left-6 top-7 pointer-events-auto will-fade animate-slide-right" style={{ animationDelay: '0.3s' }}>
          <ProfilePanel />
        </div>
      )}

      {/* CENTER — title */}
      <div className="absolute left-1/2 top-4 -translate-x-1/2 pointer-events-none">
        <div className="flex flex-col items-center will-fade animate-slide-down" style={{ animationDelay: '0.15s' }}>
          <TitleBanner isMobile={isMobile} isLaptop={isLaptop} />

          {/* Music Toggle — always visible, centered under title */}
          <div className={`${isMobile ? 'mt-2' : 'mt-4'} pointer-events-auto`}>
            <button
              onClick={onToggleMusic}
              className={`px-3 py-1.5 rounded-sm flex items-center gap-2 transition-all duration-300 group ${
                isMusicOn ? 'bg-gold-neon/20' : 'bg-black/40'
              }`}
              style={{
                border: '1px solid #ffd60a',
                boxShadow: isMusicOn
                  ? '0 0 15px #ffd60a, inset 0 0 10px #ffd60a44'
                  : '0 0 5px #ffd60a22',
              }}
            >
              <div className={`text-gold-neon ${isMusicOn ? 'animate-pulse' : 'opacity-60'}`}>
                {isMusicOn ? <VolumeOnIcon /> : <VolumeOffIcon />}
              </div>
              <span className={`font-pixel ${isMobile ? 'text-[8px]' : 'text-[10px]'} text-gold-neon tracking-widest`}>
                {isMusicOn ? 'AUDIO: ON' : 'AUDIO: OFF'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT — resources + notif/menu */}
      <div
        className={`absolute right-4 pointer-events-auto flex flex-row items-center gap-3 will-fade animate-slide-left ${isMobile ? 'top-3' : 'top-7'}`}
        style={{ animationDelay: '0.3s' }}
      >
        {!isMobile && <ResourceBar />}
        <TopRightIcons
          activePopup={activePopup}
          setActivePopup={setActivePopup}
          isMusicOn={isMusicOn}
          onToggleMusic={onToggleMusic}
          isMobile={isMobile}
        />
      </div>
    </header>
  )
}

/* ============================================================
   Title banner
   ============================================================ */
function TitleBanner({ isMobile, isLaptop }) {
  const titleSize = isMobile ? 'text-[16px]' : isLaptop ? 'text-[22px]' : 'text-[36px]'
  return (
    <div className="relative">
      <div className={`relative ${isMobile ? 'px-4 py-2' : isLaptop ? 'px-6 py-2' : 'px-8 py-3'}`}>
        <div
          className="absolute inset-0 -z-10 rounded-sm"
          style={{
            background: 'linear-gradient(180deg, rgba(13,5,48,0.85) 0%, rgba(7,2,23,0.85) 100%)',
            border: '2px solid #00f0ff',
            boxShadow: '0 0 22px rgba(0,240,255,0.55), inset 0 0 24px rgba(181,55,242,0.25)',
          }}
        />
        <h1
          className={`font-pixel tracking-widest text-white text-glow-cyan text-center ${titleSize}`}
        >
          KASSANDRA <span className="text-glow-violet text-magenta-neon">2.1</span>
          <span className="animate-tictac ml-2 text-cyan-neon">_</span>
        </h1>
        <span className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-neon" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-magenta-neon" />
        <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-magenta-neon" />
        <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-neon" />
      </div>
      <p
        className={`font-retro text-cyan-soft text-center mt-2 tracking-wide animate-fade-in will-fade uppercase ${isMobile ? 'text-[12px]' : 'text-[16px]'}`}
        style={{ animationDelay: '0.6s' }}
      >
        asistente virtual en desarrollo{' '}
        <a
          href="https://nricci.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-neon hover:text-gold-warm transition-colors pointer-events-auto cursor-pointer lowercase"
          style={{ textShadow: '0 0 8px rgba(255, 214, 10, 0.4)' }}
        >
          by nricci.dev
        </a>
      </p>
    </div>
  )
}

/* ============================================================
   Profile panel (desktop)
   ============================================================ */
function ProfilePanel() {
  return (
    <div className="pixel-border violet rounded-sm px-3 py-2 flex items-center gap-3 min-w-[260px] hover-lift">
      <div className="relative w-14 h-14 rounded-sm overflow-hidden border-2 border-cyan-neon shadow-neonCyan bg-deep">
        <svg viewBox="0 0 16 16" className="w-full h-full pixelated">
          <rect x="5" y="3" width="6" height="6" fill="#f5cfa8" />
          <rect x="4" y="2" width="8" height="2" fill="#00aaff" />
          <rect x="4" y="4" width="2" height="3" fill="#00aaff" />
          <rect x="10" y="4" width="2" height="3" fill="#00aaff" />
          <rect x="3" y="5" width="1" height="3" fill="#0088dd" />
          <rect x="12" y="5" width="1" height="3" fill="#0088dd" />
          <rect x="6" y="6" width="1" height="1" fill="#0a0a30" />
          <rect x="9" y="6" width="1" height="1" fill="#0a0a30" />
          <rect x="7" y="8" width="2" height="1" fill="#a04060" />
          <rect x="4" y="9" width="8" height="5" fill="#1a0d44" />
          <rect x="5" y="10" width="6" height="1" fill="#00f0ff" />
          <rect x="7" y="11" width="2" height="1" fill="#ff2bd6" />
        </svg>
        <span className="absolute bottom-0 right-0 w-2 h-2 bg-mint shadow-[0_0_6px_#4dffb8]" />
      </div>
      <div className="flex-1">
        <div className="flex items-baseline gap-2">
          <span className="font-pixel text-[10px] text-white">Kassandra</span>
          <span className="font-retro text-cyan-neon text-sm">LV 27</span>
        </div>
        <div className="bar-track h-3 w-44 mt-1 rounded-sm">
          <div
            className="bar-fill rounded-sm animate-bar-grow"
            style={{ '--bar-final': '72%', animationDelay: '0.9s' }}
          />
        </div>
        <div className="flex justify-between font-retro text-[12px] mt-0.5">
          <span className="text-cyan-soft">XP</span>
          <span className="text-white">7.2k / 10k</span>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   Resource bar (desktop)
   ============================================================ */
function ResourceBar() {
  return (
    <div className="pixel-border rounded-sm px-4 py-2.5 flex items-center gap-5">
      <Resource icon="tasks" label="12/24" color="#ffd60a" />
      <Divider />
      <Resource icon="messages" label="8" color="#ff2bd6" />
      <Divider />
      <Resource icon="ai" label="98%" color="#4dffb8" />
    </div>
  )
}

function Divider() {
  return <span className="w-[1px] h-6 bg-cyan-neon/40" />
}

function Resource({ icon, label, color }) {
  return (
    <div className="flex items-center gap-2 group cursor-default">
      <span
        className="inline-flex items-center justify-center w-6 h-6 group-hover:animate-bob"
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      >
        {icon === 'tasks' && <TaskIcon color={color} />}
        {icon === 'messages' && <ChatIcon color={color} />}
        {icon === 'ai' && <AIIcon color={color} />}
      </span>
      <span className="font-pixel text-[12px] text-white" style={{ textShadow: `0 0 10px ${color}` }}>
        {label}
      </span>
    </div>
  )
}

function TaskIcon({ color }) {
  return (
    <svg viewBox="0 0 12 12" className="w-5 h-5 pixelated">
      <rect x="2" y="2" width="8" height="8" fill="none" stroke={color} strokeWidth="1" />
      <rect x="4" y="4" width="4" height="1" fill={color} />
      <rect x="4" y="6" width="4" height="1" fill={color} />
      <rect x="4" y="8" width="2" height="1" fill={color} />
    </svg>
  )
}
function ChatIcon({ color }) {
  return (
    <svg viewBox="0 0 12 12" className="w-5 h-5 pixelated">
      <rect x="2" y="2" width="8" height="6" fill={color} />
      <path d="M4,8 L4,10 L6,8" fill={color} />
      <rect x="4" y="4" width="4" height="1" fill="#fff" opacity="0.4" />
    </svg>
  )
}
function AIIcon({ color }) {
  return (
    <svg viewBox="0 0 12 12" className="w-5 h-5 pixelated">
      <rect x="4" y="4" width="4" height="4" fill={color} />
      <rect x="5" y="2" width="2" height="2" fill={color} opacity="0.6" />
      <rect x="5" y="8" width="2" height="2" fill={color} opacity="0.6" />
      <rect x="2" y="5" width="2" height="2" fill={color} opacity="0.6" />
      <rect x="8" y="5" width="2" height="2" fill={color} opacity="0.6" />
      <rect x="5" y="5" width="2" height="2" fill="#fff" />
    </svg>
  )
}

/* ============================================================
   Top right icons
   ============================================================ */
function TopRightIcons({ activePopup, setActivePopup, isMusicOn, onToggleMusic, isMobile }) {
  const containerRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActivePopup(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [setActivePopup])

  const togglePopup = (type) => {
    setActivePopup(activePopup === type ? null : type)
  }

  const btnSize = isMobile ? 'w-9 h-9' : 'w-12 h-12'

  return (
    <div className="relative flex gap-2 pointer-events-auto" ref={containerRef}>
      {!isMobile && (
        <IconButton tooltip="Bandeja" onClick={() => togglePopup('mail')} active={activePopup === 'mail'} size={btnSize}>
          <MailIcon />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full notif-dot" />
        </IconButton>
      )}

      <IconButton tooltip="Alertas" onClick={() => togglePopup('bell')} active={activePopup === 'bell'} size={btnSize}>
        <BellIcon />
        <span className="absolute top-1 right-1 w-2 h-2 rounded-full notif-dot" />
      </IconButton>

      <IconButton tooltip="Ajustes" onClick={() => togglePopup('settings')} active={activePopup === 'settings'} size={btnSize}>
        <SettingsIcon />
      </IconButton>

      {activePopup === 'mail' && (
        <HUDPopup title="MENSAJES" color="#00f0ff">
          <PopupItem icon="✉️" text="Nuevo prompt de Nicolás" sub="Hace 2 min" />
          <PopupItem icon="✉️" text="Servidor optimizado" sub="Hace 15 min" />
          <PopupItem icon="✉️" text="Backup completado" sub="Hace 1 hora" />
        </HUDPopup>
      )}

      {activePopup === 'bell' && (
        <HUDPopup title="ALERTAS" color="#ff2bd6">
          <PopupItem icon="⚠️" text="CPU al 85%" sub="Revisar procesos" urgent />
          <PopupItem icon="🔔" text="Nueva actualización v2.1.4" sub="Disponible ahora" />
        </HUDPopup>
      )}

      {activePopup === 'settings' && (
        <HUDPopup title="CONFIGURACIÓN" color="#ffd60a">
          <ToggleItem label="Música de ambiente" isOn={isMusicOn} onToggle={onToggleMusic} />
          <ToggleItem label="Efectos de sonido" isOn={false} onToggle={() => {}} />
          <ToggleItem label="Efecto Parallax" isOn={true} onToggle={() => {}} />
          <ToggleItem label="Modo Alto Rendimiento" isOn={false} onToggle={() => {}} />
          <div className="mt-2 pt-2 border-t border-white/10 text-center">
            <button className="text-[10px] text-white/40 hover:text-white transition-colors uppercase tracking-widest font-pixel">
              Cerrar Sesión
            </button>
          </div>
        </HUDPopup>
      )}
    </div>
  )
}

function HUDPopup({ title, children, color }) {
  return (
    <div
      className="absolute top-full right-0 mt-3 w-64 rounded-[16px] overflow-hidden will-fade animate-pop-in z-50 shadow-2xl pointer-events-auto"
      style={{
        background: 'rgba(10, 4, 40, 0.95)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${color}44`,
        boxShadow: `0 8px 32px rgba(0,0,0,0.8), 0 0 15px ${color}22`,
      }}
    >
      <div className="px-4 py-2 border-b border-white/10 bg-white/5 flex justify-between items-center">
        <span className="font-pixel text-[9px] tracking-widest" style={{ color }}>
          ◆ {title} ◆
        </span>
      </div>
      <div className="p-2 space-y-1">{children}</div>
    </div>
  )
}

function PopupItem({ icon, text, sub, urgent }) {
  return (
    <div className="p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-3 group">
      <div className="text-lg">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className={`text-[12px] font-sans font-medium truncate ${urgent ? 'text-magenta-neon' : 'text-white'}`}>
          {text}
        </div>
        <div className="text-[10px] text-white/40 font-sans">{sub}</div>
      </div>
    </div>
  )
}

function ToggleItem({ label, isOn, onToggle }) {
  return (
    <div
      className="p-2 flex items-center justify-between group cursor-pointer hover:bg-white/5 rounded-lg transition-colors"
      onClick={onToggle}
    >
      <span className="text-[12px] text-white/80 font-sans">{label}</span>
      <div className={`w-8 h-4 rounded-full relative transition-colors ${isOn ? 'bg-cyan-neon/40' : 'bg-white/10'}`}>
        <div
          className={`absolute top-0.5 w-3 h-3 rounded-full transition-all ${
            isOn ? 'right-0.5 bg-cyan-neon shadow-[0_0_6px_#00f0ff]' : 'left-0.5 bg-white/40'
          }`}
        />
      </div>
    </div>
  )
}

function IconButton({ children, onClick, active, size = 'w-12 h-12' }) {
  return (
    <button
      onClick={onClick}
      className={`relative pixel-border rounded-sm ${size} flex items-center justify-center transition-all ${
        active ? 'bg-white/10 scale-95 border-white' : 'hover-lift hover:bg-white/5'
      }`}
    >
      {children}
    </button>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-5 h-5 pixelated text-cyan-neon">
      <rect x="2" y="4" width="12" height="9" fill="none" stroke="currentColor" strokeWidth="1" />
      <polyline points="2,4 8,9 14,4" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
function BellIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-5 h-5 pixelated text-cyan-neon">
      <path
        d="M8 2 a4 4 0 0 1 4 4 v3 l1 2 H3 l1-2 V6 a4 4 0 0 1 4-4 z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <rect x="7" y="12" width="2" height="2" fill="currentColor" />
    </svg>
  )
}
function SettingsIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-5 h-5 pixelated text-cyan-neon">
      <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="7" y="2" width="2" height="3" fill="currentColor" />
      <rect x="7" y="11" width="2" height="3" fill="currentColor" />
      <rect x="2" y="7" width="3" height="2" fill="currentColor" />
      <rect x="11" y="7" width="3" height="2" fill="currentColor" />
      <rect x="4" y="4" width="2" height="2" fill="currentColor" transform="rotate(45 5 5)" />
      <rect x="10" y="10" width="2" height="2" fill="currentColor" transform="rotate(45 11 11)" />
      <rect x="10" y="4" width="2" height="2" fill="currentColor" transform="rotate(45 11 5)" />
      <rect x="4" y="10" width="2" height="2" fill="currentColor" transform="rotate(45 5 11)" />
    </svg>
  )
}
function VolumeOnIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-5 h-5 fill-current">
      <path d="M5 6v4h2l3 3V3L7 6H5zm7 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
    </svg>
  )
}
function VolumeOffIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-5 h-5 fill-current">
      <path d="M4.34 2.93L2.93 4.34 5.59 7H3v2h2.59l3.41 3.41V9.41l2.25 2.25c-.35.21-.72.39-1.11.51v1.03c.66-.15 1.28-.43 1.83-.81l1.1 1.1 1.41-1.41L4.34 2.93zM9 3.41L7.14 5.27l1.86 1.86V3.41z" />
    </svg>
  )
}
