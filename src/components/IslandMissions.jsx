import React, { useState } from 'react'
import IslandShape from './IslandShape.jsx'
import IslandLabel from './IslandLabel.jsx'

const INITIAL_TASKS = [
  { id: 1, label: 'Revisa tus tareas diarias', done: true },
  { id: 2, label: 'Configura una automatización', done: true },
  { id: 3, label: 'Vincula una herramienta', done: false },
  { id: 4, label: 'Actualiza tus preferencias', done: false },
]

export default function IslandMissions() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const completedCount = tasks.filter(t => t.done).length
  const progressPercent = (completedCount / tasks.length) * 100

  return (
    <div
      className="absolute z-10 left-[10%] top-[24%] will-fade animate-fade-up"
      style={{ animationDelay: '0.95s' }}
    >
      <div className="island violet animate-float" style={{ animationDelay: '0.5s' }}>
        <IslandShape size="md" accent="#b537f2">
          {/* NPC characters */}
          <div className="absolute left-[42px] top-[30px]">
            <NPC color="#ffd60a" />
          </div>
          <div className="absolute right-[40px] top-[42px]">
            <NPC color="#4dffb8" hat />
          </div>

          {/* Mission board */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[10px] w-[220px] holo scanlines rounded-sm p-3"
            style={{ borderColor: 'rgba(181,55,242,0.6)' }}
          >
            <div className="font-pixel text-[9px] text-violet-neon text-center mb-2">
              ◆ LISTA ◆
            </div>
            {tasks.map((t) => (
              <div 
                key={t.id} 
                className="flex items-center gap-1 mb-0.5 cursor-pointer hover:bg-white/5 p-0.5 -mx-0.5 rounded transition-colors"
                onClick={() => toggleTask(t.id)}
              >
                <span
                  className={`inline-flex items-center justify-center w-3 h-3 ${
                    t.done ? 'bg-mint' : 'bg-deep border border-cyan-neon/50'
                  }`}
                  style={t.done ? { boxShadow: '0 0 6px #4dffb8' } : {}}
                >
                  {t.done && (
                    <svg viewBox="0 0 8 8" className="w-2 h-2 pixelated">
                      <polyline
                        points="1,4 3,6 7,2"
                        fill="none"
                        stroke="#0a0420"
                        strokeWidth="1.5"
                      />
                    </svg>
                  )}
                </span>
                <span
                  className={`font-retro text-[13px] leading-tight ${
                    t.done ? 'text-cyan-soft line-through opacity-70' : 'text-white'
                  }`}
                >
                  {t.label}
                </span>
              </div>
            ))}
            {/* Progress */}
            <div className="mt-2 flex items-center gap-1.5">
              <span className="font-pixel text-[8px] text-cyan-neon">{completedCount}/{tasks.length}</span>
              <div className="flex-1 h-1.5 bg-deep border border-violet-neon/50">
                <div
                  className="h-full transition-all duration-300 ease-out"
                  style={{
                    width: `${progressPercent}%`,
                    background: 'linear-gradient(90deg, #b537f2, #ff2bd6)',
                    boxShadow: '0 0 6px #ff2bd6',
                  }}
                />
              </div>
            </div>
          </div>
        </IslandShape>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-3">
          <IslandLabel title="MISIONES" color="#b537f2" />
        </div>
      </div>
    </div>
  )
}

function NPC({ color = '#ffd60a', hat = false }) {
  return (
    <svg viewBox="0 0 16 24" width="32" height="48" className="pixelated animate-float-fast">
      {/* shadow */}
      <ellipse cx="8" cy="22" rx="5" ry="0.8" fill="#000" opacity="0.4" />
      {/* head */}
      <rect x="5" y="4" width="6" height="6" fill="#f5cfa8" />
      {/* hair */}
      <rect x="4" y="3" width="8" height="2" fill={color} />
      <rect x="4" y="5" width="2" height="2" fill={color} />
      <rect x="10" y="5" width="2" height="2" fill={color} />
      {hat && (
        <>
          <rect x="3" y="2" width="10" height="1" fill="#0a0420" />
          <rect x="5" y="0" width="6" height="2" fill="#0a0420" />
        </>
      )}
      {/* eyes */}
      <rect x="6" y="7" width="1" height="1" fill="#0a0a30" />
      <rect x="9" y="7" width="1" height="1" fill="#0a0a30" />
      {/* body */}
      <rect x="4" y="10" width="8" height="8" fill="#150a3a" />
      <rect x="4" y="10" width="8" height="1" fill="#2c1a6a" />
      <rect x="6" y="12" width="4" height="1" fill={color} />
      {/* arms */}
      <rect x="2" y="11" width="2" height="6" fill="#150a3a" />
      <rect x="12" y="11" width="2" height="6" fill="#150a3a" />
      {/* legs */}
      <rect x="5" y="18" width="2" height="4" fill="#0a0420" />
      <rect x="9" y="18" width="2" height="4" fill="#0a0420" />
    </svg>
  )
}
