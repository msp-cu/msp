import { useState } from "react"
import TournamentIntro from "../sections/Tournament2/TournamentIntro"
import TournamentHub from "../sections/Tournament2/TournamentHub"

function Tournament2() {
  const [entered, setEntered] = useState(false)

  if (!entered) {
    return <TournamentIntro onEnter={() => setEntered(true)} />
  }

  return <TournamentHub />
}

export default Tournament2
