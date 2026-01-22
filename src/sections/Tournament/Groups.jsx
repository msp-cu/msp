import { useEffect, useState } from "react"
import GroupCard from "./GroupCard"

function Groups() {
  const [groups, setGroups] = useState({})


  return (
    <section className="py-32 bg-black text-center">
      <h2 className="font-pixel text-neonPink text-xl mb-12">
        GROUP STAGE
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {Object.entries(groups).map(([name, teams]) => (
          <GroupCard key={name} name={name} teams={teams} />
        ))}
      </div>
    </section>
  )
}

export default Groups