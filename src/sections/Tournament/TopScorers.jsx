import { useState, useEffect, useMemo } from "react"

const API_URL =
  "https://script.google.com/macros/s/AKfycbyFRq-LGzQmqJl6yyht9DizcCPuR8y22K3Qj8Fk92nRe8R8g9P_HAVUOrmtIcMfS1-7/exec"

function TopScorersSystem() {
  const [players, setPlayers] = useState([])
  const [selectedTeam, setSelectedTeam] = useState("All")
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchPlayers = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setPlayers(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchPlayers()
    const interval = setInterval(fetchPlayers, 10000)
    return () => clearInterval(interval)
  }, [])

  const teams = [...new Set(players.map(p => p.team))]

  const filtered =
    selectedTeam === "All"
      ? players
      : players.filter(p => p.team === selectedTeam)

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => b.goals - a.goals)
  }, [filtered])

  const vote = async (id) => {
    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ playerId: id }),
    })

    fetchPlayers()
  }

  return (
    <section className="max-w-6xl mx-auto py-24 text-center">

      {/* TITLE */}
      <h2 className="font-pixel text-3xl text-neonPink mb-10 tracking-widest animate-pulse drop-shadow-[0_0_12px_#ff00ff]">
        ⚽ TOP SCORERS
      </h2>

      {/* FILTER */}
      <div className="flex justify-center mb-12">
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="
            bg-black/60 backdrop-blur-md
            border border-neonBlue
            text-white
            px-6 py-3
            rounded-xl
            shadow-[0_0_12px_#00f0ff]
            hover:shadow-[0_0_20px_#00f0ff]
            transition
            font-semibold
          "
        >
          <option value="All">All Teams</option>
          {teams.map((team, i) => (
            <option key={i} value={team}>{team}</option>
          ))}
        </select>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-2xl border border-neonBlue shadow-[0_0_25px_#00f0ff] bg-black/40 backdrop-blur-lg">
        {loading ? (
          <p className="text-white py-12 font-semibold animate-pulse">
            Loading Players...
          </p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="bg-neonBlue/10 text-neonBlue text-sm uppercase tracking-wider">
                <th className="p-4">#</th>
                <th className="p-4">Player</th>
                <th className="p-4">Team</th>
                <th className="p-4">Goals</th>
                <th className="p-4">Votes</th>
              </tr>
            </thead>

            <tbody>
              {sorted.map((player, index) => (
                <tr
                  key={player.id}
                  onClick={() => setSelectedPlayer(player)}
                  className={`
                    cursor-pointer
                    transition-all duration-300
                    border-t border-white/10
                    hover:bg-neonPink/10
                    ${index === 0
                      ? "bg-yellow-400/10 shadow-[0_0_30px_gold] scale-[1.01]"
                      : ""}
                  `}
                >
                  <td className="p-4 font-bold text-neonBlue">
                    {index + 1}
                  </td>

                  <td className="p-4 font-bold text-white">
                    {player.name}
                  </td>

                  <td className="p-4 text-neonBlue font-semibold">
                    {player.team}
                  </td>

                  <td className="p-4 text-yellow-400 font-bold text-lg">
                    {player.goals}
                  </td>

                  <td className="p-4 text-pink-400 font-bold">
                    {player.votes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* PLAYER POPUP */}
      {selectedPlayer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">

          <div className="
            bg-black/80
            border border-neonPink
            rounded-2xl
            p-10
            w-96
            shadow-[0_0_40px_#ff00ff]
            text-center
            animate-fadeIn
          ">

            <h3 className="text-2xl font-pixel text-neonPink mb-6 tracking-widest">
              PLAYER PROFILE
            </h3>

            <p className="text-white text-lg font-bold mb-2">
              {selectedPlayer.name}
            </p>

            <p className="text-neonBlue font-semibold">
              Team: {selectedPlayer.team}
            </p>

            <p className="text-yellow-400 text-xl font-bold mt-4">
              ⚽ {selectedPlayer.goals} Goals
            </p>

            <p className="text-pink-400 font-bold mt-2">
              🏆 {selectedPlayer.votes} Votes
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4 mt-8">

              <button
                onClick={() => vote(selectedPlayer.id)}
                className="
                  py-3
                  rounded-xl
                  bg-neonPink
                  text-black
                  font-bold
                  shadow-[0_0_20px_#ff00ff]
                  hover:scale-105
                  hover:shadow-[0_0_30px_#ff00ff]
                  transition
                "
              >
                Vote MVP 🏆
              </button>

              <button
                onClick={() => setSelectedPlayer(null)}
                className="
                  py-3
                  rounded-xl
                  border border-neonBlue
                  text-neonBlue
                  font-bold
                  hover:bg-neonBlue/10
                  hover:shadow-[0_0_20px_#00f0ff]
                  transition
                "
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}
    </section>
  )
}

export default TopScorersSystem
