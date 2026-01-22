function QuarterFinals({ matches = [] }) {
  const quarterMatches = matches.filter(
    match => match.stage === "QF"
  )

  if (!quarterMatches.length) return null

  return (
    <section className="text-white p-10">
      <h2 className="text-2xl font-bold mb-12 text-neonYellow tracking-widest font-pixel">
        QUARTER FINALS
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {quarterMatches.map(match => (
          <div
            key={match.matchId}
            className="
              relative
              border border-neonBlue/60
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
              text-neonBlue
              border border-neonBlue/50
              rounded
              font-pixel
            ">
              QUARTER FINAL
            </span>

            {/* Teams + Score */}
            <div className="flex justify-between items-center mt-6 font-pixel">
              {/* Team A */}
              <div className="text-center flex-1 font-pixel">
                <p className="font-semibold text-lg font-pixel">
                  {match.teamA}
                </p>
                <span className="text-sm text-white/70 font-pixel">
                  Group {match.groupA}
                </span>
              </div>

              {/* Score */}
              <div className="px-6 text-xl font-bold text-neonBlue font-pixel">
                {match.scoreA} : {match.scoreB}
              </div>

              {/* Team B */}
              <div className="text-center flex-1 font-pixel">
                <p className="font-semibold text-lg font-pixel">
                  {match.teamB}
                </p>
                <span className="text-sm text-white/70 font-pixel">
                  Group {match.groupB}
                </span>
              </div>
            </div>

            {/* Winner */}
            {match.winner && (
              <p className="text-center mt-6 text-neonGreen tracking-wide font-pixel">
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
