import React, { useState } from 'react'

const LINKS = [
  { url: 'https://nricci.dev', title: 'Página Principal', desc: 'Portal central y portafolio', icon: '🌐' },
  { url: 'https://blog.nricci.dev', title: 'Blog Personal', desc: 'Notas sobre dev y tech', icon: '✍️' },
  { url: 'https://status.nricci.dev/status/nicolas', title: 'Server Status', desc: 'Estado del servidor en vivo', icon: '📊' },
  { url: 'https://aiprompts.nricci.dev', title: 'AI Prompts (beta)', desc: 'Librería de prompts avanzada', icon: '🧠' },
  { url: 'https://blur.nricci.dev', title: 'Face Blur IA (beta)', desc: 'Privacidad con IA', icon: '👤' },
  { url: 'https://voxa.nricci.dev', title: 'Voxa', desc: 'Grabación local', icon: '🎙️', isNew: true },
]

export default function Sidebar({ isMobile }) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  if (isMobile) {
    return (
      <>
        {/* Hamburger button — top-left, below the TopHUD title area */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="fixed top-[14px] left-4 z-[60] pointer-events-auto flex flex-col justify-center gap-[5px] p-2 rounded-lg"
          style={{
            background: 'rgba(13,5,48,0.85)',
            border: '1px solid rgba(0,240,255,0.35)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 0 12px rgba(0,240,255,0.25)',
          }}
          aria-label="Abrir menú"
        >
          <span className="block w-5 h-[2px] bg-cyan-neon shadow-[0_0_6px_#00f0ff]" />
          <span className="block w-5 h-[2px] bg-cyan-neon shadow-[0_0_6px_#00f0ff]" />
          <span className="block w-5 h-[2px] bg-cyan-neon shadow-[0_0_6px_#00f0ff]" />
        </button>

        {/* Backdrop */}
        {drawerOpen && (
          <div
            className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-sm pointer-events-auto"
            onClick={() => setDrawerOpen(false)}
          />
        )}

        {/* Drawer */}
        <nav
          className="fixed top-0 left-0 h-full z-[70] pointer-events-auto flex flex-col overflow-hidden"
          style={{
            width: drawerOpen ? '280px' : '0px',
            transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
            background: 'linear-gradient(145deg, rgba(26,13,68,0.97) 0%, rgba(10,4,40,0.99) 100%)',
            backdropFilter: 'blur(20px)',
            borderRight: '1px solid rgba(0,240,255,0.2)',
            boxShadow: drawerOpen ? '4px 0 32px rgba(0,0,0,0.8)' : 'none',
          }}
        >
          <div className="w-[280px] flex flex-col h-full">
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between shrink-0">
              <div>
                <h2 className="text-white font-sans font-bold text-lg tracking-tight">nRicci Ecosystem</h2>
                <p className="text-white/40 font-sans text-xs uppercase tracking-widest mt-0.5">Navegación</p>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-white/50 hover:text-white text-2xl leading-none transition-colors"
              >
                ×
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
              {LINKS.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDrawerOpen(false)}
                  className="block p-3 rounded-[16px] transition-all duration-300 hover:bg-white/10 border border-transparent hover:border-white/20"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center text-xl shrink-0">{link.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-sans font-semibold text-[14px] leading-none truncate">{link.title}</h3>
                        {link.isNew && (
                          <span className="px-1.5 py-0.5 rounded-full bg-cyan-neon text-[#0a0420] text-[9px] font-bold animate-pulse-fast shrink-0">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-white/50 font-sans text-[11px] mt-1 truncate">{link.desc}</p>
                    </div>
                    <span className="text-cyan-neon/60 shrink-0">→</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-white/10 shrink-0">
              <p className="text-white/30 font-sans text-[11px] font-medium tracking-widest uppercase">
                nRicci · 2026
              </p>
            </div>
          </div>
        </nav>
      </>
    )
  }

  /* ── Desktop: hover-expand sidebar ── */
  return (
    <nav className="fixed top-1/2 left-4 -translate-y-1/2 z-50 pointer-events-none">
      <div
        className="group pointer-events-auto rounded-[24px] flex flex-col overflow-hidden will-fade animate-slide-right transition-all duration-300 ease-out w-[80px] hover:w-[320px] max-h-[90vh]"
        style={{
          background: 'linear-gradient(145deg, rgba(26,13,68,0.4) 0%, rgba(10,4,40,0.7) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.8)',
          animationDelay: '0.4s',
        }}
      >
        <div className="w-[320px] flex flex-col h-full">
          {/* Header */}
          <div className="p-5 border-b border-white/10 shrink-0 flex items-center h-[76px]">
            <div className="w-10 flex justify-center shrink-0">
              <div className="w-3 h-3 rounded-full bg-cyan-neon shadow-[0_0_8px_#00f0ff]" />
            </div>
            <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-1 whitespace-nowrap">
              <h2 className="text-white font-sans font-bold text-lg tracking-tight">nRicci Ecosystem</h2>
              <p className="text-white/40 font-sans text-xs uppercase tracking-widest mt-0.5">Navegación</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
            {LINKS.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-[16px] transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 border border-transparent hover:border-white/20"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center text-2xl shrink-0">{link.icon}</div>
                  <div className="flex-1 min-w-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-sans font-semibold text-[14px] leading-none truncate">{link.title}</h3>
                      {link.isNew && (
                        <span className="tag-new px-1.5 py-0.5 rounded-full bg-cyan-neon text-[#0a0420] text-[9px] font-bold animate-pulse-fast shrink-0">
                          NEW
                        </span>
                      )}
                      {link.title === 'Voxa' && (
                        <span className="text-gold-neon text-[9px] font-bold uppercase ml-1 opacity-80">(beta)</span>
                      )}
                    </div>
                    <p className="text-white/50 font-sans text-[11px] mt-1.5 truncate">{link.desc}</p>
                  </div>
                  <div className="text-white/20 group-hover:text-cyan-neon transition-colors shrink-0 pr-2 opacity-0 group-hover:opacity-100">
                    →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-white/10 shrink-0 flex items-center h-[76px]">
            <div className="w-10 flex justify-center shrink-0">
              <div className="w-3 h-3 rounded-full bg-cyan-neon shadow-[0_0_8px_#00f0ff]" />
            </div>
            <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-1 whitespace-nowrap">
              <p className="text-white/30 font-sans text-[11px] font-medium tracking-widest uppercase">
                nRicci · 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
