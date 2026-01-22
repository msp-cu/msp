import { useState , useEffect } from "react"
import Standings from "./Standings"
import QuarterFinals from "./QuarterFinals"
import SemiFinals from "./SemiFinals"
import Final from "./Final"
import Winners from "./Winners"
import { KNOCKOUT_MATCHES_API } from "../../api/knockoutMatchesApi"
import TournamentHero from "./TournamentHero"
import TournamentInfo from "./TournamentInfo"
import OverView from "./Overview"
import Navbar from "../../components/Navbar2"
function MobileTournament() {
  
  useEffect(() => {
    fetch(KNOCKOUT_MATCHES_API)
      .then(res => res.json())
      .then(data => {
        console.log("🔥 KNOCKOUT DATA", data)
        setMatches(data)
      })
  }, [])
  const tabs = ["Overview","Groups", "QuarterFinals","SemiFinals", "Final", "Winners"]
  const [activeTab, setActiveTab] = useState("Groups")
   const [matches, setMatches] = useState([])

  return (
    
    <section className="md:hidden min-h-screen bg-black text-white">
{/* Background Motion */}
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover opacity-10"
        src="/video/worldcup.mp4"
      />
      <audio
      autoPlay
      loop
      src="/audio/fifa-theme.mp3"
      />

<Navbar/>
      {/* Header */}
      <div
        className="relative h-40 flex items-end justify-center"
        style={{
          backgroundImage: "url('/images/mobile-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <h1 className="relative font-pixel text-neonYellow text-lg mb-4">
          MSP Tournament Mode
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-around border-b border-neonPink text-xs font-pixel">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              py-3 flex-1
              ${activeTab === tab
                ? "text-neonPink border-b-2 border-neonPink"
                : "text-white/60"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
          {activeTab === "Overview" && (
           <> 
           <TournamentHero/>
            <TournamentInfo/>
            <OverView />
            </>
          )}
        {activeTab === "Groups" && <Standings />}
        {activeTab === "QuarterFinals" && <QuarterFinals matches={matches} />}
        {activeTab === "SemiFinals" && <SemiFinals matches={matches} />}
        {activeTab === "Final" && <Final matches={matches} />}
        {activeTab === "Winners" && <Winners matches={matches} />}
      </div>
    </section>
  )
}

export default MobileTournament
