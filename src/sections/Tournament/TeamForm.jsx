import { useState } from "react"
import { motion } from "framer-motion"

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzX2KEnzgSsUsrXV_wLxNpE0nR98sKSBld3ZZD7aTYX8So-cL2td_RHj3678Nbe__8PTA/exec"

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

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

      if (!data.success) throw new Error(data.message)

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
    <section className="max-w-4xl mx-auto py-24 px-6 text-center">
      <h1 className="font-pixel text-neonPink text-xl mb-8">
        TEAM REGISTRATION
      </h1>

      {status === "success" && (
        <p className="text-neonGreen font-pixel mb-6">
          ✔ Team Registered Successfully
        </p>
      )}

      {status === "error" && (
        <p className="text-neonBlue font-pixel mb-6">
          ⚠ Registration Closed or Error Occurred
        </p>
      )}

      <form onSubmit={handleSubmit} className="grid gap-6">
        {[
          { name: "teamName", placeholder: "Team Name" },
          { name: "captain", placeholder: "Captain Name" },
          { name: "phone", placeholder: "Phone Number" },
          { name: "email", placeholder: "Email" },
        ].map((f) => (
          <input
            key={f.name}
            name={f.name}
            placeholder={f.placeholder}
            value={form[f.name]}
            onChange={handleChange}
            required
            className="border-2 border-neonPink p-3 bg-black text-white font-pixel text-xs"
          />
        ))}

        <textarea
          name="players"
          placeholder="Players Names (comma separated)"
          value={form.players}
          onChange={handleChange}
          required
          rows="3"
          className="border-2 border-neonPink p-3 bg-black text-white font-pixel text-xs"
        />

        <textarea
          name="notes"
          placeholder="Notes (Optional)"
          value={form.notes}
          onChange={handleChange}
          rows="2"
          className="border-2 border-neonPink p-3 bg-black text-white font-pixel text-xs"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          disabled={loading}
          className="font-pixel text-xs py-4 border-2 border-neonPink text-neonPink hover:bg-neonPink hover:text-black"
        >
          {loading ? "SUBMITTING..." : "REGISTER TEAM"}
        </motion.button>
      </form>
    </section>
  )
}

export default TeamForm
