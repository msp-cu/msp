import { useState } from "react"
import { jsPDF } from "jspdf"


function TournamentRules() {
  const [openSection, setOpenSection] = useState(null)

  const sections = [
    {
      title: "TEAM RULES",
      rules: [
        "Each team consists of 7 players maximum (5 on the ground and 2 substituted ).",
        "Goalkeeper cannot be substituted unless injured.",
        "Each team must have a designated captain responsible for communication with referees and organizers.",
        "Only registered players listed in the team sheet are allowed to play.",
        "All players must belong to the same Student Activity.",

      ],
    },
    {
      title: "TOURNAMENT FORMAT",
      rules: [
        "Group Stage: 4 groups (4 teams each). Each team plays 3 matches.",
        "Top 2 teams from each group qualify to Quarter Finals.",
        "Knockout Stage: Quarter Final → Semi Final → Final + 3rd Place Match.",
        "Points System (Group Stage): Win = 3, Draw = 1, Loss = 0.",
        "Tie-breaker order: Goal Difference → Head-to-Head → Fair Play → Organizer Decision.",
      ],
    },
    {
      title: "MATCH RULES",
      rules: [
        "Match Duration (Groups): 20 minutes (10 min each half).",
        "Match Duration (Knockouts): 30 minutes (15 min each half).",
        "Final & 3rd Place: 50 minutes (25 min each half).",
        "If Knockout match ends in draw: 5-minute Golden Goal extra time, then 5 Penalties if needed.",
        "Every 5 minutes of delay counts as 1 goal against the delayed team.",
        "After 15 minutes delay, the match is awarded 3-0 to the opponent.",
      ],
    },
   {
  title: "DISCIPLINE RULES",
  rules: [
    "🟨 Yellow Card = 2 minutes temporary suspension.",
    "🟥 Red Card = Sent off.",
    "Offensive language or misconduct leads to immediate action or disqualification.",
    "Only turf shoes are allowed (No metal studs).",
  ],
}
,
{
  title: "Entry Fees & Prizes",
  rules: [
    "Entry Fee: 100 EGP per player, payable before the tournament starts.",
    // "Prizes: 1st Place: Trophy + 2000 EGP, 2nd Place: Medal + 1000 EGP, 3rd Place: Medal + 500 EGP.",
    "All teams receive a participation certificate and exclusive MSP merchandise.",
  ],
}
  ]
  
  const downloadPDF = () => {
  const doc = new jsPDF()

  let y = 20

  doc.setFont("helvetica", "bold")
  doc.setFontSize(18)
  doc.text("MSP Football Tournament Rules", 105, y, { align: "center" })
  y += 15

  doc.setFontSize(12)

  sections.forEach((section) => {
    doc.setFont("helvetica", "bold")
    doc.text(section.title, 20, y)
    y += 8

    doc.setFont("helvetica", "normal")

    section.rules.forEach((rule) => {
      const splitText = doc.splitTextToSize(`• ${rule}`, 170)
      doc.text(splitText, 25, y)
      y += splitText.length * 7

      if (y > 270) {
        doc.addPage()
        y = 20
      }
    })

    y += 8
  })

  doc.setFontSize(10)
  doc.setTextColor(150)
  doc.text(
    "By participating in the tournament, teams agree to all rules stated above.",
    20,
    y
  )
  doc.setTextColor(0)
  doc.save("MSP-Tournament-Rules.pdf")
}

  return (
    <section className="max-w-4xl mx-auto py-24 px-4 text-center">
      <h2 className="font-pixel text-neonPink text-xl mb-12 animate-pulse">
        TOURNAMENT RULES
      </h2>

      <div className="space-y-6">
        {sections.map((section, index) => (
  <div
    key={index}
    className="border border-neonPink shadow-[0_0_15px_#ff2fd2] rounded hover:shadow-[0_0_25px_#ff2fd2] transition duration-300"
  >
    <button
      onClick={() =>
        setOpenSection(openSection === index ? null : index)
      }
      className="w-full py-4 font-pixel text-neonBlue text-sm tracking-wider"
    >
      {section.title}
    </button>

    {/* Slide Down Container */}
    <div
      className={`
        overflow-hidden transition-all duration-500 ease-in-out
        ${openSection === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <ul className="pb-6 space-y-3 text-xs md:text-sm text-white/80">
        {section.rules.map((rule, i) => (
          <li key={i} className="px-6">
            ⚽ {rule}
          </li>
        ))}
      </ul>
    </div>
  </div>
))}

      </div>

      {/* Legal Note */}
      <p className="mt-12 text-xs text-white/60 ">
        ⚠ By participating in the tournament, teams agree to all rules stated above.
      </p>

      {/* Download Button */}
      <button
        onClick={downloadPDF}
        className="
          mt-8 px-6 py-3
          border border-neonPink
          text-neonPink font-pixel text-xs
          shadow-[0_0_15px_#ff00ff]
          hover:bg-neonPink hover:text-black
          transition
        "
      >
        DOWNLOAD RULES PDF
      </button>
    </section>
  )
}

export default TournamentRules
