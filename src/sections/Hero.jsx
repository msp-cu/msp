import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import clickSound from "../assets/click.mp3"

const SECTIONS = ["hero", "about", "events", "team", "levels"]

function Hero() {
  const [currentSection, setCurrentSection] = useState("hero")
  const navigate = useNavigate()

  const playSound = () => {
    new Audio(clickSound).play()
  }

  // 🧠 Track current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // ▶ START GAME → Join Form
  const handleStartGame = () => {
    playSound()
    navigate("/join")
  }

  // ⏭ NEXT LEVEL → Dynamic Scroll
  const handleNextLevel = () => {
    playSound()
    const index = SECTIONS.indexOf(currentSection)
    const nextSection = SECTIONS[index + 1] || "levels"

    document.getElementById(nextSection)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center pt-32"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="neon-grid" />
      <div className="scanlines" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="font-pixel text-neonBlue text-2xl md:text-4xl mb-6 neon-glow">
          FROM IDEAS
          <br />
          TO IMPACT
        </h1>

        <p className="text-white/70 mb-6 max-w-xl mx-auto">
          Welcome to MSP CU Arcade Season.
          <br />
          Learn. Build. Play. Level Up.
        </p>

        {/* LEVEL INDICATOR */}
        <p className="font-pixel text-neonPink text-xs mb-10">
          LEVEL {SECTIONS.indexOf(currentSection) + 1} / {SECTIONS.length}
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          {/* START GAME */}
          <button
            onClick={handleStartGame}
            className="
              font-pixel text-xs px-8 py-4
              border-2 border-neonPink text-neonPink
              hover:bg-neonPink hover:text-black
              shadow-[0_0_20px_#ff2fd2]
              transition-all duration-300
            "
          >
            START GAME
          </button>

          {/* NEXT LEVEL */}
          <button
            onClick={handleNextLevel}
            className="
              font-pixel text-xs px-8 py-4
              border-2 border-neonBlue text-neonBlue
              hover:bg-neonBlue hover:text-black
              shadow-[0_0_20px_#00f0ff]
              transition-all duration-300
            "
          >
            NEXT LEVEL
          </button>
        </div>

        {/* Hint */}
        <p className="mt-4 text-[10px] text-white/40">
          START GAME creates your player • NEXT LEVEL explores the world
        </p>
      </motion.div>
    </section>
  )
}

export default Hero
