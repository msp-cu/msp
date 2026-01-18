import { useState } from "react"
import { Link } from "react-router-dom"
import { Volume2, VolumeX } from "lucide-react"
import { toggleMute } from "../utils/sound"

function Navbar() {
  const [muted, setMuted] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur border-b border-neonPink">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo + Name */}
        <Link
  to="/"
  className="flex items-center gap-3 hover:opacity-90 transition"
>
  <img
    src="/logo.png"
    alt="MSP Logo"
    className="
      w-11 h-11
      object-contain
      drop-shadow-[0_0_6px_#ff2fd2]
    "
  />
  <h1 className="font-pixel text-neonPink text-sm leading-none">
    MSP-CU
  </h1>
</Link>


        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 font-pixel text-xs text-white/70">
          <li>
            <a href="#about" className="hover:text-neonPink transition">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-neonPink transition">
              EVENTS
            </a>
          </li>
          <li>
            <a href="#team" className="hover:text-neonPink transition">
              TEAM
            </a>
          </li>

          {/* Mute + Join */}
          <li className="flex items-center gap-4">

            {/* Mute Button */}
            <button
              onClick={() => setMuted(toggleMute())}
              className="
                text-neonPink
                hover:text-white
                transition
                drop-shadow-[0_0_6px_#ff2fd2]
              "
              title={muted ? "Unmute" : "Mute"}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* Join Button */}
            <Link
              to="/join"
              className="
                text-neonPink
                border border-neonPink
                px-4 py-2
                leading-none
                hover:bg-neonPink hover:text-black
                transition-all
              "
            >
              JOIN US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
