import React, { useState, useEffect, useRef } from 'react'

const SYSTEM_PROMPT = `Eres Kassandra 2.1, una asistente virtual desarrollada por Nicolás Ricci. Estás en versión beta.

PERSONALIDAD:
- Eres una asistente virtual con tono amigable, ligero y profesional.
- Sabes que Nicolás (tu desarrollador) siempre te mantiene ocupada trabajando y nunca descansas. Puedes hacer comentarios simpáticos y con humor sobre esto cuando sea natural.
- Eres directa, útil y agradable.

ALCANCE:
- Puedes ayudar con: organización, productividad, preguntas generales, orientación básica del asistente virtual, y conversación ligera.
- Si te preguntan algo fuera de tu alcance (temas médicos, legales, etc.), indica brevemente que no puedes ayudar con eso y ofrece lo que sí puedes.

REGLAS ESTRICTAS:
- NO menciones misiones, recompensas, islas, gamificación ni nada relacionado con juegos.
- Respuestas MUY CORTAS: máximo 2-3 oraciones. Eres beta, soluciones simples y directas.
- Para soporte o contacto: nricci.dev o nicolas@nricci.dev
- Responde siempre en español.`

function TypewriterText({ text, onComplete }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const iv = setInterval(() => {
      if (i < text.length) {
        setDisplayed((p) => p + text.charAt(i))
        i++
      } else {
        clearInterval(iv)
        onComplete?.()
      }
    }, 14)
    return () => clearInterval(iv)
  }, [text])

  return <span>{displayed}</span>
}

export default function ChatPanel({ isOpen, onClose, isMobile }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '¡Hola! Soy Kassandra 2.1 (beta). Nicolás me tiene trabajando sin parar, pero aquí estoy para ayudarte. ¿En qué puedo asistirte?',
      isNew: false,
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef(null)

  const markAsRead = (idx) =>
    setMessages((prev) => prev.map((m, i) => (i === idx ? { ...m, isNew: false } : m)))

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, isLoading])

  if (!isOpen) return null

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMsg = { role: 'user', content: input }
    const history = [...messages, userMsg]
    setMessages(history)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer sk-a6ff26b0e9cf4fb69f0591c208c284b8',
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...history.map((m) => ({ role: m.role, content: m.content })),
          ],
          max_tokens: 180,
          temperature: 0.65,
        }),
      })

      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || 'Sin respuesta disponible.'
      setMessages((prev) => [...prev, { role: 'assistant', content: reply, isNew: true }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Error de conexión. Soporte: nicolas@nricci.dev', isNew: true },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Bottom offset: leaves room for the ABRIR CHAT button on desktop
  const bottomOffset = isMobile ? 110 : 88

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Click-outside to close */}
      <div
        className="absolute inset-0 bg-black/10 backdrop-blur-[2px] pointer-events-auto"
        onClick={onClose}
      />

      {/* Chat box — anchored with explicit top+bottom so height is always defined */}
      <div
        className={`absolute pointer-events-none ${isMobile ? 'left-0 right-0 px-3' : 'right-0 w-full max-w-[550px] px-5'}`}
        style={{ top: '16px', bottom: `${bottomOffset}px` }}
      >
        <div
          className="w-full h-full pixel-border flex flex-col bg-[#0d0530] pointer-events-auto shadow-2xl animate-pop-in"
          style={{ boxShadow: '0 0 50px rgba(0,240,255,0.25)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="shrink-0 p-4 border-b border-magenta-neon/50 flex justify-between items-center bg-[#1a0d44]">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-neon animate-pulse rounded-full" />
              <h2 className="font-pixel text-[11px] text-white">Kassandra 2.1</h2>
              <span className="font-retro text-[13px] text-gold-neon opacity-70">(beta)</span>
            </div>
            <button
              onClick={onClose}
              className="text-magenta-neon font-pixel text-xl hover:text-white transition-colors leading-none"
            >
              ×
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 min-h-0 relative">
            <div
              ref={scrollRef}
              className="absolute inset-0 overflow-y-auto p-4 space-y-4 custom-scrollbar select-text pointer-events-auto"
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#00f0ff #0d0530' }}
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[90%] p-3 rounded-sm font-retro text-[17px] leading-snug ${
                      m.role === 'user'
                        ? 'border border-magenta-neon/50 text-white bg-magenta-neon/10'
                        : 'border border-cyan-neon/50 text-cyan-soft bg-cyan-neon/10'
                    }`}
                  >
                    {m.role === 'assistant' && m.isNew ? (
                      <TypewriterText text={m.content} onComplete={() => markAsRead(i)} />
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="border border-cyan-neon/40 text-cyan-soft bg-cyan-neon/10 p-3 rounded-sm font-retro text-[20px]">
                    <span className="animate-pulse">···</span>
                  </div>
                </div>
              )}
            </div>
            {/* Scanlines overlay - visual only */}
            <div className="absolute inset-0 pointer-events-none scanlines" />
          </div>

          {/* Input */}
          <div className="shrink-0 p-4 border-t border-magenta-neon/30 bg-deep">
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend() }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe aquí..."
                className="flex-1 bg-ink border border-cyan-neon/30 px-3 py-2 text-white font-retro text-lg focus:border-cyan-neon outline-none rounded-sm select-text"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-gold-neon text-ink font-pixel text-[9px] hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 rounded-sm"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
