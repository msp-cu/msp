function QuarterFinals({ matches = [] }) {
  const quarterMatches = matches.filter(
    match => match.stage === "QF"
  )

  if (!quarterMatches.length) return null

  return (
    <section className="text-white p-10">
      <h2 className="text-2xl font-bold mb-12 text-neonPink tracking-widest">
        QUARTER FINALS
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {quarterMatches.map(match => (
          <div
            key={match.matchId}
            className="
              relative
              border border-neonPink/60
              rounded-xl
              p-6
              bg-black/80
              shadow-[0_0_25px_rgba(236,72,153,0.25)]
            "
          >
            {/* Stage badge */}
            <span className="
              absolute -top-3 left-6
              bg-black px-3 py-1
              text-xs tracking-widest
              text-neonPink
              border border-neonPink/50
              rounded
            ">
              QUARTER FINAL
            </span>

            {/* Teams + Score */}
            <div className="flex justify-between items-center mt-6">
              {/* Team A */}
              <div className="text-center flex-1">
                <p className="font-semibold text-lg">
                  {match.teamA}
                </p>
                <span className="text-sm text-neonBlue/70">
                  Group {match.groupA}
                </span>
              </div>

              {/* Score */}
              <div className="px-6 text-xl font-bold text-neonPink">
                {match.scoreA} : {match.scoreB}
              </div>

              {/* Team B */}
              <div className="text-center flex-1">
                <p className="font-semibold text-lg">
                  {match.teamB}
                </p>
                <span className="text-sm text-neonBlue/70">
                  Group {match.groupB}
                </span>
              </div>
            </div>

            {/* Winner */}
            {match.winner && (
              <p className="text-center mt-6 text-neonGreen tracking-wide">
                WINNER: <span className="font-semibold">{match.winner}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default QuarterFinals
