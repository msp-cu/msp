import { useEffect, useRef } from "react"
import Navbar from "../../components/Navbar2"

function TournamentIntro({ onEnter }) {
  const audioRef = useRef(null)

  const handleEnter = () => {
    audioRef.current.volume = 0.4
    audioRef.current.play()
    onEnter()
  }

  return (


    <div className="fixed inset-0 z-50">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/worldcup.mp4"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B132B]/70 flex flex-col items-center justify-center text-center font-pixel">
        <h1 className="text-5xl font-bold text-neonYellow mb-6 tracking-widest">
          MSP Ramadan Tournament
        </h1>

        <p className="text-white/80 mb-12 text-lg font-pixel">
          Tournament Mode
        </p>
<Navbar/>
        <button
          onClick={handleEnter}
          className="px-10 py-4 border-2 border-neonYellow text-neonYellow 
                     hover:bg-neonYellow hover:text-black transition-all 
                     tracking-widest text-sm"
        >
          ENTER TO TOURNAMENT
        </button>
      </div>

      {/* Audio */}
      <audio
        ref={audioRef}
        src="/audio/fifa-theme.mp3"
        loop
      />
    </div>
  )
}

export default TournamentIntro
