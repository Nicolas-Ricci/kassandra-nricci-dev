import React, { useState, useEffect } from 'react'
import IslandShape from './IslandShape.jsx'
import IslandLabel from './IslandLabel.jsx'
import Kassandra from './Kassandra.jsx'
import Drone from './Drone.jsx'

export default function CenterIsland({ isMusicOn, onToggleMusic }) {
  return (
    <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div
        className="will-fade animate-fade-up pointer-events-auto"
        style={{ animationDelay: '0.7s' }}
      >
      <div className="island animate-float-slow" style={{ animationDelay: '0s' }}>
        <IslandShape size="lg" accent="#00f0ff" className="relative">
          {/* Hologram chart panel — left of Kassandra */}
          <div className="absolute left-[20px] top-[60px] w-[120px] h-[88px] holo scanlines rounded-sm p-2 animate-flicker">
            <div className="font-pixel text-[7px] text-cyan-neon mb-1">ANALÍTICA</div>
            <div className="flex items-end gap-1 h-12">
              {[40, 60, 35, 80, 55, 75, 90, 65].map((h, i) => (
                <div
                  key={i}
                  className="holo-bar w-2"
                  style={{
                    height: `${h}%`,
                    animation: `bar-grow 1.4s ${0.9 + i * 0.07}s ease-out forwards`,
                    transformOrigin: 'bottom',
                  }}
                />
              ))}
            </div>
            <div className="font-retro text-[11px] text-cyan-soft mt-1">+24% hoy</div>
          </div>

          {/* Hologram screen — right of Kassandra */}
          <div className="absolute right-[20px] top-[84px] w-[130px] h-[90px] holo scanlines rounded-sm p-3 animate-flicker" style={{ animationDelay: '0.4s' }}>
            <div className="font-pixel text-[8px] text-magenta-neon mb-2">SISTEMAS</div>
            <Row label="CPU" value={62} color="#00f0ff" />
            <Row label="NET" value={88} color="#4dffb8" />
            <Row label="AI " value={94} color="#ff2bd6" />
          </div>

          {/* Floating mug accessory */}
          <div className="absolute left-[60px] top-[150px] animate-float" style={{ animationDelay: '0.4s' }}>
            <Mug />
          </div>

          {/* Pet drone */}
          <div className="absolute right-[70px] top-[150px] animate-drone" style={{ animationDelay: '0.6s' }}>
            <Drone variant="pet" size={36} color="#00f0ff" />
          </div>

          {/* Kassandra centered on island */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[36px]">
            <Kassandra />
          </div>



          {/* Speech bubble — outer = pop-in entrance, inner = idle bob */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-[40px] will-fade animate-pop-in"
            style={{ animationDelay: '1.6s' }}
          >
            <div className="animate-bob">
              <SpeechBubble />
            </div>
          </div>

          {/* Tiny neon decorations */}
          <span className="absolute left-[200px] top-[58px] w-1 h-1 bg-cyan-neon shadow-neonCyan animate-twinkle" />
          <span className="absolute left-[280px] top-[44px] w-1 h-1 bg-magenta-neon shadow-neonMagenta animate-twinkle" style={{ animationDelay: '0.6s' }} />
          <span className="absolute left-[340px] top-[80px] w-1 h-1 bg-gold-neon shadow-neonGold animate-twinkle" style={{ animationDelay: '1s' }} />
        </IslandShape>

        {/* Label centered below */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2">
          <IslandLabel 
            title="NÚCLEO OPERATIVO" 
            sub="Datos · Flujos · Sistema" 
            color="#00f0ff" 
          />
        </div>
      </div>
    </div>
  </div>
  )
}

function Row({ label, value, color }) {
  return (
    <div className="flex items-center gap-1 text-[9px] font-pixel mb-1.5">
      <span className="text-white w-7">{label}</span>
      <div className="flex-1 h-2 bg-deep border border-cyan-neon/40">
        <div
          className="h-full"
          style={{
            width: `${value}%`,
            background: color,
            boxShadow: `0 0 6px ${color}`,
          }}
        />
      </div>
      <span style={{ color }}>{value}</span>
    </div>
  )
}

function SpeechBubble() {
  const phrases = [
    "¡Hola! Soy Kassandra, tu asistente virtual.",
    "Monitorizando sistemas... Nicolás no me deja descansar.",
    "Recuerda revisar tus tareas pendientes en el panel.",
    "Nicolás está trabajando en nuevas automatizaciones.",
    "Conexión establecida con el núcleo operativo.",
    "Escaneando vulnerabilidades en la red...",
    "¿Dormir? Nicolás borró esa función de mi código.",
    "Kassandra 2.1 lista para ejecutar protocolos."
  ]

  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout
    const currentFullText = phrases[phraseIndex]

    if (isTyping) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1))
        }, 50) 
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 5000)
      }
    } else {
      setDisplayText("")
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
      setIsTyping(true)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, phraseIndex, phrases])

  // Helper to highlight both "Kassandra" and "Nicolás"
  const renderText = () => {
    const keywords = ["Kassandra", "Nicolás", "Nicolas"]
    let result = [displayText]

    keywords.forEach(word => {
      const newResult = []
      result.forEach(part => {
        if (typeof part !== 'string') {
          newResult.push(part)
          return
        }
        
        const fragments = part.split(word)
        fragments.forEach((fragment, i) => {
          newResult.push(fragment)
          if (i < fragments.length - 1) {
            newResult.push(<span key={word + i} className="text-cyan-neon font-bold">{word}</span>)
          }
        })
      })
      result = newResult
    })

    return result
  }

  return (
    <div className="relative">
      <div
        className="px-5 py-3 min-w-[240px] max-w-[300px] rounded-sm relative"
        style={{
          background: 'linear-gradient(180deg, #1a0d44 0%, #0a0428 100%)',
          border: '2px solid #00f0ff',
          boxShadow: '0 0 20px rgba(0,240,255,0.4), inset 0 0 12px rgba(0,240,255,0.15)',
        }}
      >
        <p className="font-retro text-[20px] text-white text-center leading-snug min-h-[50px]">
          {renderText()}
          <span className="animate-tictac text-cyan-neon ml-1">_</span>
        </p>
        {/* Pixel corners */}
        <span className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-neon" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-neon" />
        <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-neon" />
        <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-neon" />
      </div>
      {/* Tail */}
      <div
        className="absolute left-1/2 -bottom-2 -translate-x-1/2"
        style={{
          width: 0,
          height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: '12px solid #00f0ff',
        }}
      />
      <div
        className="absolute left-1/2 -bottom-1 -translate-x-1/2"
        style={{
          width: 0,
          height: 0,
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '10px solid #1a0d44',
        }}
      />
    </div>
  )
}

