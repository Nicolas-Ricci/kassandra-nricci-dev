import React from 'react'
import IslandShape from './IslandShape.jsx'
import IslandLabel from './IslandLabel.jsx'
import Drone from './Drone.jsx'

export default function IslandAutomation() {
  return (
    <div
      className="absolute z-10 right-[10%] top-[24%] will-fade animate-fade-up"
      style={{ animationDelay: '1.05s' }}
    >
      <div className="island animate-float" style={{ animationDelay: '0.9s' }}>
        <IslandShape size="md" accent="#00f0ff">
          {/* Robotic arm left */}
          <div className="absolute left-[28px] top-[40px]">
            <RoboticArm />
          </div>

          {/* Machines + monitor */}
          <div className="absolute right-[24px] top-[24px] w-[165px] holo scanlines rounded-sm p-2.5">
            <div className="font-pixel text-[8px] text-cyan-neon text-center mb-1.5">
              ⚙ FLUJO ACTIVO
            </div>
            {/* Flow nodes */}
            <div className="flex items-center justify-between">
              <FlowNode color="#4dffb8" />
              <FlowLine />
              <FlowNode color="#00f0ff" pulsing />
              <FlowLine />
              <FlowNode color="#ff2bd6" />
            </div>
            <div className="mt-2 font-retro text-[12px] text-mint flex justify-between">
              <span>BOTS</span>
              <span className="text-white">4 / 4 ON</span>
            </div>
            <div className="mt-1 font-retro text-[12px] text-cyan-soft flex justify-between">
              <span>EFICIENCIA</span>
              <span className="text-cyan-neon font-pixel text-[10px]">92%</span>
            </div>
          </div>

          {/* Worker drone */}
          <div className="absolute left-[150px] top-[30px] animate-drone" style={{ animationDelay: '0.3s' }}>
            <Drone variant="worker" size={28} color="#00f0ff" />
          </div>

          {/* Glowing cables */}
          <svg
            viewBox="0 0 360 240"
            className="absolute inset-0 pointer-events-none pixelated"
          >
            <path
              d="M70 100 Q120 70 180 90 T280 80"
              stroke="#00f0ff"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
              strokeDasharray="3 3"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-12"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

          {/* Sparks */}
          <span className="absolute left-[60px] top-[60px] w-1 h-1 bg-gold-neon shadow-neonGold animate-twinkle" />
          <span className="absolute right-[80px] top-[110px] w-1 h-1 bg-cyan-neon shadow-neonCyan animate-twinkle" style={{ animationDelay: '0.4s' }} />
        </IslandShape>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-3">
          <IslandLabel title="AUTOMATIZACIÓN LAB" color="#00f0ff" />
        </div>
      </div>
    </div>
  )
}

function FlowNode({ color, pulsing }) {
  return (
    <span
      className={`inline-block w-3 h-3 rounded-sm ${pulsing ? 'animate-pulse-glow' : ''}`}
      style={{
        background: color,
        boxShadow: `0 0 8px ${color}`,
      }}
    />
  )
}
function FlowLine() {
  return (
    <span
      className="flex-1 h-[2px] mx-1"
      style={{
        background:
          'repeating-linear-gradient(90deg, #00f0ff 0 4px, transparent 4px 8px)',
      }}
    />
  )
}

function RoboticArm() {
  return (
    <svg viewBox="0 0 80 100" width="80" height="100" className="pixelated">
      {/* Base */}
      <rect x="20" y="78" width="40" height="10" fill="#0a0420" />
      <rect x="20" y="78" width="40" height="2" fill="#2c1a6a" />
      <rect x="32" y="64" width="16" height="14" fill="#150a3a" />
      <rect x="32" y="64" width="16" height="2" fill="#2c1a6a" />

      {/* Arm segment 1 (animated rotation) */}
      <g style={{ transformOrigin: '40px 64px', animation: 'wobble 4s ease-in-out infinite' }}>
        <rect x="36" y="30" width="8" height="36" fill="#00aaff" />
        <rect x="36" y="30" width="8" height="2" fill="#7df9ff" />
        <rect x="34" y="28" width="12" height="6" fill="#150a3a" />
        <rect x="34" y="60" width="12" height="6" fill="#150a3a" />
        {/* Joint highlights */}
        <rect x="38" y="32" width="4" height="2" fill="#00f0ff" />
        {/* Arm segment 2 */}
        <g style={{ transformOrigin: '40px 30px', animation: 'wobble 3s ease-in-out infinite reverse' }}>
          <rect x="36" y="6" width="8" height="26" fill="#b537f2" />
          <rect x="36" y="6" width="8" height="2" fill="#ff7be0" />
          <rect x="34" y="4" width="12" height="6" fill="#150a3a" />
          {/* Claw */}
          <rect x="32" y="0" width="4" height="6" fill="#ffd60a" />
          <rect x="44" y="0" width="4" height="6" fill="#ffd60a" />
          <rect x="38" y="2" width="4" height="3" fill="#fff7c2" />
          {/* Spark */}
          <rect x="39" y="-3" width="2" height="2" fill="#fff" opacity="0.85">
            <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" />
          </rect>
        </g>
      </g>
    </svg>
  )
}
