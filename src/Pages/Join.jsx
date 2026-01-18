import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Navbar from "../components/Navbar"
import {
  User,
  Mail,
  Phone,
  School,
  GraduationCap,
  Linkedin,
  FileText,
  Layers
} from "lucide-react"

function Join() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    university: "",
    year: "",
    major: "",
    track: "",
    pref1: "",
    pref2: "",
    linkedin: "",
    experience: "",
    notes: "",
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const err = {}
    Object.entries(form).forEach(([key, value]) => {
      if (
        !value &&
        !["linkedin", "experience", "notes"].includes(key)
      ) {
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
    return Object.keys(err).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    console.log(form)
  }

  const isFormComplete = Object.entries(form).every(
    ([key, value]) =>
      value || ["linkedin", "experience", "notes"].includes(key)
  )

  return (
    <div className="min-h-screen bg-black pb-20">
     <Navbar /> <br /><br /><br /><br /> <br /> <br />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto border-4 border-neonPink p-10 shadow-[0_0_50px_#ff2fd2]"
      >
        <h1 className="font-pixel text-neonPink text-center text-xl mb-10">
          JOIN THE GAME
        </h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

          <Input name="firstName" icon={<User />} placeholder="First Name" onChange={handleChange} error={errors.firstName} />
          <Input name="lastName" icon={<User />} placeholder="Last Name" onChange={handleChange} error={errors.lastName} />
          <Input name="phone" icon={<Phone />} placeholder="Phone Number" onChange={handleChange} error={errors.phone} />
          <Input name="email" icon={<Mail />} placeholder="Email" type="email" onChange={handleChange} error={errors.email} />
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
            label="Track Type"
            options={["Tech", "Non-Tech"]}
            onChange={handleChange}
            error={errors.track}
          />

          {form.track === "Tech" && (
            <>
              <Select name="pref1" icon={<Layers />} label="First Tech Preference" options={["Web","Mobile","AI","Cyber Security"]} onChange={handleChange} error={errors.pref1} />
              <Select name="pref2" icon={<Layers />} label="Second Tech Preference" options={["Web","Mobile","AI","Cyber Security"]} onChange={handleChange} error={errors.pref2} />
            </>
          )}

          {form.track === "Non-Tech" && (
            <>
              <Select name="pref1" icon={<Layers />} label="First Non-Tech Preference" options={["Media","PR","HR","Marketing"]} onChange={handleChange} error={errors.pref1} />
              <Select name="pref2" icon={<Layers />} label="Second Non-Tech Preference" options={["Media","PR","HR","Marketing"]} onChange={handleChange} error={errors.pref2} />
            </>
          )}

          <Input name="linkedin" icon={<Linkedin />} placeholder="LinkedIn (Optional)" onChange={handleChange} />

          <Textarea name="experience" icon={<FileText />} placeholder="Relevant experience (N/A if none)" onChange={handleChange} />
          <Textarea name="notes" icon={<FileText />} placeholder="Notes (Optional)" onChange={handleChange} />

          <motion.button
            disabled={!isFormComplete}
            whileHover={isFormComplete ? { scale: 1.05 } : {}}
            className={`md:col-span-2 mt-6 font-pixel text-xs py-4 border-2 transition-all
              ${isFormComplete
                ? "border-neonPink text-neonPink hover:bg-neonPink hover:text-black shadow-[0_0_20px_#ff2fd2]"
                : "border-gray-600 text-gray-600 cursor-not-allowed"}`}
          >
            SUBMIT APPLICATION
          </motion.button>

        </form>

        {submitted && (
          <p className="text-neonGreen font-pixel text-center mt-6">
            ✔ Application Submitted Successfully
          </p>
        )}

        <button
          onClick={() => navigate("/")}
          className="block mx-auto mt-6 font-pixel text-xs text-white/60 hover:text-neonPink"
        >
          ⬅ BACK TO HOME
        </button>
      </motion.div>
    </div>
  )
}

export default Join
function Input({ icon, placeholder, type = "text", name, onChange, error }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3 border-2 border-neonPink p-3">
        <span className="text-neonPink">{icon}</span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className="bg-transparent w-full text-white font-pixel text-xs focus:outline-none"
        />
      </div>
      {error && (
        <span className="text-red-500 text-[10px] font-pixel">
          {error}
        </span>
      )}
    </div>
  )
}

function Select({ icon, label, options, name, onChange, error }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3 border-2 border-neonPink p-3">
        <span className="text-neonPink">{icon}</span>
        <select
          name={name}
          onChange={onChange}
          className="bg-black w-full text-white font-pixel text-xs focus:outline-none"
        >
          <option value="">{label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <span className="text-red-500 text-[10px] font-pixel">
          {error}
        </span>
      )}
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
