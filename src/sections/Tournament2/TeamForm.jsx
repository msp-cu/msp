import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../../components/Navbar2"
import { Route } from "react-router-dom"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzX2KEnzgSsUsrXV_wLxNpE0nR98sKSBld3ZZD7aTYX8So-cL2td_RHj3678Nbe__8PTA/exec"

function TeamForm() {
  const [form, setForm] = useState({
    teamName: "",
    captain: "",
    phone: "",
    email: "",
    players: "",
    notes: "",
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (!data.success) throw new Error()

      setStatus("success")
      setForm({
        teamName: "",
        captain: "",
        phone: "",
        email: "",
        players: "",
        notes: "",
      })
    } catch {
      setStatus("error")
    }

    setLoading(false)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white font-pixel"
    >
<Navbar/>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/worldcup.mp4"
      />
      {/* Background Audio */}
      <audio
        autoPlay
        loop
        src="/audio/fifa-theme.mp3"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B132B]/70" />

      {/* Form Card */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="
          relative z-10
          max-w-xl w-full
          border-2 border-neonYellow
          rounded-2xl
          p-10
          bg-[#0B132B]/70
          shadow-neon
        "
      >
        <h1 className="text-center text-neonYellow text-xl tracking-widest mb-6">
          TEAM REGISTRATION
        </h1>

        <p className="text-center text-white/70 text-xs mb-8">
          Tournament Mode Entry
        </p>

        {status === "success" && (
          <p className="text-neonGreen text-center mb-6">
            ✔ Team Registered Successfully
          </p>
        )}

        {status === "error" && (
          <p className="text-neonPink text-center mb-6">
            ⚠ Registration Closed or Error
          </p>
        )}

        <form onSubmit={handleSubmit} className="grid gap-5">

          {[
            { name: "teamName", placeholder: "TEAM NAME" },
            { name: "captain", placeholder: "CAPTAIN NAME" },
            { name: "phone", placeholder: "PHONE NUMBER" },
            { name: "email", placeholder: "EMAIL ADDRESS" },
          ].map((f) => (
            <input
              key={f.name}
              name={f.name}
              value={form[f.name]}
              onChange={handleChange}
              placeholder={f.placeholder}
              required
              className="
                bg-[#0B132B]/60
                border border-neonBlue
                px-4 py-3
                text-xs
                tracking-widest
                outline-none
                focus:border-neonYellow
              "
            />
          ))}

          <textarea
            name="players"
            rows="3"
            required
            placeholder="PLAYERS (comma separated)"
            value={form.players}
            onChange={handleChange}
            className="
              bg-[#0B132B]/60
              border border-neonBlue
              px-4 py-3
              text-xs
              tracking-widest
              focus:border-neonYellow
            "
          />

          <textarea
            name="notes"
            rows="2"
            placeholder="NOTES (optional)"
            value={form.notes}
            onChange={handleChange}
            className="
              bg-[#0B132B]/60
              border border-neonBlue
              px-4 py-3
              text-xs
              tracking-widest
            "
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="
              mt-4
              py-4
              border-2 border-neonYellow
              text-neonYellow
              tracking-widest
              text-sm
              hover:bg-neonYellow hover:text-black
              transition-all
            "
          >
            {loading ? "SUBMITTING..." : "ENTER TOURNAMENT"}
          </motion.button>
        </form>

      
      </motion.section>
    </div>
  )
}

export default TeamForm
