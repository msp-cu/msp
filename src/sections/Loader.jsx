import { useEffect, useState } from "react"
import tickSound from "../assets/tick.mp3"

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const audio = new Audio(tickSound)
    audio.play()

    const duration = 6500 // 6.5 ثانية
    const stepTime = duration / 100 // 65ms

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          audio.pause()
          audio.currentTime = 0
          onFinish()
          return 100
        }
        return prev + 1
      })
    }, stepTime)

    return () => {
      clearInterval(interval)
      audio.pause()
    }
  }, [onFinish])

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <p className="font-pixel text-neonPink mb-6">
        LOADING... {progress}%
      </p>

      <div className="w-72 h-4 border-2 border-neonPink">
        <div
          className="h-full bg-neonPink transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default Loader
