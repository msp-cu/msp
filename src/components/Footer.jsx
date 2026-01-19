import { motion } from "framer-motion"
import { Instagram, Linkedin, Facebook } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const isJoinPage = location.pathname === "/join"

  const handleReplay = () => {
    localStorage.removeItem("started")
    localStorage.removeItem("loaded")
    navigate("/")
  }

  return (
    <footer className="bg-darkBg border-t border-neonPink mt-20 relative">
      {/* Scanline Effect */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_3px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto px-6 py-12 text-center"
      >
        {/* TITLE */}
        <p className="font-pixel text-neonPink text-xs mb-4 tracking-widest">
          MSP CAIRO UNIVERSITY
        </p>

        <h3 className="font-pixel text-neonBlue text-sm mb-6 neon-glow">
          ARCADE SEASON
        </h3>

        {/* SOCIAL */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://www.instagram.com/mspcu2/" target="_blank" className="text-white/60 hover:text-neonPink">
            <Instagram size={18} />
          </a>
          <a href="https://www.linkedin.com/company/msp-cairo/" target="_blank" className="text-white/60 hover:text-neonBlue">
            <Linkedin size={18} />
          </a>
          <a href="https://www.facebook.com/MSPCU" target="_blank" className="text-white/60 hover:text-neonGreen">
            <Facebook size={18} />
          </a>
        </div>

        {/* 🎮 PRESS START — JOIN ONLY */}
        {isJoinPage && (
          <motion.button
            onClick={handleReplay}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="font-pixel text-neonPink text-xs tracking-widest"
          >
            PRESS START TO REPLAY
          </motion.button>
        )}

        {/* COPYRIGHT */}
        <p className="mt-10 text-[10px] text-white/30">
          © 2026 MSP Cairo University — All Rights Reserved
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