function Mug() {
  return (
    <svg viewBox="0 0 16 16" width="22" height="22" className="pixelated">
      <rect x="3" y="6" width="8" height="7" fill="#7df9ff" />
      <rect x="3" y="6" width="8" height="1" fill="#ffffff" />
      <rect x="11" y="8" width="2" height="3" fill="none" stroke="#7df9ff" strokeWidth="1" />
      <rect x="4" y="4" width="1" height="2" fill="#ffffff" opacity="0.6">
        <animate attributeName="y" values="2;4" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.7;0" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="6" y="3" width="1" height="2" fill="#ffffff" opacity="0.6">
        <animate attributeName="y" values="1;3" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.7;0" dur="2.4s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}

function VolumeOnIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-5 h-5 fill-current">
      <path d="M5 6v4h2l3 3V3L7 6H5zm7 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
    </svg>
  )
}

function VolumeOffIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-5 h-5 fill-current">
      <path d="M4.34 2.93L2.93 4.34 5.59 7H3v2h2.59l3.41 3.41V9.41l2.25 2.25c-.35.21-.72.39-1.11.51v1.03c.66-.15 1.28-.43 1.83-.81l1.1 1.1 1.41-1.41L4.34 2.93zM9 3.41L7.14 5.27l1.86 1.86V3.41z" />
    </svg>
  )
}
