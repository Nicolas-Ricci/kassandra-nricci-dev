import React, { useState, useEffect, useRef } from 'react'
import Background from './components/Background.jsx'
import TopHUD from './components/TopHUD.jsx'
import Sidebar from './components/Sidebar.jsx'
import CenterIsland from './components/CenterIsland.jsx'
import IslandMissions from './components/IslandMissions.jsx'
import IslandAutomation from './components/IslandAutomation.jsx'
import IslandDataHub from './components/IslandDataHub.jsx'
import IslandRewards from './components/IslandRewards.jsx'
import BottomPanels from './components/BottomPanels.jsx'
import PlayButton from './components/PlayButton.jsx'
import Connectors from './components/Connectors.jsx'
import ChatPanel from './components/ChatPanel.jsx'

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isMusicOn, setIsMusicOn] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLaptop, setIsLaptop] = useState(false)
  const [worldScale, setWorldScale] = useState(1)
  const audioRef = useRef(null)

  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const mobile = w < 768
      const laptop = !mobile && w < 1440
      setIsMobile(mobile)
      setIsLaptop(laptop)

      if (mobile) {
        // Scale so center island (520px wide) fits with breathing room
        const scaleX = (w * 0.88) / 520
        const scaleY = (h - 240) / 480
        setWorldScale(Math.min(scaleX, scaleY, 0.88)) // Increased 10% (0.8 * 1.1)
      } else {
        // Large monitors (1920+) cap at 0.82 (0.74 * 1.1) for 10% increase
        const scaleW = w / 1600
        const scaleH = h / 960
        setWorldScale(Math.min(scaleW, scaleH, 0.82))
      }
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  useEffect(() => {
    if (isMusicOn) {
      if (!audioRef.current) {
        audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
        audioRef.current.loop = true
        audioRef.current.volume = 0.4
      }
      audioRef.current.play()
        .then(() => console.log('Musica iniciada'))
        .catch(e => {
          console.error('Error al reproducir audio:', e)
          setIsMusicOn(false)
        })
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [isMusicOn])

  return (
    <div className="world-stage bg-[#040013]">
      {/* Animated background — always full viewport */}
      <Background />

      {/* Scalable world layer — islands + connectors */}
      <div
        className="absolute inset-0"
        style={{
          transform: `scale(${worldScale})`,
          transformOrigin: 'center center',
          zIndex: 0,
        }}
      >
        {!isMobile && <Connectors />}
        {!isMobile && <IslandMissions />}
        {!isMobile && <IslandAutomation />}
        {!isMobile && <IslandDataHub />}
        {!isMobile && <IslandRewards />}
        <CenterIsland
          isMusicOn={isMusicOn}
          onToggleMusic={() => setIsMusicOn(!isMusicOn)}
        />
      </div>

      {/* HUD layers — restored to original size */}
      <TopHUD
        isMusicOn={isMusicOn}
        onToggleMusic={() => setIsMusicOn(!isMusicOn)}
        isMobile={isMobile}
        isLaptop={isLaptop}
      />
      <Sidebar isMobile={isMobile} />
      {!isMobile && <BottomPanels isMobile={isMobile} />}
      <PlayButton onClick={() => setIsChatOpen(true)} isMobile={isMobile} />

      {/* Chat Panel Overlay */}
      <ChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} isMobile={isMobile} />

      {/* Subtle vignette on top */}
      <div className="pointer-events-none absolute inset-0 z-40 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(0,0,0,0.55)_100%)]" />
    </div>
  )
}
