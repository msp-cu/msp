import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {
  User,
  Mail,
  Phone,
  School,
  GraduationCap,
  Linkedin,
  FileText,
  Layers,
} from "lucide-react"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwJZD3oWST77_xw4z364NbRurQ3t3OGluGrIqy9TEvSHllOwLqwTxXz5BcKHwLVL7st/exec"

function Join() {
  const navigate = useNavigate()
  const savedPath = JSON.parse(localStorage.getItem("playerPath"))

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    university: "",
    year: "",
    major: "",
    track: "",
    pref1: savedPath?.committee || "",
    pref2: "",
    linkedin: "",
    experience: "",
    notes: "",
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "track" && { pref1: "", pref2: "" }),
    }))

    setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const validate = () => {
    const err = {}

    Object.entries(form).forEach(([key, value]) => {
      if (!value && !["linkedin", "experience", "notes"].includes(key)) {
        err[key] = "Required"
      }
    })

    if (form.email && !form.email.includes("@")) {
      err.email = "Invalid email"
    }

    if (form.phone && form.phone.length < 10) {
      err.phone = "Invalid phone"
    }

    setErrors(err)

    if (Object.keys(err).length > 0) {
      const firstError = Object.keys(err)[0]
      document.querySelector(`[name="${firstError}"]`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }

    return Object.keys(err).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    try {
      setLoading(true)

      const formData = new FormData()
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value)
      })

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData, // 👈 بدون headers (حل CORS)
      })

      if (!res.ok) throw new Error("Request failed")

      setSubmitted(true)
    } catch (err) {
      console.error(err)
      alert("⚠️ Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black pt-24 flex flex-col">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-grow max-w-5xl mx-auto border-4 border-neonPink p-10 shadow-[0_0_50px_#ff2fd2]"
      >
        <h1 className="font-pixel text-neonPink text-center text-xl mb-6">
          JOIN THE GAME
        </h1>

        {savedPath && (
          <p className="text-neonBlue font-pixel text-[10px] text-center mb-6">
            🎮 A PATH WAS SUGGESTED — YOU MUST CONFIRM YOUR TRACK
          </p>
        )}

        {Object.keys(errors).length > 0 && (
          <div className="mb-6 border-2 border-neonBlue p-4 text-neonBlue font-pixel text-xs text-center animate-pulse">
            ⚠️ COMPLETE ALL REQUIRED FIELDS
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <Input name="firstName" icon={<User />} placeholder="First Name" onChange={handleChange} error={errors.firstName} />
          <Input name="lastName" icon={<User />} placeholder="Last Name" onChange={handleChange} error={errors.lastName} />
          <Input name="phone" icon={<Phone />} placeholder="Phone Number" onChange={handleChange} error={errors.phone} />
          <Input name="email" icon={<Mail />} placeholder="Email" onChange={handleChange} error={errors.email} />
          <Input name="university" icon={<School />} placeholder="University" onChange={handleChange} error={errors.university} />

          <Select
            name="year"
            icon={<GraduationCap />}
            label="Academic Year"
            options={["1st Year","2nd Year","3rd Year","4th Year","5th Year","Graduate"]}
            onChange={handleChange}
            error={errors.year}
          />

          <Input name="major" icon={<GraduationCap />} placeholder="Major" onChange={handleChange} error={errors.major} />

          <Select
            name="track"
            icon={<Layers />}
            label="SELECT TRACK TYPE (REQUIRED)"
            options={["Tech", "Non-Tech"]}
            onChange={handleChange}
            error={errors.track}
          />

          {form.track === "Tech" && (
            <>
              <Select name="pref1" icon={<Layers />} label="First Tech Preference"
                options={["Front-End","Back-End","Flutter","AI","Cyber Security","UI-UX"]}
                onChange={handleChange} error={errors.pref1} />
              <Select name="pref2" icon={<Layers />} label="Second Tech Preference"
                options={["Front-End","Back-End","Flutter","AI","Cyber Security","UI-UX"]}
                onChange={handleChange} error={errors.pref2} />
            </>
          )}

          {form.track === "Non-Tech" && (
            <>
              <Select name="pref1" icon={<Layers />} label="First Non-Tech Preference"
                options={["PR","Entrepreneurship","Project Management","Finance"]}
                onChange={handleChange} error={errors.pref1} />
              <Select name="pref2" icon={<Layers />} label="Second Non-Tech Preference"
                options={["PR","Entrepreneurship","Project Management","Finance"]}
                onChange={handleChange} error={errors.pref2} />
            </>
          )}

          <Input name="linkedin" icon={<Linkedin />} placeholder="LinkedIn (Optional)" onChange={handleChange} />
          <Textarea name="experience" icon={<FileText />} placeholder="Relevant experience (N/A if none)" onChange={handleChange} />
          <Textarea name="notes" icon={<FileText />} placeholder="Notes (Optional)" onChange={handleChange} />

          {!submitted && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              disabled={loading}
              className="md:col-span-2 mt-6 font-pixel text-xs py-4 border-2 border-neonPink text-neonPink hover:bg-neonPink hover:text-black shadow-[0_0_20px_#ff2fd2] disabled:opacity-50"
            >
              {loading ? "SUBMITTING..." : "SUBMIT APPLICATION"}
            </motion.button>
          )}
        </form>

        {submitted && (
          <p className="text-neonGreen font-pixel text-center mt-6">
            ✔ APPLICATION SUBMITTED SUCCESSFULLY
          </p>
        )}

        <button
          onClick={() => navigate("/")}
          className="block mx-auto mt-6 font-pixel text-xs text-white/60 hover:text-neonPink transition"
        >
          ⬅ EXIT GAME
        </button>
      </motion.div>

      <Footer />
    </div>
  )
}

export default Join

/* ===================== UI COMPONENTS ===================== */

function Input({ icon, placeholder, type = "text", name, onChange, error }) {
  return (
    <div className="flex flex-col gap-1">
      <div className={`flex items-center gap-3 border-2 p-3
        ${error ? "border-neonBlue shadow-[0_0_15px_#00f0ff]" : "border-neonPink"}`}>
        <span className="text-neonPink">{icon}</span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className="bg-transparent w-full text-white font-pixel text-xs focus:outline-none"
        />
      </div>
      {error && <span className="text-neonBlue text-[10px] font-pixel">{error}</span>}
    </div>
  )
}

function Select({ icon, label, options, name, onChange, error }) {
  return (
    <div className="flex flex-col gap-1">
      <div className={`flex items-center gap-3 border-2 p-3
        ${error ? "border-neonBlue shadow-[0_0_15px_#00f0ff]" : "border-neonPink"}`}>
        <span className="text-neonPink">{icon}</span>
        <select
          name={name}
          onChange={onChange}
          className="bg-black w-full text-white font-pixel text-xs focus:outline-none"
        >
          <option value="">{label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      {error && <span className="text-neonBlue text-[10px] font-pixel">{error}</span>}
    </div>
  )
}

function Textarea({ icon, placeholder, name, onChange }) {
  return (
    <div className="md:col-span-2 flex items-center gap-3 border-2 border-neonPink p-3">
      <span className="text-neonPink">{icon}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        rows="3"
        onChange={onChange}
        className="bg-transparent w-full text-white font-pixel text-xs focus:outline-none"
      />
    </div>
  )
}
