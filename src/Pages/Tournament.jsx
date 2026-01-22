import {useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import TournamentHero from "../sections/Tournament/TournamentHero"
import TournamentInfo from "../sections/Tournament/TournamentInfo"
import TournamentRules from "../sections/Tournament/TournamentRules"
import Standings from "../sections/Tournament/Standings"
import { getQualifiedTeams } from "../utils/getQualifiedTeams"
import { buildQuarterFinals } from "../utils/buildQuarterFinals"
import QuarterFinals from "../sections/Tournament/QuarterFinals"
import { KNOCKOUT_MATCHES_API } from "../api/knockoutMatchesApi"
import SemiFinals from "../sections/Tournament/SemiFinals"
import Final from "../sections/Tournament/Final"
import ThirdPlace from "../sections/Tournament/ThirdPlace"
import Winners from "../sections/Tournament/Winners"
// import Bracket  from "../sections/Tournament/Bracket"
// import TeamsTest from "../sections/Tournament/TeamsTest"
// import Groups from "../sections/Tournament/Groups"
// import  Brackets  from "../sections/Tournament/Bracket"

function Tournament() {
  const [standingsData, setStandingsData] = useState([])

  const qualifiedTeams = getQualifiedTeams(standingsData)
  const [knockoutMatches, setKnockoutMatches] = useState([])

useEffect(() => {
  fetch(KNOCKOUT_MATCHES_API)
    .then(res => res.json())
    .then(data => {
      console.log("🔥 KNOCKOUT MATCHES", data)
      setKnockoutMatches(data)
    })
}, [])


  console.log("✅ QUALIFIED TEAMS", qualifiedTeams)
  const quarterFinals = buildQuarterFinals(qualifiedTeams)
  console.log("🏆 QUARTER FINALS", quarterFinals)

  return (
    <div className="min-h-screen bg-black pt-24">
      <Navbar />
      <TournamentHero />
      <TournamentInfo />
      <TournamentRules />
      {/* <TeamsTest /> */}
      <Standings onLoaded={setStandingsData} />
      {/* <QuarterFinals matches={quarterFinals} /> */}
      <QuarterFinals matches={knockoutMatches} />
      <SemiFinals matches={knockoutMatches} />
      <Final matches={knockoutMatches} />
      <ThirdPlace matches={knockoutMatches} />
      <Winners matches={knockoutMatches} />

      {/* { <Bracket /> } */}
      {/* <Groups/> */}
      <Footer />
    </div>
  )
}

export default Tournament
