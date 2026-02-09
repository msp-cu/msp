import { useState } from "react"
import GameZoneIntro from "../sections/activities/game-zone/GameZoneIntro"
import GameSelector from "../sections/activities/game-zone/GameSelector"

export default function Activities() {
  const [entered, setEntered] = useState(false)

  if (!entered) {
    return <GameZoneIntro onEnter={() => setEntered(true)} />
  }

  return <GameSelector />
}
