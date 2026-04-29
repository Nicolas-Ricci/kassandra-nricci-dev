import React from 'react'

/**
 * Drone — small hovering robotic companion.
 * variant: 'pet' (cute) | 'worker' (boxy) | 'orb' (sphere)
 */
export default function Drone({ variant = 'pet', size = 32, color = '#00f0ff', className = '', style }) {
  const W = size
  return (
    <div className={`pixelated ${className}`} style={{ width: W, height: W, ...style }}>
      {variant === 'pet' && <PetDrone color={color} />}
      {variant === 'worker' && <WorkerDrone color={color} />}
      {variant === 'orb' && <OrbDrone color={color} />}
    </div>
  )
}

function PetDrone({ color }) {
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full pixelated">
      {/* propeller above */}
      <rect x="2" y="1" width="12" height="1" fill={color} opacity="0.7">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="0.4s" repeatCount="indefinite" />
      </rect>
      <rect x="7" y="2" width="2" height="1" fill={color} />
      {/* Body */}
      <rect x="3" y="4" width="10" height="7" fill="#1a0d44" />
      <rect x="3" y="4" width="10" height="1" fill="#2c1a6a" />
      <rect x="3" y="4" width="1" height="7" fill="#2c1a6a" />
      {/* Visor */}
      <rect x="4" y="6" width="8" height="3" fill={color} opacity="0.85">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="5" y="7" width="2" height="1" fill="#ffffff" />
      {/* Antenna */}
      <rect x="7" y="0" width="2" height="1" fill="#ffd60a" />
      {/* Bottom thrust */}
      <rect x="5" y="11" width="6" height="1" fill={color} />
      <rect x="6" y="12" width="4" height="1" fill={color} opacity="0.5" />
      <rect x="7" y="13" width="2" height="2" fill={color} opacity="0.25">
        <animate attributeName="opacity" values="0.05;0.5;0.05" dur="0.6s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}

function WorkerDrone({ color }) {
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full pixelated">
      <rect x="2" y="3" width="12" height="9" fill="#150a3a" />
      <rect x="2" y="3" width="12" height="1" fill="#2c1a6a" />
      <rect x="3" y="5" width="10" height="3" fill={color} opacity="0.7" />
      <rect x="4" y="9" width="3" height="1" fill="#ff2bd6" />
      <rect x="9" y="9" width="3" height="1" fill="#4dffb8" />
      <rect x="1" y="6" width="1" height="3" fill={color} />
      <rect x="14" y="6" width="1" height="3" fill={color} />
      <rect x="6" y="12" width="4" height="2" fill="#06021a" />
      <rect x="6" y="14" width="1" height="1" fill={color} />
      <rect x="9" y="14" width="1" height="1" fill={color} />
    </svg>
  )
}

function OrbDrone({ color }) {
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full pixelated">
      <circle cx="8" cy="8" r="5" fill="#1a0d44" />
      <circle cx="8" cy="8" r="5" fill="none" stroke={color} strokeWidth="1" />
      <circle cx="8" cy="8" r="2" fill={color}>
        <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite" />
      </circle>
      <rect x="2" y="7" width="2" height="2" fill={color} />
      <rect x="12" y="7" width="2" height="2" fill={color} />
    </svg>
  )
}
