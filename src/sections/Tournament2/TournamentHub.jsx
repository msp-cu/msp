import { useState , useEffect } from "react"
import TabsNavigation from "./TabsNavigation"
import Standings from "./Standings"
import QuarterFinals from "./QuarterFinals"
import SemiFinals from "./SemiFinals"
import Final from "./Final"
import Winners from "./Winners"
import { KNOCKOUT_MATCHES_API } from "../../api/knockoutMatchesApi"
import ThirdPlace from "./ThirdPlace"
import OverView from "./Overview"
import TournamentInfo from "./TournamentInfo"
import TournamentHero from "../Tournament2/TournamentHero"
import Navbar from "../../components/Navbar2"


function TournamentHub() {
  const [activeTab, setActiveTab] = useState("Overview")
  const [matches, setMatches] = useState([])

useEffect(() => {
  fetch(KNOCKOUT_MATCHES_API)
    .then(res => res.json())
    .then(data => {
      console.log("🔥 KNOCKOUT DATA", data)
      setMatches(data)
    })
}, [])


  return (
    
    <section className="min-h-screen bg-[#0B132B] text-white">
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

      <div className="relative z-10 pt-28 max-w-7xl mx-auto">
        <TabsNavigation
          active={activeTab}
          onChange={setActiveTab}
        />

        {/* TAB CONTENT */}
        <div className="mt-12">
          {activeTab === "Overview" && (
           <> 
           <TournamentHero/>
            <TournamentInfo/>
            <OverView />
            </>
          )}

          {activeTab === "Groups" && (
            <>
             
              <Standings />
            </>
          )}
          {activeTab === "QUARTER FINALS" && (
            <>
              <QuarterFinals matches={matches} />
          



            </>
          )}
          {activeTab === "Semi Finals" && (
            <>
              
              <SemiFinals matches={matches} />



            </>
          )}
          {activeTab === "Third Place" && <ThirdPlace matches={matches} />}
          {activeTab === "Final" && <Final matches={matches} />}

          {activeTab === "Winners" && <Winners matches={matches} />}
        </div>
      </div>
    </section>
  )
}

export default TournamentHub
