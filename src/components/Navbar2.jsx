import { useState } from "react"
import { Link } from "react-router-dom"
import { Volume2, VolumeX, Menu, X } from "lucide-react"
import { toggleMute } from "../utils/sound"
import { useLocation, useNavigate } from "react-router-dom"


function Navbar() {
  const [open, setOpen] = useState(false)
  const [muted, setMuted] = useState(false)
  const location = useLocation()
const navigate = useNavigate()

const goToSection = (id) => {
  if (location.pathname !== "/") {
    navigate("/", { state: { scrollTo: id } })
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }
}




  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B132B]/80 backdrop-blur border-b border-neonYellow">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="MSP Logo"
              className="w-10 h-10 object-contain drop-shadow-[0_0_6px_bg-[#0B132B]]"
            />
            <span className="font-pixel text-neonYellow text-sm">
              MSP CU
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-pixel text-xs text-white/70">
            <li><button onClick={() => navigate("/tournament")} className="hover:text-neonPink">Tournament</button></li>
            <li><button onClick={() => navigate("/topplayers")} className="hover:text-neonPink">Top Scorers</button></li>
            {/* <li><button onClick={() => navigate("/matches")} className="hover:text-neonPink">Matches Center</button></li> */}

            {/* Join */}
            <Link
              to="/tournamentegistration"
              className="border border-neonYellow px-4 py-2 hover:bg-neonYellow hover:text-black transition"
            >
              Team Registration
            </Link>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-neonPink"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center gap-10 font-pixel text-neonPink text-xl">

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6"
          >
            <X size={30} />
          </button>

          <button
  onClick={() => {
    setOpen(false)
    navigate("/tournament")
  }}
>
  Tournament
</button>

<button
  onClick={() => {
    setOpen(false)
    navigate("/topplayers")
  }}
>
  Top Scorers
</button>

{/* <button
  onClick={() => {
    setOpen(false)
    navigate("/matches")
  }}
>
  Matches Center
</button> */}
<button
  onClick={() => {
    setOpen(false)
    navigate("/tournamentegistration")
  }}
>
  Team Registration
</button>

        </div>
      )}
    </>
  )
}

export default Navbar
