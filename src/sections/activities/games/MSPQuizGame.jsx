import { useState } from "react"
import { motion } from "framer-motion"
import BackToGamesButton from "../game-zone/BackToGamesButton"

const QUESTIONS = [
  {
    q: "MSP stands for?",
    options: [
      "Microsoft Student Partners",
      "Modern Software Program",
      "Media Support Project",
      "Microsoft System Platform",
    ],
    a: "Microsoft Student Partners",
  },
  {
    q: "MSP is mainly focused on?",
    options: [
      "Student activities",
      "Sports only",
      "Gaming only",
      "Online shopping",
    ],
    a: "Student activities",
  },
  {
    q: "Which skill is NOT part of MSP?",
    options: ["Leadership", "Tech", "Soft Skills", "Cooking"],
    a: "Cooking",
  },
  {
    q: "MSP CU belongs to?",
    options: [
      "Cairo University",
      "Ain Shams",
      "Helwan",
      "Alexandria",
    ],
    a: "Cairo University",
  },
]

export default function MSPQuizGame() {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const choose = (opt) => {
    if (opt === QUESTIONS[step].a) setScore(s => s + 1)
    if (step + 1 < QUESTIONS.length) setStep(s => s + 1)
    else setDone(true)
  }

  if (done) {
    return (
      <section className="min-h-screen bg-black flex items-center justify-center text-center">
        <div className="border-2 border-neonGreen p-8 rounded-xl">
          <h2 className="font-pixel text-neonGreen text-2xl mb-4">
            🎉 Quiz Complete
          </h2>
          <p className="text-white mb-6">
            Score: {score} / {QUESTIONS.length}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="border-2 border-neonGreen px-6 py-3 font-pixel text-neonGreen hover:bg-neonGreen hover:text-black"
          >
            TRY AGAIN
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-6">
      <BackToGamesButton/>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full border-2 border-neonBlue p-6 rounded-xl"
      >
        <h3 className="font-pixel text-neonBlue mb-6">
          MSP QUIZ
        </h3>

        <p className="text-white mb-6 text-sm">
          {QUESTIONS[step].q}
        </p>

        <div className="grid gap-3">
          {QUESTIONS[step].options.map(o => (
            <button
              key={o}
              onClick={() => choose(o)}
              className="border border-neonBlue text-neonBlue py-2 font-pixel text-xs hover:bg-neonBlue hover:text-black"
            >
              {o}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
