import { useNavigate } from "react-router-dom"

function BackToGamesButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate("/activities")}
      className="
        fixed top-6 left-6 z-50
        border-2 border-neonPink px-4 py-2
        font-pixel text-xs text-neonPink
        hover:bg-neonPink hover:text-black
        shadow-[0_0_20px_#ff2fd2]
      "
    >
      ⬅ GAME ZONE
    </button>
  )
}

export default BackToGamesButton
