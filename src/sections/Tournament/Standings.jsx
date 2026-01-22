import { useEffect, useState } from "react"
import { STANDINGS_API } from "../../api/standingsApi"

function Standings({ onLoaded }) {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch(STANDINGS_API)
      .then(res => res.json())
      .then(data => {
        setTeams(data)
        if (onLoaded) onLoaded(data)
      })
  }, [])

  const groups = teams.reduce((acc, team) => {
    acc[team.group] = acc[team.group] || []
    acc[team.group].push(team)
    return acc
  }, {})

  Object.values(groups).forEach(group => {
    group.sort((a, b) =>
      b.points - a.points ||
      (b.goalsFor - b.goalsAgainst) -
        (a.goalsFor - a.goalsAgainst) ||
      b.goalsFor - a.goalsFor
    )
  })

  return (
    <section className="p-12">
      <h2 className="
        text-3xl mb-16 text-center
        font-pixel tracking-widest
        text-neonPink
      ">
        GROUP STANDINGS
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {Object.keys(groups).map(group => (
          <div
            key={group}
            className="
              relative
              border border-neonPink/60
              rounded-2xl
              p-6
              bg-black/80
              shadow-[0_0_35px_rgba(236,72,153,0.35)]
            "
          >
            {/* Group Label */}
            <span className="
              absolute -top-4 left-6
              bg-black px-4 py-1
              text-sm tracking-widest
              text-neonBlue
              border border-neonBlue/60
              rounded
            ">
              GROUP {group}
            </span>

            <table className="w-full text-sm text-white mt-6">
              <thead>
                <tr className="text-neonPink border-b border-white/20">
                  <th className="text-left py-2">Team</th>
                  <th>P</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>Pts</th>
                </tr>
              </thead>

              <tbody>
                {groups[group].map((team, index) => {
                  const qualified = index < 2

                  return (
                    <tr
                      key={team.team}
                      className={`
                        text-center
                        border-b border-white/10
                        hover:bg-white/5
                        transition
                        ${qualified ? "text-neonGreen" : ""}
                      `}
                    >
                      <td className="text-left py-2 font-semibold">
                        {team.team}
                      </td>
                      <td>{team.played}</td>
                      <td>{team.wins}</td>
                      <td>{team.draws}</td>
                      <td>{team.losses}</td>
                      <td>{team.goalsFor}</td>
                      <td>{team.goalsAgainst}</td>
                      <td className="font-bold">
                        {team.points}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Standings
