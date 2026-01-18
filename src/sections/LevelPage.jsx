import { useParams } from "react-router-dom"

function LevelPage() {
  const { id } = useParams()

  return (
    <section className="min-h-screen bg-darkBg flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-pixel text-neonBlue text-2xl mb-6">
          LEVEL {id}
        </h1>

        <p className="text-white/70">
          Welcome to Level {id} page
        </p>
      </div>
    </section>
  )
}

export default LevelPage
