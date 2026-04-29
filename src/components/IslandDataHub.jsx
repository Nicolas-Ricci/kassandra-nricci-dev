import React from 'react'
import IslandShape from './IslandShape.jsx'
import IslandLabel from './IslandLabel.jsx'

export default function IslandDataHub() {
  return (
    <div
      className="absolute z-10 left-[12%] bottom-[18%] will-fade animate-fade-up"
      style={{ animationDelay: '1.15s' }}
    >
      <div className="island magenta animate-float-fast" style={{ animationDelay: '0.3s' }}>
        <IslandShape size="md" accent="#ff2bd6">
          {/* Holographic globe */}
          <div className="absolute left-[40px] top-[28px]">
            <Globe />
          </div>

          {/* Side analytics panel */}
          <div
            className="absolute right-[20px] top-[24px] w-[154px] holo scanlines rounded-sm p-2.5"
            style={{ borderColor: 'rgba(255,43,214,0.6)' }}
          >
            <div className="font-pixel text-[8px] text-magenta-neon mb-1">DATOS LIVE</div>
            {/* Mini line chart */}
            <svg viewBox="0 0 100 36" className="w-full h-10 pixelated">
              <polyline
                points="0,28 10,22 20,26 30,16 40,18 50,8 60,12 70,4 80,10 90,2 100,6"
                fill="none"
                stroke="#ff2bd6"
                strokeWidth="1.5"
                style={{ filter: 'drop-shadow(0 0 4px #ff2bd6)' }}
              />
              <polyline
                points="0,32 10,30 20,28 30,26 40,24 50,22 60,20 70,18 80,16 90,14 100,12"
                fill="none"
                stroke="#00f0ff"
                strokeWidth="1"
                opacity="0.7"
              />
            </svg>
            <div className="mt-1.5 grid grid-cols-3 gap-1 font-retro text-[12px] text-center">
              <Stat label="VIS" value="12k" color="#00f0ff" />
              <Stat label="CONV" value="3.4%" color="#4dffb8" />
              <Stat label="ROI" value="+18" color="#ffd60a" />
            </div>
          </div>

          {/* Floating data motes */}
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-magenta-neon animate-twinkle"
              style={{
                top: `${30 + (i * 13) % 90}px`,
                left: `${50 + (i * 41) % 220}px`,
                boxShadow: '0 0 6px #ff2bd6',
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </IslandShape>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-3">
          <IslandLabel title="DATA HUB" color="#ff2bd6" />
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, color }) {
  return (
    <div className="flex flex-col leading-none">
      <span className="text-white/60 text-[10px]">{label}</span>
      <span className="font-pixel text-[9px]" style={{ color, textShadow: `0 0 6px ${color}` }}>
        {value}
      </span>
    </div>
  )
}

function Globe() {
  return (
    <div className="relative w-[80px] h-[80px]">
      {/* Glow base */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0,240,255,0.45) 0%, rgba(255,43,214,0.25) 60%, transparent 80%)',
          filter: 'blur(2px)',
        }}
      />
      <svg viewBox="0 0 80 80" className="absolute inset-0 pixelated animate-wobble">
        {/* Wireframe sphere */}
        <circle cx="40" cy="40" r="28" fill="none" stroke="#00f0ff" strokeWidth="1.4" opacity="0.85" />
        <ellipse cx="40" cy="40" rx="28" ry="10" fill="none" stroke="#00f0ff" strokeWidth="1" opacity="0.6" />
        <ellipse cx="40" cy="40" rx="28" ry="20" fill="none" stroke="#00f0ff" strokeWidth="0.8" opacity="0.5" />
        <ellipse cx="40" cy="40" rx="10" ry="28" fill="none" stroke="#ff2bd6" strokeWidth="1" opacity="0.55" />
        <ellipse cx="40" cy="40" rx="20" ry="28" fill="none" stroke="#ff2bd6" strokeWidth="0.8" opacity="0.45" />
        {/* Pixel continents */}
        <g fill="#4dffb8" opacity="0.9">
          <rect x="28" y="32" width="6" height="4" />
          <rect x="34" y="36" width="4" height="3" />
          <rect x="44" y="30" width="4" height="3" />
          <rect x="46" y="42" width="6" height="3" />
          <rect x="36" y="46" width="4" height="3" />
        </g>
        {/* Equator dots */}
        <g fill="#ffffff">
          <circle cx="14" cy="40" r="1" />
          <circle cx="66" cy="40" r="1" />
        </g>
      </svg>
      {/* Orbiting satellite */}
      <span
        className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-gold-neon"
        style={{
          boxShadow: '0 0 8px #ffd60a',
          animation: 'orbit 6s linear infinite',
          transformOrigin: '0 0',
        }}
      />
      <style>{`
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0) translateX(40px) rotate(0); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(40px) rotate(-360deg); }
        }
      `}</style>
    </div>
  )
}
