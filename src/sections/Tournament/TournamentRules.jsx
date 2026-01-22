function TournamentRules() {
  const rules = [
    "5 players per team (+ substitutes)",
    "Knockout matches",
    "Match duration decided by organizers",
    "Fair play is mandatory",
    "Any misconduct leads to disqualification",
  ]

  return (
    <section className="max-w-3xl mx-auto py-24 text-center">
      <h2 className="font-pixel text-neonPink text-lg mb-8">
        TOURNAMENT RULES
      </h2>

      <ul className="space-y-4">
        {rules.map((rule, i) => (
          <li
            key={i}
            className="
              border border-neonBlue
              py-3 px-4 text-xs font-pixel
              text-white/80
            "
          >
            ⚽ {rule}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TournamentRules
