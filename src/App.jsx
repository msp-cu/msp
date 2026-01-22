import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import Home from "./Pages/Home"
import Join from "./Pages/Join"
import Tournament from "./Pages/Tournament"
import TournamentRegister from "./Pages/TournamentRegister"
import {
  stopBackgroundMusic,
  startBackgroundMusic,
} from "./utils/sound"
import Tournament2 from "./Pages/Tournament2"

function App() {

  // 🔇 Global sound control (كل الموقع)
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        stopBackgroundMusic()
      } else {
        startBackgroundMusic()
      }
    }

    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<Join />} />
      <Route path="/tournament" element={<Tournament />} />
      <Route path="/tournament/register" element={<TournamentRegister />} />
      <Route path="/tournament2" element={<Tournament2 />} />

    </Routes>
  )
}

export default App
