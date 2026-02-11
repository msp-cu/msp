import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import BackToGamesButton from "../game-zone/BackToGamesButton"

const SENTENCES = [
  "msp builds future leaders",
  "students create the future",
  "learn code and innovate",
  "technology starts with you",
  "grow learn and lead"
]

const GAME_TIME = 45
const TARGET_SCORE = 5

export default function NeonTypingSentences() {
  const [sentence, setSentence] = useState("")
  const [input, setInput] = useState("")
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(GAME_TIME)
  const [state, setState] = useState("idle") // idle | playing | win | lose

  const randomSentence = () =>
    SENTENCES[Math.floor(Math.random() * SENTENCES.length)]

  const startGame = () => {
    setSentence(randomSentence())
    setInput("")
    setScore(0)
    setTime(GAME_TIME)
    setState("playing")
  }

  useEffect(() => {
    if (state !== "playing") return
    if (time === 0) {
      setState("lose")
      return
    }

    const timer = setTimeout(() => setTime(t => t - 1), 1000)
    return () => clearTimeout(timer)
  }, [time, state])

  const handleChange = (e) => {
    const value = e.target.value
    setInput(value)

    if (value.trim() === sentence) {
      const newScore = score + 1
      setScore(newScore)
      setInput("")

      if (newScore >= TARGET_SCORE) {
        setState("win")
      } else {
        setSentence(randomSentence())
      }
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="text-center max-w-xl px-4">
        <BackToGamesButton/>
        <h1 className="font-pixel text-neonPink text-xl mb-6">
          NEON TYPING CHALLENGE
        </h1>

        {state === "idle" && (
          <button
            onClick={startGame}
            className="border-2 border-neonPink px-8 py-3 font-pixel text-xs"
          >
            START GAME
          </button>
        )}

        {state === "playing" && (
          <>
            <motion.div
              key={sentence}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-lg mb-6
                text-neonBlue
                shadow-[0_0_15px_#00f0ff]
              "
            >
              {sentence}
            </motion.div>

            <input
              value={input}
              onChange={handleChange}
              autoFocus
              className="
                w-full bg-black border-2 border-neonPink
                px-4 py-3 text-center
                outline-none
              "
            />

            <div className="flex justify-between mt-6 text-xs">
              <span>⏱️ {time}s</span>
              <span>🎯 {score}/{TARGET_SCORE}</span>
            </div>
          </>
        )}

        {state === "win" && (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <h2 className="font-pixel text-neonGreen text-3xl mb-4">
              YOU WIN 🎉
            </h2>
            <p className="mb-6">You beat the challenge!</p>
            <button
              onClick={startGame}
              className="border-2 border-neonGreen px-8 py-3 font-pixel text-xs"
            >
              PLAY AGAIN
            </button>
          </motion.div>
        )}

        {state === "lose" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="font-pixel text-red-500 text-3xl mb-4">
              TRY AGAIN 💀
            </h2>
            <p className="mb-6">
              Score: {score}/{TARGET_SCORE}
            </p>
            <button
              onClick={startGame}
              className="border-2 border-neonPink px-8 py-3 font-pixel text-xs"
            >
              RETRY
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
