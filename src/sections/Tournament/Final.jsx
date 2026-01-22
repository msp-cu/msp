function Final({ matches = [] }) {
  const finalMatch = matches.find(
    match => match.stage === "FINAL"
  )

  if (!finalMatch) return null

  return (
    <section className="text-white p-12">
      <h2 className="
        text-3xl mb-14 text-center
        text-yellow-400 tracking-widest font-bold
      ">
        GRAND FINAL
      </h2>

      <div className="
        relative max-w-3xl mx-auto
        border border-yellow-400/70
        rounded-2xl
        p-10
        bg-black/90
        shadow-[0_0_60px_rgba(250,204,21,0.4)]
      ">
        {/* Badge */}
        <span className="
          absolute -top-4 left-1/2 -translate-x-1/2
          bg-black px-4 py-1
          text-sm tracking-widest
          text-yellow-400
          border border-yellow-400/60
          rounded
        ">
          FINAL MATCH
        </span>

        {/* Teams */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex-1 text-center">
            <p className="text-xl font-semibold">{finalMatch.teamA}</p>
          </div>

          <div className="px-8 text-3xl font-bold text-yellow-400">
            {finalMatch.scoreA ?? "-"} : {finalMatch.scoreB ?? "-"}
          </div>

          <div className="flex-1 text-center">
            <p className="text-xl font-semibold">{finalMatch.teamB}</p>
          </div>
        </div>

        {/* Winner */}
        {finalMatch.winner && (
          <p className="
            mt-10 text-center text-2xl
            text-neonGreen tracking-wide
          ">
            🏆 CHAMPION:{" "}
            <span className="font-bold">
              {finalMatch.winner}
            </span>
          </p>
        )}
      </div>
    </section>
  )
}

export default Final
