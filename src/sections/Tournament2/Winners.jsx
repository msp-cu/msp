function Winners({ matches = [] }) {
  const finalMatch = matches.find(m => m.stage === "FINAL")
  const thirdPlaceMatch = matches.find(m => m.stage === "THIRD")

  if (!finalMatch?.winner) return null

  const champion = finalMatch.winner
  const runnerUp =
    finalMatch.teamA === champion
      ? finalMatch.teamB
      : finalMatch.teamA

  const thirdPlace = thirdPlaceMatch?.winner

  return (
    <section className="text-white p-16 text-center font-pixel">
      <h2 className="
        text-4xl mb-16
        text-neonYellow tracking-widest font-pixel
      ">
        TOURNAMENT WINNERS
      </h2>

      <div className="
        grid md:grid-cols-3 gap-10
        max-w-6xl mx-auto
      ">
        {/* Champion */}
        <div className="
          border border-yellow-400/70
          rounded-2xl p-10
          bg-black/90
          shadow-[0_0_50px_rgba(250,204,21,0.45)]
        ">
          <p className="text-5xl mb-4">🏆</p>
          <h3 className="text-2xl text-yellow-400 tracking-wider">
            CHAMPION
          </h3>
          <p className="mt-4 text-lg font-semibold">
            {champion}
          </p>
        </div>

        {/* Runner Up */}
        <div className="
          border border-white/40
          rounded-2xl p-10
          bg-black/80
          shadow-[0_0_35px_rgba(255,255,255,0.25)]
        ">
          <p className="text-5xl mb-4">🥈</p>
          <h3 className="text-2xl tracking-wider">
            RUNNER UP
          </h3>
          <p className="mt-4 text-lg font-semibold">
            {runnerUp}
          </p>
        </div>

        {/* Third Place */}
        {thirdPlace && (
          <div className="
            border border-orange-400/70
            rounded-2xl p-10
            bg-black/80
            shadow-[0_0_35px_rgba(251,146,60,0.4)]
          ">
            <p className="text-5xl mb-4">🥉</p>
            <h3 className="text-2xl text-orange-400 tracking-wider">
              THIRD PLACE
            </h3>
            <p className="mt-4 text-lg font-semibold">
              {thirdPlace}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Winners
