import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import InsertCoin from "../sections/InsertCoin"
import Loader from "../sections/Loader"
import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Events from "../sections/Events/Events"
import Team from "../sections/Team/Team"
import Levels from "../sections/Levels"
import Collaborations from "../sections/Collaborations"
import Projects from "../sections/Projects/Projects"
import {enableSound,startBackgroundMusic,stopBackgroundMusic,} from "../utils/sound"
import Footer from "../components/Footer"



function Home() {
  
  const location = useLocation()

  // Insert Coin (مرة واحدة)
  const [started, setStarted] = useState(
    localStorage.getItem("started") === "true"
  )

  // Loader (مرة واحدة)
  const [loaded, setLoaded] = useState(
    localStorage.getItem("loaded") === "true"
  )

  // 🔹 Scroll لما نرجع من صفحة تانية
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      el?.scrollIntoView({ behavior: "smooth" })
    }
  }, [location])

 

  // 1️⃣ Insert Coin
  if (!started) {
    return (
      <InsertCoin
        onStart={() => {
          localStorage.setItem("started", "true")
          setStarted(true)
        }}
      />
    )
  }

  // 2️⃣ Loader
  if (!loaded) {
    return (
      <Loader
        onFinish={() => {
          enableSound()
          startBackgroundMusic()
          localStorage.setItem("loaded", "true")
          setLoaded(true)
        }}
      />
    )
  }

  // 3️⃣ Home Content
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Collaborations />
      <Projects />
      <Team />
      <Levels />
      {/* 🎮 Arcade Credits */}
      <Footer />
    </>
  )
}
localStorage.removeItem("started")
localStorage.removeItem("loaded")

export default Home

