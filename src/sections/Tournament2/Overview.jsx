function OverView() {
  const rules = [
    "5 players per team (+ substitutes)",
    "Knockout matches",
    "Match duration decided by organizers",
    "Fair play is mandatory",
    "Any misconduct leads to disqualification",
  ]

  const collaborations = [
    {
      name: "Microsoft Student Partners",
      logo: "/logos/msp.png",
    },
    {
      name: "Campus Media",
      logo: "/logos/media.png",
    },
    {
      name: "Gaming Society",
      logo: "/logos/gaming.png",
    },
  ]

  return (
    <section className="max-w-5xl mx-auto py-24 text-center">

      {/* Intro */}
      <h2 className="font-pixel text-neonYellow text-lg mb-8">
        Welcome to the official MSP World Cup tournament mode.
      </h2>

      {/* Rules */}
      <h2 className="font-pixel text-neonYellow text-lg mb-8">
        TOURNAMENT RULES
      </h2>

      <ul className="space-y-4 mb-24">
        {rules.map((rule, i) => (
          <li
            key={i}
            className="
              border border-neonBlue
              py-3 px-4
              text-xs font-pixel
              text-white/80
            "
          >
            ⚽ {rule}
          </li>
        ))}
      </ul>

      {/* Collaborations */}
      <h2 className="font-pixel text-neonYellow text-lg mb-12">
        OFFICIAL COLLABORATIONS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
        {collaborations.map((c, i) => (
          <div
            key={i}
            className="
              border border-neonBlue
              bg-black/60
              rounded-xl
              p-6
              flex flex-col
              items-center
              justify-center
              hover:scale-105
              transition-all
            "
          >
            <img
              src={"/logo.png"}
              alt={"Partners"}
              className="h-20 object-contain mb-4"
            />

            <p className="font-pixel text-xs text-white/60">
              {c.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OverView
