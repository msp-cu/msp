import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import BackToGamesButton from "../game-zone/BackToGamesButton"

export default function ReactionGame() {
  const [state, setState] = useState("idle")
  const [startTime, setStartTime] = useState(null)
  const [reaction, setReaction] = useState(null)

  useEffect(() => {
    if (state === "waiting") {
      const delay = Math.random() * 2500 + 1500
      const timer = setTimeout(() => {
        setState("ready")
        setStartTime(performance.now())
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [state])

  const handleClick = () => {
    if (state === "waiting") {
      setState("failed")
    }

    if (state === "ready") {
      const time = Math.floor(performance.now() - startTime)
      setReaction(time)
      setState("done")
    }

    if (state === "idle" || state === "failed" || state === "done") {
      setReaction(null)
      setStartTime(null)
      setState("waiting")
    }
  }

  const bg =
    state === "ready"
      ? "bg-green-600"
      : state === "failed"
      ? "bg-red-600"
      : "bg-black"

  return (
    <section
    
      onClick={handleClick}
      className={`min-h-screen ${bg} flex items-center justify-center text-center transition-colors duration-200`}
    >
      <BackToGamesButton/>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white font-pixel"
      >
        {state === "idle" && <p>CLICK TO START</p>}
        {state === "waiting" && <p>WAIT FOR GREEN…</p>}
        {state === "ready" && <p>CLICK NOW!</p>}
        {state === "failed" && <p>❌ TOO SOON — TRY AGAIN</p>}
        {state === "done" && (
          <>
            <p className="text-2xl mb-2">⚡ {reaction} ms</p>
            <p className="text-sm opacity-70">CLICK TO RESTART</p>
          </>
        )}
      </motion.div>
    </section>
  )
}
