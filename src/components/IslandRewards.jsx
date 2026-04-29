import React from 'react'
import IslandShape from './IslandShape.jsx'
import IslandLabel from './IslandLabel.jsx'

export default function IslandRewards() {
  return (
    <div
      className="absolute z-10 right-[12%] bottom-[18%] will-fade animate-fade-up"
      style={{ animationDelay: '1.25s' }}
    >
      <div className="island gold animate-float-slow" style={{ animationDelay: '1.2s' }}>
        <IslandShape size="md" accent="#ffd60a">
          {/* Big chest */}
          <div className="absolute left-[70px] top-[30px]">
            <Chest />
          </div>

          {/* Achievements panel */}
          <div
            className="absolute right-[20px] top-[28px] w-[132px] holo scanlines rounded-sm p-2.5"
            style={{ borderColor: 'rgba(255,184,0,0.65)' }}
          >
            <div className="font-pixel text-[8px] text-gold-neon mb-1.5">MÓDULOS</div>
            <div className="flex gap-1.5 mb-1.5">
              <Medal color="#ffd60a" />
              <Medal color="#4dffb8" />
              <Medal color="#ff2bd6" locked />
            </div>
            <div className="font-retro text-[13px] text-white/85 leading-tight">
              <span className="text-gold-neon">12</span>{' '}
              <span className="text-white/60">habilitados</span>
            </div>
          </div>

          {/* Floating gems */}
          <div className="absolute left-[40px] top-[20px] animate-float" style={{ animationDelay: '0.2s' }}>
            <FloatGem color="#ff2bd6" />
          </div>
          <div className="absolute left-[170px] top-[24px] animate-float-fast" style={{ animationDelay: '0.6s' }}>
            <FloatGem color="#00f0ff" />
          </div>
          <div className="absolute left-[120px] top-[12px] animate-float-slow" style={{ animationDelay: '0.4s' }}>
            <FloatGem color="#4dffb8" small />
          </div>

          {/* Coin burst sparkles */}
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 bg-gold-neon animate-twinkle"
              style={{
                top: `${50 + (i * 23) % 70}px`,
                left: `${80 + (i * 31) % 180}px`,
                boxShadow: '0 0 6px #ffd60a',
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </IslandShape>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-3">
          <IslandLabel title="UTILIDADES" color="#ffd60a" />
        </div>
      </div>
    </div>
  )
}

function Chest() {
  return (
    <svg viewBox="0 0 64 60" width="80" height="76" className="pixelated animate-bob">
      {/* Light beams from chest */}
      <g opacity="0.55">
        <polygon points="32,0 16,30 48,30" fill="#ffd60a" opacity="0.35">
          <animate attributeName="opacity" values="0.2;0.55;0.2" dur="2.4s" repeatCount="indefinite" />
        </polygon>
        <polygon points="32,0 22,30 42,30" fill="#fff7c2" opacity="0.5" />
      </g>
      {/* Chest body */}
      <rect x="8" y="28" width="48" height="28" fill="#7a3e02" />
      <rect x="8" y="28" width="48" height="3" fill="#5a2d01" />
      <rect x="8" y="52" width="48" height="4" fill="#4a1d00" />
      {/* Lid */}
      <rect x="8" y="20" width="48" height="10" fill="#a85a08" />
      <rect x="8" y="20" width="48" height="2" fill="#cc7d12" />
      {/* Bands */}
      <rect x="8" y="30" width="48" height="2" fill="#ffd60a" />
      <rect x="8" y="42" width="48" height="2" fill="#ffd60a" />
      {/* Lock */}
      <rect x="28" y="28" width="8" height="10" fill="#ffd60a" />
      <rect x="30" y="30" width="4" height="6" fill="#7a3e02" />
      {/* Gold inside */}
      <rect x="14" y="22" width="36" height="4" fill="#ffd60a" />
      <rect x="16" y="20" width="32" height="4" fill="#fff7c2" opacity="0.8" />
      {/* Coins poking out */}
      <circle cx="20" cy="22" r="3" fill="#ffd60a" stroke="#a85a08" strokeWidth="1" />
      <circle cx="44" cy="22" r="3" fill="#ffd60a" stroke="#a85a08" strokeWidth="1" />
      <circle cx="32" cy="20" r="3" fill="#fff7c2" stroke="#a85a08" strokeWidth="1" />
    </svg>
  )
}

function Medal({ color = '#ffd60a', locked = false }) {
  return (
    <div className="relative w-7 h-9">
      {!locked && (
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${color}55 0%, transparent 70%)`,
          }}
        />
      )}
      <svg viewBox="0 0 16 24" className="w-full h-full pixelated">
        {/* Ribbon */}
        <polygon points="4,0 12,0 10,8 6,8" fill={locked ? '#2c1a6a' : '#ff2bd6'} opacity={locked ? 0.6 : 1} />
        {/* Coin */}
        <circle cx="8" cy="14" r="6" fill={locked ? '#1a0d44' : color} stroke={locked ? '#2c1a6a' : '#7a3e02'} strokeWidth="1" />
        {!locked && <text x="8" y="17" textAnchor="middle" fontSize="6" fill="#7a3e02" fontFamily="Press Start 2P">★</text>}
        {locked && <rect x="6" y="12" width="4" height="4" fill="#0a0420" />}
      </svg>
    </div>
  )
}

function FloatGem({ color = '#ff2bd6', small = false }) {
  const s = small ? 14 : 20
  return (
    <svg viewBox="0 0 12 14" width={s} height={s + 2} className="pixelated">
      <polygon points="2,4 6,0 10,4 8,12 4,12" fill={color} stroke="#0a0420" strokeWidth="0.6" />
      <polygon points="4,4 6,1 8,4 6,12" fill="#ffffff" opacity="0.4" />
      <rect x="3" y="3" width="2" height="1" fill="#ffffff" opacity="0.7" />
    </svg>
  )
}
