import React, { useMemo } from 'react'

/**
 * Background — layered sky, distant islands, clouds, stars and particles.
 * Built with stacked absolute divs to allow parallax animation.
 */
export default function Background() {
  // Generate twinkle stars positions deterministically
  const stars = useMemo(
    () =>
      Array.from({ length: 70 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() < 0.85 ? 2 : 3,
        delay: Math.random() * 3,
        duration: 1.6 + Math.random() * 2.6,
        color:
          Math.random() < 0.7
            ? '#ffffff'
            : Math.random() < 0.5
            ? '#00f0ff'
            : '#b537f2',
      })),
    []
  )

  // Floating particles (rising glow specks)
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 14,
        duration: 12 + Math.random() * 10,
        size: 2 + Math.floor(Math.random() * 3),
        color:
          Math.random() < 0.5
            ? '#00f0ff'
            : Math.random() < 0.5
            ? '#b537f2'
            : '#ffd60a',
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, #2a1370 0%, #15094a 40%, #07021c 80%, #02000d 100%)',
        }}
      />

      {/* Aurora wash — subtle moving color */}
      <div
        className="absolute inset-0 opacity-50 animate-fade-in will-fade"
        style={{
          background:
            'radial-gradient(circle at 20% 40%, rgba(0,240,255,0.18) 0%, transparent 40%), radial-gradient(circle at 80% 60%, rgba(181,55,242,0.22) 0%, transparent 45%)',
          mixBlendMode: 'screen',
          animationDelay: '0.1s',
          animationDuration: '1.4s',
        }}
      />

      {/* Stars layer */}
      <div className="absolute inset-0">
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              background: s.color,
              boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
              animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Distant pixel city silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-[28%] opacity-40">
        <svg
          viewBox="0 0 1600 240"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="cityGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a1d8a" />
              <stop offset="100%" stopColor="#0a0428" />
            </linearGradient>
          </defs>
          <g fill="url(#cityGrad)">
            {/* Pixel skyline blocks */}
            {Array.from({ length: 40 }).map((_, i) => {
              const x = i * 40
              const h = 60 + ((i * 37) % 120)
              return <rect key={i} x={x} y={240 - h} width="36" height={h} />
            })}
          </g>
          {/* Window lights */}
          <g fill="#00f0ff" opacity="0.7">
            {Array.from({ length: 80 }).map((_, i) => {
              const x = (i * 23) % 1600
              const y = 130 + ((i * 17) % 90)
              return <rect key={i} x={x} y={y} width="2" height="2" />
            })}
          </g>
        </svg>
      </div>

      {/* Distant floating mini-islands */}
      <DistantIsland top="22%" left="10%" delay="0s" scale={0.7} hue="cyan" />
      <DistantIsland top="18%" left="78%" delay="1.5s" scale={0.6} hue="violet" />
      <DistantIsland top="62%" left="88%" delay="2.2s" scale={0.55} hue="cyan" />
      <DistantIsland top="55%" left="4%" delay="0.8s" scale={0.65} hue="magenta" />

      {/* Clouds — multiple layers, parallax */}
      <Cloud top="14%" delay="0s" duration="80s" scale={1.1} opacity={0.35} />
      <Cloud top="32%" delay="20s" duration="110s" scale={0.8} opacity={0.25} />
      <Cloud top="58%" delay="40s" duration="95s" scale={1.4} opacity={0.18} />
      <Cloud top="72%" delay="10s" duration="130s" scale={0.9} opacity={0.22} />

      {/* Rising particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              bottom: '-4%',
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
              animation: `particle-rise ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid horizon line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] opacity-30 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(0,240,255,0.08) 60%, rgba(0,240,255,0.0) 100%)',
        }}
      />
    </div>
  )
}

function Cloud({ top, delay, duration, scale = 1, opacity = 0.3 }) {
  return (
    <div
      className="absolute"
      style={{
        top,
        left: 0,
        width: '100%',
        animation: `cloud-drift ${duration} linear ${delay} infinite`,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <svg width="220" height="60" viewBox="0 0 220 60" className="pixelated">
        {/* Pixel-art chunky cloud */}
        <g fill="#cfd8ff">
          <rect x="20" y="20" width="180" height="20" />
          <rect x="30" y="10" width="150" height="10" />
          <rect x="60" y="0" width="90" height="10" />
          <rect x="10" y="30" width="200" height="10" />
        </g>
        <g fill="#9aa3e8" opacity="0.6">
          <rect x="20" y="40" width="180" height="6" />
        </g>
      </svg>
    </div>
  )
}

function DistantIsland({ top, left, delay, scale = 0.7, hue = 'cyan' }) {
  const grass =
    hue === 'violet' ? '#b537f2' : hue === 'magenta' ? '#ff2bd6' : '#00f0ff'
  return (
    <div
      className="absolute opacity-50 animate-float-slow"
      style={{
        top,
        left,
        transform: `scale(${scale})`,
        animationDelay: delay,
        filter: 'drop-shadow(0 0 14px rgba(0,240,255,0.25))',
      }}
    >
      <svg width="180" height="100" viewBox="0 0 180 100" className="pixelated">
        <g>
          {/* Grass top */}
          <rect x="20" y="20" width="140" height="10" fill={grass} opacity="0.85" />
          <rect x="10" y="30" width="160" height="8" fill="#2c1a6a" />
          {/* Body */}
          <rect x="20" y="38" width="140" height="14" fill="#1a0d44" />
          <rect x="30" y="52" width="120" height="14" fill="#160a3a" />
          <rect x="40" y="66" width="100" height="12" fill="#100630" />
          <rect x="58" y="78" width="64" height="10" fill="#0a0420" />
          <rect x="78" y="88" width="24" height="8" fill="#06021a" />
        </g>
      </svg>
    </div>
  )
}
