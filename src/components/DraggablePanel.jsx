import React, { useState, useRef, useEffect } from 'react';

export default function DraggablePanel({ children, className = '', style = {} }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    // Evitar arrastrar si se hace clic en un elemento interactivo (botones, checks)
    if (e.target.closest('.no-drag')) return;

    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      // Limitar un poco el movimiento para que no desaparezca de la pantalla
      // Podríamos añadir límites complejos, pero esto es suficiente por ahora
      setPosition({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className={`relative cursor-grab active:cursor-grabbing ${isDragging ? 'z-50 drop-shadow-2xl' : ''} ${className}`}
      style={{
        ...style,
        transform: `translate(${position.x}px, ${position.y}px)`,
        // Desactivamos la transición al arrastrar para que sea instantáneo, 
        // y la activamos ligeramente al soltar si queremos (aquí lo dejamos sin transición para mayor precisión)
        transition: isDragging ? 'none' : 'none'
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Añadimos un pequeño indicador visual de agarre en la esquina superior izquierda si se desea */}
      <div className="absolute top-1 right-1 opacity-20 hover:opacity-100 pointer-events-none">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
          <path d="M7 19h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8-4h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8-4h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z"/>
        </svg>
      </div>
      {children}
    </div>
  );
}
