import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const icons = ["⚡", "🔥", "👾", "💎", "🎮", "🧠"]
const MAX_MOVES = 12

export default function NeonMemory() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [disabled, setDisabled] = useState(true)
  const [moves, setMoves] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const initGame = () => {
    const deck = [...icons, ...icons]
      .sort(() => Math.random() - 0.5)
      .map((icon, i) => ({ id: i, icon }))

    setCards(deck)
    setFlipped([])
    setMatched([])
    setMoves(0)
    setGameOver(false)
    setDisabled(true)

    setTimeout(() => setDisabled(false), 2000)
  }

  useEffect(() => {
    initGame()
  }, [])

  const flip = (index) => {
    if (
      disabled ||
      flipped.includes(index) ||
      matched.includes(index) ||
      gameOver
    )
      return

    const newFlipped = [...flipped, index]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setDisabled(true)
      const nextMoves = moves + 1
      setMoves(nextMoves)

      const [a, b] = newFlipped
      if (cards[a].icon === cards[b].icon) {
        setMatched(m => [...m, a, b])
        setFlipped([])
        setDisabled(false)
      } else {
        setTimeout(() => {
          setFlipped([])
          setDisabled(false)
        }, 700)
      }

      if (nextMoves >= MAX_MOVES) {
        setTimeout(() => setGameOver(true), 800)
      }
    }
  }

  const win = matched.length === cards.length && cards.length > 0

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center text-white overflow-hidden">
      {/* GAME BOARD */}
      <div className="flex flex-col items-center">
        <h1 className="font-pixel text-neonBlue mb-4">
          NEON MEMORY
        </h1>

        <div className="grid grid-cols-4 gap-3">
          {cards.map((card, i) => {
            const isOpen =
              flipped.includes(i) || matched.includes(i)

            return (
              <button
                key={card.id}
                onClick={() => flip(i)}
                className={`
                  w-16 h-16
                  border-2 rounded
                  flex items-center justify-center
                  text-2xl
                  transition-all duration-300
                  ${
                    isOpen
                      ? "border-neonBlue shadow-[0_0_10px_#00f0ff]"
                      : "border-white/20"
                  }
                `}
              >
                {isOpen ? card.icon : ""}
              </button>
            )
          })}
        </div>

        <p className="mt-4 text-xs opacity-70">
          Moves: {moves} / {MAX_MOVES}
        </p>
      </div>

      {/* GAME OVER */}
      {gameOver && !win && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-10"
        >
          <h2 className="font-pixel text-red-500 text-3xl mb-4">
            GAME OVER
          </h2>

          <p className="text-white/70 mb-8">
            Out of moves
          </p>

          <button
            onClick={initGame}
            className="
              px-8 py-3
              border-2 border-neonBlue
              text-neonBlue font-pixel text-xs
              hover:bg-neonBlue hover:text-black
              transition
            "
          >
            RESTART
          </button>
        </motion.div>
      )}

      {/* WIN SCREEN */}
      {win && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-10"
        >
          <h2 className="font-pixel text-neonGreen text-3xl mb-4">
            YOU WIN 🎉
          </h2>

          <p className="text-white/70 mb-6">
            Moves: {moves}
          </p>

          <button
            onClick={initGame}
            className="
              px-8 py-3
              border-2 border-neonGreen
              text-neonGreen font-pixel text-xs
              hover:bg-neonGreen hover:text-black
              transition
            "
          >
            PLAY AGAIN
          </button>
        </motion.div>
      )}
    </div>
  )
}
