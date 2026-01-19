import clickSound from "../assets/click.mp3"

function PathCard({ path, xp, onSelect }) {
  //const locked = xp < path.xpRequired
  const locked = !path.open


  const playSound = () => {
    new Audio(clickSound).play()
  }

  const handleSelect = () => {
    if (locked) return
    playSound()
    onSelect(path)
  }

  return (
    <div
      className={`
        w-64 p-6 border-2 font-pixel text-xs text-center
        transition-all duration-300
        ${
          locked
            ? "border-gray-600 text-gray-500 opacity-40"
            : "border-neonBlue text-neonBlue hover:scale-105 hover:shadow-[0_0_25px_#00f0ff]"
        }
      `}
    >
      <p className="mb-2">{path.rarity.toUpperCase()}</p>

      <h3 className="text-neonPink mb-4">{path.title}</h3>

      <p className="text-white/70 mb-4">
        {path.description}
      </p>

      <ul className="text-white/50 mb-6 space-y-1">
        {path.committees.map((c) => (
          <li key={c}>• {c}</li>
        ))}
      </ul>

      <button
  disabled={locked}
  onClick={handleSelect}
  className={`
    px-4 py-2 border
    ${
      locked
        ? "border-gray-600 text-gray-600 cursor-not-allowed"
        : "border-neonPink text-neonPink hover:bg-neonPink hover:text-black"
    }
  `}
>
  {locked ? "APPLICATIONS CLOSED" : "SELECT PATH"}
</button>

    </div>
  )
}

export default PathCard
