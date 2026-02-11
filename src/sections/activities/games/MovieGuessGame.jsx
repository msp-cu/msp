import { useState } from "react"
import { motion } from "framer-motion"
import BackToGamesButton from "../game-zone/BackToGamesButton"

const MOVIE_LEVELS = {
  easy: [
    { icons: ["🍯", "⚫"], answer: "عسل أسود", options: ["عسل أسود", "X Large", "طير إنت", "اللمبي"] },
    { icons: ["❌", "👕"], answer: "X Large", options: ["X Large", "تيتو", "الناظر", "عسل أسود"] },
    { icons: ["😂", "🎓"], answer: "الناظر", options: ["الناظر", "اللمبي", "طير إنت", "عسل أسود"] },
    { icons: ["🕺", "🎤"], answer: "اللمبي", options: ["اللمبي", "تيتو", "X Large", "عبده موته"] },
    { icons: ["✈️", "😂"], answer: "طير إنت", options: ["طير إنت", "عسل أسود", "الناظر", "X Large"] },
  ],

  medium: [
    { icons: ["🏝️", "🔫"], answer: "الجزيرة", options: ["الجزيرة", "إبراهيم الأبيض", "تيتو", "حرب كرموز"] },
    { icons: ["🐘", "🔵"], answer: "الفيل الأزرق", options: ["الفيل الأزرق", "تراب الماس", "122", "مولانا"] },
    { icons: ["👊", "⚪"], answer: "إبراهيم الأبيض", options: ["إبراهيم الأبيض", "تيتو", "الجزيرة", "هي فوضى"] },
    { icons: ["🎤", "🔥"], answer: "عبده موته", options: ["عبده موته", "اللمبي", "X Large", "تيتو"] },
    { icons: ["🚓", "💣"], answer: "حرب كرموز", options: ["حرب كرموز", "الجزيرة", "تيتو", "هي فوضى"] },
  ],

  hard: [
    { icons: ["⚖️", "🔥"], answer: "هي فوضى", options: ["هي فوضى", "678", "حرب كرموز", "إبراهيم الأبيض"] },
    { icons: ["📿", "🎙️"], answer: "مولانا", options: ["مولانا", "الفيل الأزرق", "تراب الماس", "122"] },
    { icons: ["💎", "🔪"], answer: "تراب الماس", options: ["تراب الماس", "الفيل الأزرق", "مولانا", "678"] },
    { icons: ["🚪", "🧠"], answer: "122", options: ["122", "الفيل الأزرق", "مولانا", "تراب الماس"] },
    { icons: ["🖤", "⚖️"], answer: "678", options: ["678", "هي فوضى", "تراب الماس", "مولانا"] },
  ],

  impossible: [
    { icons: ["🐘", "💊"], answer: "الفيل الأزرق", options: ["الفيل الأزرق", "مولانا", "122", "تراب الماس"] },
    { icons: ["⚪", "👊"], answer: "إبراهيم الأبيض", options: ["إبراهيم الأبيض", "هي فوضى", "الجزيرة", "تيتو"] },
    { icons: ["📚", "🔥"], answer: "مولانا", options: ["مولانا", "الفيل الأزرق", "تراب الماس", "678"] },
    { icons: ["💎", "🩸"], answer: "تراب الماس", options: ["تراب الماس", "مولانا", "الفيل الأزرق", "122"] },
    { icons: ["🚔", "🔥"], answer: "هي فوضى", options: ["هي فوضى", "حرب كرموز", "الجزيرة", "إبراهيم الأبيض"] },
  ],
}

export default function MovieIconsGame() {
  const [level, setLevel] = useState(null)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState(null)

  if (!level) {
    return (
      <section className="min-h-screen bg-black flex items-center justify-center">
        <div className="grid gap-4 text-center">
          <h2 className="text-neonPink font-pixel text-2xl mb-4">🎬 Movie Icons</h2>
          {Object.keys(MOVIE_LEVELS).map(lvl => (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              className="border-2 border-neonPink px-8 py-3 text-neonPink font-pixel hover:bg-neonPink hover:text-black"
            >
              {lvl.toUpperCase()}
            </button>
          ))}
        </div>
      </section>
    )
  }

  const movies = MOVIE_LEVELS[level]
  const current = movies[index]
  const finished = index >= movies.length

  const choose = (opt) => {
    if (selected) return
    setSelected(opt)
    if (opt === current.answer) setScore(s => s + 1)

    setTimeout(() => {
      setSelected(null)
      setIndex(i => i + 1)
    }, 700)
  }

  if (finished) {
    return (
      <section className="min-h-screen bg-black flex flex-col items-center justify-center text-center">
        <BackToGamesButton />
        <h2 className="text-neonGreen font-pixel text-3xl mb-4">🎉 Finished!</h2>
        <p className="text-white mb-2">
          Score: <span className="text-neonPink">{score} / {movies.length}</span>
        </p>
        <p className="text-white/60 mb-6">
          {score === movies.length
            ? "🔥 Perfect Run!"
            : score > movies.length / 2
            ? "😎 Nice!"
            : "👀 Try Again!"}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="border-2 border-neonBlue px-6 py-2 text-neonBlue font-pixel hover:bg-neonBlue hover:text-black"
        >
          PLAY AGAIN
        </button>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-6">
      <BackToGamesButton />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full border-2 border-neonPink p-6 rounded-xl text-center"
      >
        <p className="text-white/50 mb-2">
          {index + 1} / {movies.length}
        </p>

        <div className="flex justify-center gap-5 text-5xl mb-8">
          {current.icons.map((icon, i) => (
            <motion.span
              key={i}
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            >
              {icon}
            </motion.span>
          ))}
        </div>

        <div className="grid gap-3">
          {current.options.map(opt => (
            <button
              key={opt}
              onClick={() => choose(opt)}
              className={`
                border px-4 py-2 font-pixel text-xs
                ${
                  selected
                    ? opt === current.answer
                      ? "border-neonGreen text-neonGreen"
                      : opt === selected
                      ? "border-red-500 text-red-500"
                      : "border-white/20 text-white/40"
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
