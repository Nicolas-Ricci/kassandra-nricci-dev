import React from 'react'

/**
 * Kassandra — pixel-art protagonist drawn as inline SVG.
 * Layered groups so each part can animate independently:
 * - hair sway
 * - body breathing
 * - eyes blinking
 */
export default function Kassandra() {
  return (
    <div className="relative w-[160px] h-[220px] pixelated">
      <svg
        viewBox="0 0 32 44"
        width="160"
        height="220"
        className="absolute inset-0 pixelated"
      >
        {/* SHADOW */}
        <ellipse cx="16" cy="42" rx="9" ry="1.4" fill="#000" opacity="0.45" />

        {/* === LEGS === */}
        <g>
          {/* Left leg */}
          <rect x="11" y="32" width="3" height="8" fill="#1a0d44" />
          <rect x="11" y="40" width="4" height="2" fill="#0a0420" />
          <rect x="11" y="33" width="1" height="6" fill="#2c1a6a" />
          {/* Right leg */}
          <rect x="18" y="32" width="3" height="8" fill="#1a0d44" />
          <rect x="17" y="40" width="4" height="2" fill="#0a0420" />
          <rect x="20" y="33" width="1" height="6" fill="#2c1a6a" />
          {/* Boot accents */}
          <rect x="11" y="40" width="4" height="1" fill="#00f0ff" />
          <rect x="17" y="40" width="4" height="1" fill="#00f0ff" />
        </g>

        {/* === BODY (animated breathing) === */}
        <g style={{ transformOrigin: '16px 30px', animation: 'breathe 3.6s ease-in-out infinite' }}>
          {/* Torso suit */}
          <rect x="10" y="20" width="12" height="13" fill="#150a3a" />
          {/* Suit highlights */}
          <rect x="10" y="20" width="12" height="1" fill="#2c1a6a" />
          <rect x="10" y="20" width="1" height="13" fill="#2c1a6a" />
          {/* Belt */}
          <rect x="10" y="29" width="12" height="2" fill="#0a0420" />
          <rect x="14" y="29" width="4" height="2" fill="#ffd60a" />
          {/* Chest neon line */}
          <rect x="13" y="22" width="6" height="1" fill="#00f0ff" />
          <rect x="14" y="23" width="4" height="1" fill="#ff2bd6" />
          {/* Glow core */}
          <rect x="15" y="25" width="2" height="2" fill="#00f0ff">
            <animate
              attributeName="fill"
              values="#00f0ff;#b537f2;#00f0ff"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </rect>
          {/* Shoulder pads */}
          <rect x="9" y="20" width="2" height="3" fill="#00aaff" />
          <rect x="21" y="20" width="2" height="3" fill="#00aaff" />
          <rect x="9" y="20" width="2" height="1" fill="#7df9ff" />
          <rect x="21" y="20" width="2" height="1" fill="#7df9ff" />

          {/* Arms */}
          <rect x="8" y="22" width="2" height="8" fill="#1a0d44" />
          <rect x="22" y="22" width="2" height="8" fill="#1a0d44" />
          {/* Glove cyan */}
          <rect x="8" y="29" width="2" height="2" fill="#00f0ff" />
          <rect x="22" y="29" width="2" height="2" fill="#00f0ff" />
          {/* Hand */}
          <rect x="8" y="30" width="2" height="2" fill="#f5cfa8" />
          <rect x="22" y="30" width="2" height="2" fill="#f5cfa8" />
        </g>

        {/* === NECK === */}
        <rect x="14" y="18" width="4" height="2" fill="#f5cfa8" />
        <rect x="14" y="19" width="4" height="1" fill="#d9a87f" opacity="0.7" />

        {/* === HEAD === */}
        <g style={{ transformOrigin: '16px 14px', animation: 'breathe 3.6s ease-in-out infinite' }}>
          {/* Face */}
          <rect x="11" y="8" width="10" height="10" fill="#f5cfa8" />
          <rect x="11" y="17" width="10" height="1" fill="#d9a87f" />
          {/* Cheeks */}
          <rect x="12" y="14" width="1" height="1" fill="#ff8aa8" opacity="0.6" />
          <rect x="19" y="14" width="1" height="1" fill="#ff8aa8" opacity="0.6" />
          {/* Mouth */}
          <rect x="14" y="15" width="4" height="1" fill="#a04060" />
          <rect x="15" y="16" width="2" height="1" fill="#ff7ba0" />

          {/* Eyes (animated blink) */}
          <g style={{ transformOrigin: '16px 12px', animation: 'blink 5s steps(1, end) infinite' }}>
            <rect x="13" y="11" width="2" height="2" fill="#0a0a30" />
            <rect x="17" y="11" width="2" height="2" fill="#0a0a30" />
            {/* Iris cyan glint */}
            <rect x="13" y="11" width="1" height="1" fill="#00f0ff" />
            <rect x="17" y="11" width="1" height="1" fill="#00f0ff" />
            {/* Eye highlight */}
            <rect x="14" y="12" width="1" height="1" fill="#ffffff" />
            <rect x="18" y="12" width="1" height="1" fill="#ffffff" />
          </g>

          {/* Earrings */}
          <rect x="10" y="14" width="1" height="1" fill="#ff2bd6" />
          <rect x="21" y="14" width="1" height="1" fill="#ff2bd6" />

          {/* === HAIR === (multiple shades blue, with subtle sway) */}
          <g style={{ transformOrigin: '16px 9px', animation: 'wobble 6s ease-in-out infinite' }}>
            {/* Top */}
            <rect x="10" y="5" width="12" height="3" fill="#00aaff" />
            <rect x="9" y="6" width="14" height="2" fill="#00aaff" />
            <rect x="10" y="4" width="10" height="1" fill="#7df9ff" />
            <rect x="11" y="3" width="8" height="1" fill="#7df9ff" />
            {/* Side bangs */}
            <rect x="9" y="8" width="2" height="6" fill="#0088dd" />
            <rect x="21" y="8" width="2" height="6" fill="#0088dd" />
            <rect x="8" y="9" width="1" height="6" fill="#0066bb" />
            <rect x="23" y="9" width="1" height="6" fill="#0066bb" />
            {/* Bangs over forehead */}
            <rect x="11" y="8" width="3" height="2" fill="#00aaff" />
            <rect x="18" y="8" width="3" height="2" fill="#00aaff" />
            {/* Long flowing hair down sides */}
            <rect x="8" y="15" width="1" height="6" fill="#0066bb" />
            <rect x="23" y="15" width="1" height="6" fill="#0066bb" />
            <rect x="8" y="20" width="1" height="3" fill="#005599" />
            <rect x="23" y="20" width="1" height="3" fill="#005599" />
            {/* Highlights */}
            <rect x="13" y="4" width="1" height="2" fill="#ffffff" opacity="0.4" />
            <rect x="17" y="4" width="1" height="2" fill="#ffffff" opacity="0.4" />
          </g>

          {/* Tech headset / earpiece */}
          <rect x="9" y="10" width="1" height="2" fill="#00f0ff" />
          <rect x="22" y="10" width="1" height="2" fill="#00f0ff" />
          <rect x="9" y="10" width="1" height="1" fill="#ffffff" />

          {/* HUD over eye */}
          <rect x="12" y="10" width="3" height="1" fill="#00f0ff" opacity="0.7" />
        </g>
      </svg>

      {/* Floating glow at feet */}
      <span
        className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[110px] h-3 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, rgba(0,240,255,0.55) 0%, transparent 70%)',
          filter: 'blur(2px)',
        }}
      />
    </div>
  )
}
