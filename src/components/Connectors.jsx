import React from 'react'

/**
 * Connectors — dashed neon lines between the central hub and the four
 * surrounding islands. Drawn as a single full-screen SVG behind islands.
 */
export default function Connectors() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
      preserveAspectRatio="none"
      viewBox="0 0 1600 900"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.0" />
          <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#b537f2" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Center: ~ (800, 460). Islands roughly at corners */}
      {/* To Missions (top-left) */}
      <Line d="M 700 460 Q 540 380 320 360" />
      {/* To Automation (top-right) */}
      <Line d="M 900 460 Q 1080 380 1280 360" />
      {/* To Data Hub (bottom-left) */}
      <Line d="M 720 540 Q 580 660 360 700" />
      {/* To Rewards (bottom-right) */}
      <Line d="M 880 540 Q 1060 660 1260 700" />
    </svg>
  )
}

function Line({ d }) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        strokeDasharray="8 6"
        opacity="0.55"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-28"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </path>
      {/* Glow underlay */}
      <path d={d} fill="none" stroke="#00f0ff" strokeWidth="6" opacity="0.08" />
    </g>
  )
}
