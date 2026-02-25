import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import Home from "./Pages/Home"
import Join from "./Pages/Join"
import Tournament from "./Pages/Tournament"
import TournamentRegister from "./Pages/TournamentRegister"
import {stopBackgroundMusic,startBackgroundMusic,} from "./utils/sound"
import Tournament2 from "./Pages/Tournament2"
import Activities from "./Pages/Activities"
import MemoryGame from "./sections/activities/games/MemoryGame"
import ReactionGame from "./sections/activities/games/ReactionGame"
import TypingGame from "./sections/activities/games/TypingGame"
import MovieGuessGame from "./sections/activities/games/MovieGuessGame"
import MSPQuizGame from "./sections/activities/games/MSPQuizGame"
import PuzzleGame from "./sections/activities/games/PuzzleGame"
import TopPlayers from "./Pages/TopPlayers"
import Matches_Center from "./Pages/Matches"

function App() {

  // 🔇 Global sound control (كل الموقع)
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        stopBackgroundMusic()
      } else {
        startBackgroundMusic()
      }
    }

    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<Join />} />
      <Route path="/tournament" element={<Tournament />} />
      <Route path="/tournament/register" element={<TournamentRegister />} />
      <Route path="/tournament2" element={<Tournament2 />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/activities/games/MemoryGame" element={<MemoryGame />} />
      <Route path="/activities/games/ReactionGame" element={<ReactionGame />} />
      <Route path="/activities/games/TypingGame" element={<TypingGame />} />
      <Route path="/activities/games/MovieGuessGame" element={<MovieGuessGame />} />
      <Route path="/activities/games/MSPQuizGame" element={<MSPQuizGame />} />
      <Route path="/activities/games/PuzzleGame" element={<PuzzleGame />} />
      <Route path="/topplayers" element={<TopPlayers />} />
      <Route path="/matches" element={<Matches_Center />} />
      <Route path="/tournamentegistration" element={<TournamentRegister />} />
    </Routes>
  )
}

export default App
