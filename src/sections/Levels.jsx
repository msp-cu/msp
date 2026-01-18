import { useState } from "react"
import LevelCard from "./LevelCard"
import XPBar from "../components/XPBar"
import { levels } from "../data/levels"

function Levels() {
  const [xp] = useState(150) // مؤقتًا

  return (
    <section className="min-h-screen bg-darkBg py-32 px-6">
      <h2 className="font-pixel text-center text-neonBlue text-2xl mb-8">
        SELECT YOUR LEVEL
      </h2>

      <XPBar xp={xp} />

      <div className="grid gap-10 max-w-6xl mx-auto
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {levels.map(level => (
          <LevelCard key={level.id} level={level} xp={xp} />
        ))}
      </div>
    </section>
  )
}

export default Levels
