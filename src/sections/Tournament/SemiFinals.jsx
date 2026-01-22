function SemiFinals({ matches = [] }) {
  const semiMatches = matches.filter(
    match => match.stage === "SF"
  )

  if (!semiMatches.length) return null

  return (
    <section className="text-white p-10">
      <h2 className="text-2xl font-bold mb-12 text-neonBlue tracking-widest">
        SEMI FINALS
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {semiMatches.map(match => (
          <div
            key={match.matchId}
            className="
              relative
              border border-neonBlue/60
              rounded-xl
              p-6
              bg-black/80
              shadow-[0_0_30px_rgba(34,211,238,0.3)]
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
            ">
              SEMI FINAL
            </span>

            {/* Teams + Score */}
            <div className="flex justify-between items-center mt-6">
              {/* Team A */}
              <div className="text-center flex-1">
                <p className="font-semibold text-lg">
                  {match.teamA}
                </p>
                <span className="text-sm text-neonPink/70">
                  Group {match.groupA || "-"}
                </span>
              </div>

              {/* Score */}
              <div className="px-6 text-xl font-bold text-neonBlue">
                {match.scoreA ?? "-"} : {match.scoreB ?? "-"}
              </div>

              {/* Team B */}
              <div className="text-center flex-1">
                <p className="font-semibold text-lg">
                  {match.teamB}
                </p>
                <span className="text-sm text-neonPink/70">
                  Group {match.groupB || "-"}
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

export default SemiFinals
