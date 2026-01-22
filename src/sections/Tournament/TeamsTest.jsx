import { useEffect, useState } from "react"
import { TEAMS_API } from "../../api/teamsApi"

function TeamsTest() {
  const [teams, setTeams] = useState([])
  

  useEffect(() => {
    fetch(TEAMS_API)
      .then(res => res.json())
      .then(data => setTeams(data))
  }, [])

  return (
    <div className="text-white p-10">
      <h2 className="mb-4">Teams</h2>
      {teams.map(team => (
        <div key={team.teamId}>
          {team.teamName} - Group {team.group}- Captain {team.cap}- phone {team.phone}- email {team.email}
        </div>
      ))}
    </div>
  )
}

export default TeamsTest
