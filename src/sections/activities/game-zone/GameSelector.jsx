import { Link } from "react-router-dom"
 function GameSelector() {
    const games = [
    { id: "memory", name: "Memory Game", path: "./games/MemoryGame" },
    { id: "reaction", name: "Reaction Game", path: "./games/ReactionGame" },
    { id: "typing", name: "Typing Game", path: "./games/TypingGame" },
    { id: "movies", name: "Movies Guess Game", path: "./games/MovieGuessGame" },
    { id: "quiz", name: "MSP Quiz Game", path: "./games/MSPQuizGame" },
    { id: "puzzle", name: "Puzzle Game", path: "./games/PuzzleGame" },
  ]
    return (
    <section className="min-h-screen bg-black text-center py-24">
      <h2 className="font-pixel text-neonPink text-2xl mb-12">
        CHOOSE YOUR GAME
      </h2>

      <div className="grid gap-6 max-w-md mx-auto">
        {games.map(game => (
          <Link
            key={game.id}
            to={game.path}
            className="
              border-2 border-neonPink py-6
              font-pixel text-neonPink
              hover:bg-neonPink hover:text-black
              shadow-[0_0_25px_#ff2fd2]
            "
          >
            {game.name}
          </Link>
        ))}
      </div>
    </section>
    
  )
}
 export default GameSelector