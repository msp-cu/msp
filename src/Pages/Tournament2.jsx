import { useState, useEffect } from "react"
import TournamentIntro from "../sections/Tournament2/TournamentIntro"
import TournamentHub from "../sections/Tournament2/TournamentHub"
import MobileTournament from "../sections/Tournament2/MobileTournament"


function Tournament2({matches}) {

const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])
  
  const [entered, setEntered] = useState(false)
  if (!entered) {
    return <TournamentIntro onEnter={() => setEntered(true)} />
  }

  return <TournamentHub />
   
      {isMobile
        ? <MobileTournament matches={matches} />
        : <DesktopTournament matches={matches} />}
    
}
  
  
export default Tournament2
