function ThirdPlace({ matches = [] }) {
  const match = matches.find(
    match => match.stage === "THIRD"
  )

  if (!match) return null

  return (
    <section className="text-white p-12">
      <h2 className="
        text-2xl mb-10 text-center
        text-orange-400 tracking-widest
      ">
        THIRD PLACE MATCH
      </h2>

      <div className="
        max-w-2xl mx-auto
        border border-orange-400/60
        rounded-xl
        p-8
        bg-black/80
        shadow-[0_0_40px_rgba(251,146,60,0.35)]
      ">
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>{match.teamA}</span>
          <span className="text-orange-400">
            {match.scoreA ?? "-"} : {match.scoreB ?? "-"}
          </span>
          <span>{match.teamB}</span>
        </div>

        {match.winner && (
          <p className="mt-6 text-center text-orange-400">
            🥉 THIRD PLACE:{" "}
            <span className="font-semibold">{match.winner}</span>
          </p>
        )}
      </div>
    </section>
  )
}

export default ThirdPlace
