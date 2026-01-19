import { useState } from "react"
import XPBar from "../components/XPBar"
import { paths } from "../Data/levels"
import PathCard from "./LevelCard"
import { useNavigate } from "react-router-dom"

function Levels() {
  const [xp] = useState(1000) // مؤقتًا
  const navigate = useNavigate()

  const handleSelectPath = (path) => {
  localStorage.setItem(
    "playerPath",
    JSON.stringify({
      id: path.id,
      trackType: path.trackType,
      committee: path.committees[0],
    })
  )
  navigate("/join")
}


  return (
    <section
  id="levels"
  className="bg-black py-32 px-6 text-center"
>

      <p className="font-pixel text-neonPink text-xs mb-4">
        FINAL LEVEL
      </p>

      <h2 className="font-pixel text-neonBlue text-2xl mb-8">
        CHOOSE YOUR PATH
      </h2>

      <div className="max-w-xl mx-auto mb-16">
        <XPBar xp={xp} />
      </div>

      <div
        className="
          grid gap-10 max-w-6xl mx-auto
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          place-items-center
        "
      >
        {paths.map((path) => (
          <PathCard
            key={path.id}
            path={path}
            xp={xp}
            onSelect={handleSelectPath}
          />
        ))}
      </div>
    </section>
  )
}

export default Levels
