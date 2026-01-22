function Match({ teamA, teamB, winner }) {
  return (
    <div className="border-2 border-neonPink p-4 text-xs font-pixel bg-black">
      <p className={winner === teamA ? "text-neonGreen" : "text-white"}>
        {teamA}
      </p>

      <p className="text-white/40 text-center my-1">VS</p>

      <p className={winner === teamB ? "text-neonGreen" : "text-white"}>
        {teamB}
      </p>
    </div>
  )
}

export default Match
