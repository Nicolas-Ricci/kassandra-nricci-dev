import React, { useState } from 'react'

export default function PlayButton({ onClick, isMobile }) {
  const [pressed, setPressed] = useState(false)

  return (
    <div
      className={`absolute z-30 will-fade animate-fade-up ${
        isMobile
          ? 'bottom-8 left-0 right-0 flex justify-center pointer-events-none'
          : 'bottom-6 right-6'
      }`}
      style={{ animationDelay: '1.55s' }}
    >
      {/* ... rest remains same but wrapped correctly ... */}
      <div className={isMobile ? 'relative pointer-events-auto' : ''}>
      {/* Pulse halo */}
      <div className="absolute inset-0 -m-3 rounded-md pointer-events-none">
        <div
          className="absolute inset-0 rounded-md animate-pulse-glow"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,184,0,0.45) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </div>

      <button
        className="play-btn relative rounded-md text-center group pointer-events-auto"
        style={{ minWidth: isMobile ? 200 : 260, padding: isMobile ? '14px 28px' : '20px 40px' }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        onClick={onClick}
      >
        {/* Pixel corner studs */}
        <span className="absolute top-1 left-1 w-2 h-2 bg-white/80" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-white/80" />
        <span className="absolute bottom-1 left-1 w-2 h-2 bg-[#7a3e02]" />
        <span className="absolute bottom-1 right-1 w-2 h-2 bg-[#7a3e02]" />

        {/* CHAT icon + label */}
        <span className="flex items-center justify-center gap-3">
          <svg viewBox="0 0 16 16" className="w-6 h-6 pixelated">
            <path d="M2,2 L14,2 L14,10 L8,10 L4,14 L4,10 L2,10 Z" fill="#4a1d00" />
            <rect x="4" y="4" width="8" height="1" fill="#fff" opacity="0.3" />
            <rect x="4" y="6" width="6" height="1" fill="#fff" opacity="0.3" />
          </svg>
          <span
            className="font-pixel tracking-widest text-[#4a1d00]"
            style={{ fontSize: isMobile ? '18px' : '24px' }}
          >
            ABRIR CHAT
          </span>
        </span>
        <div className="font-pixel text-[10px] mt-1 tracking-widest text-[#4a1d00]/90">
          Kassandra 2.1
        </div>

        {/* Inner shine */}
        <span
          className="absolute inset-x-3 top-1.5 h-2 rounded-sm pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s linear infinite',
          }}
        />
      </button>
      </div>
    </div>
  )
}
