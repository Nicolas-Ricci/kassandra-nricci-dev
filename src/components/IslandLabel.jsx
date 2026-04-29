import React from 'react'

export default function IslandLabel({ title, sub, footer, color = '#00f0ff', className = '' }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <div
        className="relative px-4 py-1.5 inline-flex flex-col items-center"
        style={{
          background: 'rgba(7,2,23,0.85)',
          border: `2px solid ${color}`,
          boxShadow: `0 0 14px ${color}80, inset 0 0 10px ${color}30`,
          minWidth: 180,
        }}
      >
        <span
          className="font-pixel text-[9px] tracking-[0.2em] uppercase opacity-90"
          style={{ color, textShadow: `0 0 12px ${color}` }}
        >
          {title}
        </span>
        {sub && (
          <div className="flex items-center gap-2 w-full my-1">
            <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-current opacity-20" style={{ color }} />
            <span className="font-retro text-[14px] text-white whitespace-nowrap tracking-wide">{sub}</span>
            <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-current opacity-20" style={{ color }} />
          </div>
        )}
        {footer && (
          <span className="font-pixel text-[11px] text-white mt-1 tracking-widest text-glow-cyan">
            {footer}
          </span>
        )}
        {/* Corner pixels */}
        <span className="absolute -top-1 -left-1 w-1.5 h-1.5" style={{ background: color }} />
        <span className="absolute -top-1 -right-1 w-1.5 h-1.5" style={{ background: color }} />
        <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5" style={{ background: color }} />
        <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5" style={{ background: color }} />
      </div>
    </div>
  )
}
