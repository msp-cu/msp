import { useEffect, useState } from "react"


const API_URL =
  "https://script.google.com/macros/s/AKfycbzhkBp_69Tmwo0-I5dbkNk4w91Kzj-F_sY6hP6cJ_hQRbUqngSdtMMBIOzAbaqB6h68/exec?type=matches"

function MatchesSection() {
  const [matches, setMatches] = useState([])
  const [now, setNow] = useState(new Date())
  const [filter, setFilter] = useState("today")

  const fetchMatches = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMatches(data))
  }

  useEffect(() => {
    fetchMatches()
    const interval = setInterval(fetchMatches, 15000)
    const clock = setInterval(() => setNow(new Date()), 1000)

    return () => {
      clearInterval(interval)
      clearInterval(clock)
    }
  }, [])

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  }

  const filterMatches = () => {
    return matches.filter(match => {
      const matchDate = new Date(match.date)
      const tomorrow = new Date(now)
      tomorrow.setDate(now.getDate() + 1)

      const upcoming = new Date(now)

    

      if (filter === "today") return isSameDay(matchDate, now)
      if (filter === "tomorrow") return isSameDay(matchDate, tomorrow)
      if (filter === "upcoming") return isSameDay(matchDate, upcoming) || matchDate > tomorrow

      return true
    })
  }

  const getMatchStatus = (match) => {
    const matchDateTime = new Date(`${match.date}T${match.time}:00`)
    const diff = matchDateTime - now

    if (diff > 0) return "upcoming"
    if (diff <= 0 && diff > -7200000) return "live"
    return "finished"
  }

  const getCountdown = (match) => {
    const matchDateTime = new Date(`${match.date}T${match.time}:00`)
    const diff = matchDateTime - now

    if (diff <= 0) return null

    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    return `${hours}:${minutes}:${seconds}`
  }

  return (
    
    <section className="max-w-5xl mx-auto py-20 px-6">

      <h2 className="text-center text-4xl font-bold text-cyan-400 mb-10 tracking-wider">
        MATCH CENTER
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12">
        {["today", "tomorrow", "upcoming"].map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-6 py-2 rounded-full font-bold transition
              ${filter === tab
                ? "bg-cyan-400 text-black shadow-lg"
                : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-6">

        {filterMatches().map(match => {
          const status = getMatchStatus(match)
          const countdown = getCountdown(match)

          return (
            <div 
              key={match.id}
              className={` 
                bg-gradient-to-r from-black via-gray-900 to-black
                border border-cyan-400/40
                rounded-2xl
                p-6
                flex flex-col md:flex-row
                items-center justify-between
                shadow-lg
                transition hover:scale-[1.02]
                ${status === "live" ? "ring-2 ring-red-500 animate-pulse" : ""}
              `}
              
            >
              {/* Team A */}
              <div className="flex-1 text-center md:text-left">
                <div className="text-white font-bold text-lg">
                  {match.teamA}
                </div>
              </div>

              {/* Center Score */}
              <div className="flex flex-col items-center mx-6">

                {status === "finished" || status === "live" ? (
                  <div className="text-3xl font-bold text-yellow-400 tracking-widest">
                    {match.scoreA} - {match.scoreB}
                  </div>
                ) : (
                  <div className="text-2xl text-cyan-400 font-mono">
                    {countdown}
                  </div>
                )}

                <div className="mt-2 text-xs font-bold">
                  {status === "live" && <span className="text-red-500">LIVE</span>}
                  {status === "finished" && <span className="text-green-400">FINISHED</span>}
                  {status === "upcoming" && <span className="text-yellow-400">UPCOMING</span>}
                </div>

                <div className="text-white/50 text-xs mt-2">
                  {match.time} • {match.stadium}
                </div>
              </div>

              {/* Team B */}
              <div className="flex-1 text-center md:text-right">
                <div className="text-white font-bold text-lg">
                  {match.teamB}
                </div>
              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}

export default MatchesSection