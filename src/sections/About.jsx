function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-3xl text-center">

        <p className="font-pixel text-neonPink text-xs mb-4">
          LEVEL 1
        </p>

        <h2 className="font-pixel text-neonBlue text-xl md:text-2xl mb-8">
          ABOUT MSP CU
        </h2>

        <p className="text-white/70 leading-relaxed text-sm md:text-base">
          MSP CU is a student community powered by passion for technology,
          innovation, and impact.  
          We turn students into creators through workshops, projects,
          competitions, and real-world experiences.
        </p>

        <div className="mt-10">
          <span className="font-pixel text-neonPink text-xs">
            PRESS START TO CONTINUE ▶
          </span>
        </div>

      </div>
    </section>
  )
}

export default About
