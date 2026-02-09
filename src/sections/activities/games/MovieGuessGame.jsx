import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const QUESTIONS = [
  {
    question: "🎭🕷️🕸️",
    options: ["Batman", "Spider-Man", "Venom", "Ant-Man"],
    answer: "Spider-Man",
  },
  {
    question: "🚢❄️❤️",
    options: ["Titanic", "Frozen", "Poseidon", "Avatar"],
    answer: "Titanic",
  },
  {
    question: "🦁👑",
    options: ["Madagascar", "Lion King", "Jungle Book", "Ice Age"],
    answer: "Lion King",
  },
  {
    question: "🧙‍♂️💍",
    options: ["Harry Potter", "Hobbit", "Lord of the Rings", "Narnia"],
    answer: "Lord of the Rings",
  },
  {
    question: "🤖🔥",
    options: ["Transformers", "Matrix", "Terminator", "Iron Man"],
    answer: "Terminator",
  },
]

export default function MovieGuessGame() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [finished, setFinished] = useState(false)

  const current = QUESTIONS[index]

  const choose = (option) => {
    if (selected) return
    setSelected(option)
    if (option === current.answer) setScore(s => s + 1)

    setTimeout(() => {
      if (index + 1 < QUESTIONS.length) {
        setIndex(i => i + 1)
        setSelected(null)
      } else {
        setFinished(true)
      }
    }, 800)
  }

  if (finished) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-black text-center">
        <h2 className="font-pixel text-neonPink text-3xl mb-6">
          🎬 Game Over
        </h2>
        <p className="text-white mb-6">
          Your Score: <span className="text-neonGreen">{score} / {QUESTIONS.length}</span>
        </p>

        <button
          onClick={() => window.location.reload()}
          className="border-2 border-neonPink px-6 py-3 text-neonPink font-pixel hover:bg-neonPink hover:text-black"
        >
          PLAY AGAIN
        </button>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full border-2 border-neonPink p-6 rounded-xl text-center"
      >
        <h3 className="font-pixel text-neonPink mb-6">
          GUESS THE MOVIE
        </h3>

        <p className="text-4xl mb-6">{current.question}</p>

        <div className="grid gap-3">
          {current.options.map(opt => (
            <button
              key={opt}
              onClick={() => choose(opt)}
              className={`
                border px-4 py-2 text-xs font-pixel
                ${
                  selected
                    ? opt === current.answer
                      ? "border-neonGreen text-neonGreen"
                      : opt === selected
                      ? "border-red-500 text-red-500"
                      : "border-white/20 text-white/50"
                    : "border-neonBlue text-neonBlue hover:bg-neonBlue hover:text-black"
                }
              `}
            >
              {opt}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
