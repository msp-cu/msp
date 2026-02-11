import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import BackToGamesButton from "../game-zone/BackToGamesButton"

const LEVELS = {
  easy: { size: 3, image: "../../Events/YouthScope.jpg" },
  medium: { size: 4, image: "../../Events/ECS.jpg" },
  hard: { size: 5, image: "../../logo.png" },
}


function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

export default function PuzzleGame() {
  const [level, setLevel] = useState(null)
  const [tiles, setTiles] = useState([])
  const [image, setImage] = useState("")
  const [grid, setGrid] = useState(3)
  const [time, setTime] = useState(0)
  const [finished, setFinished] = useState(false)

  /* INIT GAME */
  useEffect(() => {
    if (!level) return
    const { size, image } = LEVELS[level]
    setGrid(size)
    setImage(image)
    const arr = Array.from({ length: size * size }, (_, i) => i)
    setTiles(shuffle(arr))
    setTime(0)
    setFinished(false)
  }, [level])

  /* TIMER */
  useEffect(() => {
    if (!level || finished) return
    const t = setInterval(() => setTime(s => s + 1), 1000)
    return () => clearInterval(t)
  }, [level, finished])

  /* CHECK WIN */
  useEffect(() => {
    if (
      tiles.length &&
      tiles.every((v, i) => v === i)
    ) {
      setFinished(true)
    }
  }, [tiles])

  const swap = (i, j) => {
    if (finished) return
    const copy = [...tiles]
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
    setTiles(copy)
  }

  /* LEVEL SELECT */
  if (!level) {
    return (
      <section className="min-h-screen bg-black flex items-center justify-center">
        <div className="grid gap-4 text-center">
          <h2 className="text-neonPink font-pixel text-2xl mb-4">🧩 Puzzle Pictures</h2>
          {Object.keys(LEVELS).map(lvl => (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              className="
                border-2 border-neonPink px-8 py-4
                font-pixel text-neonPink
                hover:bg-neonPink hover:text-black
              "
            >
              {lvl.toUpperCase()}
            </button>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-6 relative">
      <BackToGamesButton />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="border-2 border-neonPink p-6 rounded-xl text-center"
      >
        <h2 className="font-pixel text-neonPink mb-2">
          PUZZLE MODE
        </h2>

        <p className="text-white/70 text-xs mb-4">
          ⏱ {time}s
        </p>

        {/* PUZZLE GRID */}
        <div
          className="grid gap-1 mx-auto mb-6"
          style={{
            gridTemplateColumns: `repeat(${grid}, 80px)`,
          }}
        >
          {tiles.map((tile, i) => (
            <div
              key={i}
              onClick={() => {
                if (i > 0) swap(i, i - 1)
              }}
              className="
                w-20 h-20 border border-neonBlue
                cursor-pointer overflow-hidden
                hover:scale-105 transition
              "
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: `${grid * 80}px ${grid * 80}px`,
                backgroundPosition: `
                  ${-(tile % grid) * 80}px
                  ${-Math.floor(tile / grid) * 80}px
                `,
              }}
            />
          ))}
        </div>

        {/* RESULT */}
        {finished && (
          <div className="mb-4">
            <p className="text-neonGreen font-pixel mb-3">
              🏆 Puzzle Completed!
            </p>

            <button
              onClick={() => setLevel(null)}
              className="
                border-2 border-neonPink px-6 py-3
                font-pixel text-neonPink
                hover:bg-neonPink hover:text-black
              "
            >
              PLAY AGAIN
            </button>
          </div>
        )}
      </motion.div>
    </section>
  )
}
