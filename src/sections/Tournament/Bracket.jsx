import { useEffect, useState } from "react"
import Match from "./Match"

function Bracket() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/1aoUWQsoagp5EvNMhnLVJRdXA7I9RHyai0QgKhDnSIa4/gviz/tq?tqx=out:json&sheet=Bracket"
    )
      .then(res => res.text())
      .then(text => {
        const json = JSON.parse(
          text.substring(47).slice(0, -2)
        )
        const rows = json.table.rows.map(r => ({
          matchId: r.c[0]?.v,
          round: r.c[1]?.v,
          teamA: r.c[2]?.v,
          teamB: r.c[3]?.v,
          winner: r.c[4]?.v,
        }))
        setMatches(rows)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <section className="py-32 bg-black text-center">
      <h2 className="font-pixel text-neonPink text-xl mb-12">
        TOURNAMENT BRACKET
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {matches.map(match => (
          <Match
            key={match.matchId}
            teamA={match.teamA}
            teamB={match.teamB}
            winner={match.winner}
          />
        ))}
      </div>
    </section>
  )
}

export default Bracket
