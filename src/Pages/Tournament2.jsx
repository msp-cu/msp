import { useState, useEffect } from "react"
import TournamentIntro from "../sections/Tournament2/TournamentIntro"
import TournamentHub from "../sections/Tournament2/TournamentHub"
import MobileTournament from "../sections/Tournament2/MobileTournament"

function Tournament2({ matches }) {
  const [entered, setEntered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // 1️⃣ Intro Screen
  if (!entered) {
    return <TournamentIntro onEnter={() => setEntered(true)} />
  }

  // 2️⃣ Tournament Mode
  return (
    <>
      {isMobile ? (
        <MobileTournament matches={matches} />
      ) : (
        <TournamentHub matches={matches} />
      )}
    </>
  )
}

export default Tournament2
