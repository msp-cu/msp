import { useState } from "react"
import YugiCard from "./YugiCard"
import { teamCards } from "../../Data/team"

function Team() {
  const [filter, setFilter] = useState("high")

  const filteredCards =
    filter === "all"
      ? teamCards
      : teamCards.filter(card => card.category === filter)

  return (
    <section id="team" className="py-32 bg-black text-center">
      <h2 className="font-pixel text-neonPink mb-10">
        THE BOARD
      </h2>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-16">
        {[
          // { key: "all", label: "ALL" },
          { key: "high", label: "HIGH BOARD" },
          { key: "tech", label: "TECH" },
          { key: "non-tech", label: "NON-TECH" },
        ].map(btn => (
          <button
            key={btn.key}
            onClick={() => setFilter(btn.key)}
            className={`
              font-pixel text-xs px-4 py-2 border
              transition-all
              ${
                filter === btn.key
                  ? "bg-neonPink text-black border-neonPink shadow-[0_0_15px_#ff2fd2]"
                  : "text-neonPink border-neonPink hover:bg-neonPink/20"
              }
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="
        grid gap-10
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        place-items-center
      ">
        {filteredCards.map(card => (
          <YugiCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}

export default Team
