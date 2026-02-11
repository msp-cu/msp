import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import BackToGamesButton from "../game-zone/BackToGamesButton"

const LEVELS = {
  easy: { cols: 4, rows: 4, pairs: 8, moves: 18 },
  medium: { cols: 5, rows: 4, pairs: 10, moves: 20 },
  hard: { cols: 6, rows: 4, pairs: 12, moves: 22 },
  impossible: { cols: 6, rows: 5, pairs: 15, moves: 25 },
}

const ICONS_POOL = [
  "⚡","🔥","👾","💎","🎮","🧠",
  "🚀","🕹️","👽","💥","🧩","🏆",
  "🎯","🧪","📡"
]

export default function NeonMemory() {
  const [level, setLevel] = useState(null)
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [moves, setMoves] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const settings = level ? LEVELS[level] : null

  const initGame = (lvl = level) => {
    const { pairs } = LEVELS[lvl]
    const icons = ICONS_POOL.slice(0, pairs)
    const deck = [...icons, ...icons]
      .sort(() => Math.random() - 0.5)
      .map((icon, i) => ({ id: i, icon }))

    setCards(deck)
    setFlipped([])
    setMatched([])
    setMoves(0)
    setGameOver(false)
    setDisabled(false)
  }

  useEffect(() => {
    if (level) initGame(level)
  }, [level])

  const flip = (i) => {
    if (
      disabled ||
      flipped.includes(i) ||
      matched.includes(i) ||
      gameOver
    ) return

    const newFlipped = [...flipped, i]
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
        }, 600)
      }

      if (nextMoves >= settings.moves) {
        setTimeout(() => setGameOver(true), 700)
      }
    }
  }

  const win =
    matched.length === cards.length &&
    cards.length > 0

  /* LEVEL SELECT */
  if (!level) {
    return (
      <section className="min-h-screen bg-black flex items-center justify-center">
        <div className="grid gap-4 text-center">
          <h1 className="font-pixel text-neonBlue text-2xl mb-4">
            NEON MEMORY
          </h1>

          {Object.keys(LEVELS).map(lvl => (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              className="
                border-2 border-neonBlue px-8 py-4
                font-pixel text-neonBlue
                hover:bg-neonBlue hover:text-black
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
    <div className="relative min-h-screen bg-black flex items-center justify-center text-white">
      <BackToGamesButton />

      <div className="flex flex-col items-center">
        <h1 className="font-pixel text-neonBlue mb-2">
          NEON MEMORY – {level.toUpperCase()}
        </h1>

        <p className="text-xs opacity-70 mb-4">
          Moves: {moves} / {settings.moves}
        </p>

        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: `repeat(${settings.cols}, 4rem)`
          }}
        >
          {cards.map((card, i) => {
            const open =
              flipped.includes(i) || matched.includes(i)

            return (
              <button
                key={card.id}
                onClick={() => flip(i)}
                className={`
                  w-16 h-16 border-2 rounded
                  flex items-center justify-center
                  text-2xl transition-all
                  ${
                    open
                      ? "border-neonBlue shadow-[0_0_12px_#00f0ff]"
                      : "border-white/20"
                  }
                `}
              >
                {open ? card.icon : ""}
              </button>
            )
          })}
        </div>
      </div>

      {/* GAME OVER */}
      {gameOver && !win && (
        <Overlay
          title="GAME OVER"
          subtitle="Out of moves"
          color="red"
          onClick={() => initGame()}
        />
      )}

      {/* WIN */}
      {win && (
        <Overlay
          title="YOU WIN 🎉"
          subtitle={`Moves: ${moves}`}
          color="green"
          onClick={() => initGame()}
        />
      )}
    </div>
  )
}

/* Overlay Component */
function Overlay({ title, subtitle, color, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-10"
    >
      <h2 className={`font-pixel text-${color}-500 text-3xl mb-4`}>
        {title}
      </h2>
      <p className="text-white/70 mb-6">{subtitle}</p>
      <button
        onClick={onClick}
        className={`
          px-8 py-3 border-2
          border-${color}-500 text-${color}-500
          font-pixel text-xs
          hover:bg-${color}-500 hover:text-black
        `}
      >
        PLAY AGAIN
      </button>
    </motion.div>
  )
}
