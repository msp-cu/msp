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
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-neonPink">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="MSP Logo"
              className="w-10 h-10 object-contain drop-shadow-[0_0_6px_#ff2fd2]"
            />
            <span className="font-pixel text-neonPink text-sm">
              MSP CU
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-pixel text-xs text-white/70">
            <li><button onClick={() => goToSection("about")} className="hover:text-neonPink">ABOUT</button></li>
            <li><button onClick={() => goToSection("events")} className="hover:text-neonPink">Events</button></li>
            <li><button onClick={() => goToSection("team")} className="hover:text-neonPink">Team</button></li>

            {/* Mute */}
            <button
              onClick={() => setMuted(toggleMute())}
              className="text-neonPink hover:text-white"
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* Join */}
            <Link
              to="/join"
              className="border border-neonPink px-4 py-2 hover:bg-neonPink hover:text-black transition"
            >
              JOIN
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
    goToSection("about")
  }}
>
  ABOUT
</button>

<button
  onClick={() => {
    setOpen(false)
    goToSection("events")
  }}
>
  EVENTS
</button>

<button
  onClick={() => {
    setOpen(false)
    goToSection("team")
  }}
>
  TEAM
</button>

          <Link
            to="/join"
            onClick={() => setOpen(false)}
            className="border border-neonPink px-6 py-3"
          >
            JOIN
          </Link>

          <button
            onClick={() => setMuted(toggleMute())}
            className="mt-6"
          >
            {muted ? <VolumeX size={28} /> : <Volume2 size={28} />}
          </button>
        </div>
      )}
    </>
  )
}

export default Navbar
