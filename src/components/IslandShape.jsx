import React from 'react'

/**
 * IslandShape — reusable pixel-art floating island base.
 * Sizes: 'lg' (center) or 'md' (surrounding)
 */
export default function IslandShape({ size = 'md', accent = '#00f0ff', children, className = '' }) {
  if (size === 'lg') return <BigIsland accent={accent} className={className}>{children}</BigIsland>
  return <SmallIsland accent={accent} className={className}>{children}</SmallIsland>
}

function BigIsland({ accent, children, className }) {
  return (
    <div className={`relative ${className}`} style={{ width: 520, height: 360 }}>
      <svg
        viewBox="0 0 260 180"
        width="520"
        height="360"
        className="absolute inset-0 pixelated"
      >
        <defs>
          <linearGradient id="grassBig" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.95" />
            <stop offset="100%" stopColor="#2c1a6a" />
          </linearGradient>
          <linearGradient id="rockBig" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a0d44" />
            <stop offset="100%" stopColor="#06021a" />
          </linearGradient>
        </defs>
        {/* Grass top */}
        <rect x="20" y="40" width="220" height="14" fill="url(#grassBig)" />
        <rect x="14" y="54" width="232" height="6" fill={accent} opacity="0.35" />
        {/* Rocky body */}
        <rect x="14" y="60" width="232" height="22" fill="url(#rockBig)" />
        <rect x="22" y="82" width="216" height="20" fill="#160a3a" />
        <rect x="32" y="102" width="196" height="18" fill="#100630" />
        <rect x="48" y="120" width="164" height="16" fill="#0a0420" />
        <rect x="68" y="136" width="124" height="14" fill="#06021a" />
        <rect x="92" y="150" width="76" height="12" fill="#04010f" />
        <rect x="118" y="162" width="24" height="10" fill="#020009" />
        {/* Crystal accents underneath */}
        <rect x="40" y="100" width="3" height="6" fill={accent} opacity="0.7" />
        <rect x="220" y="106" width="3" height="6" fill={accent} opacity="0.7" />
        <rect x="100" y="140" width="2" height="4" fill="#ff2bd6" opacity="0.85" />
        <rect x="160" y="148" width="2" height="4" fill="#ffd60a" opacity="0.85" />
        {/* Top edge highlights */}
        <rect x="20" y="40" width="220" height="2" fill="#ffffff" opacity="0.35" />
      </svg>
      <div className="absolute inset-0">{children}</div>
    </div>
  )
}

function SmallIsland({ accent, children, className }) {
  const safeId = `grassSm-${accent.replace('#', '')}`
  return (
    <div className={`relative ${className}`} style={{ width: 360, height: 240 }}>
      <svg
        viewBox="0 0 180 120"
        width="360"
        height="240"
        className="absolute inset-0 pixelated"
      >
        <defs>
          <linearGradient id={safeId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.95" />
            <stop offset="100%" stopColor="#2c1a6a" />
          </linearGradient>
        </defs>
        {/* Grass */}
        <rect x="12" y="24" width="156" height="10" fill={`url(#${safeId})`} />
        <rect x="8" y="34" width="164" height="4" fill={accent} opacity="0.35" />
        {/* Rocky body */}
        <rect x="8" y="38" width="164" height="14" fill="#1a0d44" />
        <rect x="14" y="52" width="152" height="14" fill="#160a3a" />
        <rect x="22" y="66" width="136" height="14" fill="#100630" />
        <rect x="34" y="80" width="112" height="12" fill="#0a0420" />
        <rect x="50" y="92" width="80" height="12" fill="#06021a" />
        <rect x="70" y="104" width="40" height="10" fill="#04010f" />
        <rect x="84" y="114" width="12" height="6" fill="#020009" />
        {/* Crystals */}
        <rect x="22" y="68" width="2" height="4" fill={accent} opacity="0.7" />
        <rect x="156" y="70" width="2" height="4" fill={accent} opacity="0.7" />
        <rect x="78" y="100" width="2" height="3" fill="#ffd60a" opacity="0.7" />
        {/* Top highlight */}
        <rect x="12" y="24" width="156" height="1.5" fill="#ffffff" opacity="0.35" />
      </svg>
      <div className="absolute inset-0">{children}</div>
    </div>
  )
}
