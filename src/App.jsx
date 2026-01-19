import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import Home from "./Pages/Home"
import Join from "./Pages/Join"
import {
  stopBackgroundMusic,
  startBackgroundMusic,
} from "./utils/sound"

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
    </Routes>
  )
}

export default App
