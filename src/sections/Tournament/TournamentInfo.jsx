import { tournament } from "../../Data/tournament"

function TournamentInfo() {
  return (
    <section className="max-w-5xl mx-auto py-20 grid md:grid-cols-4 gap-6 text-center">
      {[
        { label: "TEAMS", value: tournament.teams },
        { label: "FORMAT", value: tournament.format },
        { label: "PLAYERS", value: "5v5" },
        { label: "START", value: tournament.startDate },
      ].map((item) => (
        <div
          key={item.label}
          className="
            border-2 border-neonPink p-6
            font-pixel text-xs
            shadow-[0_0_15px_#ff2fd2]
          "
        >
          <p className="text-neonBlue mb-2">{item.label}</p>
          <p className="text-neonPink">{item.value}</p>
        </div>
      ))}
    </section>
  )
}

export default TournamentInfo
