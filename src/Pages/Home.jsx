import { useState } from "react"
import InsertCoin from "../sections/InsertCoin"
import Loader from "../sections/Loader"
import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Events from "../sections/Events/Events"
import Team from "../sections/Team/Team"
import Levels from "../sections/Levels"
import { enableSound, startBackgroundMusic } from "../utils/sound"



function Home() {
  // Insert Coin (مرة واحدة)
  const [started, setStarted] = useState(
    localStorage.getItem("started") === "true"
  )

  // Loader (مرة واحدة)
  const [loaded, setLoaded] = useState(
    localStorage.getItem("loaded") === "true"
  )

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
startBackgroundMusic() // ← السطر المهم
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
      <Team />
      <Levels />
    </>
  )
}

export default Home
localStorage.removeItem("started")
localStorage.removeItem("loaded")
