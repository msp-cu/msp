function GroupCard({ title, teams }) {
  return (
    <div className="border-2 border-neonPink p-4">
      <h3 className="font-pixel text-neonBlue mb-4">
        GROUP {title}
      </h3>
 
      <table className="w-full text-xs text-white">
        <thead>
          <tr className="text-neonPink">
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Pts</th>
          </tr>
        </thead>

        <tbody>
          {teams.map(team => (
            <tr key={team.teamId}>
              <td>{team.teamName}</td>
              <td>{team.played}</td>
              <td>{team.wins}</td>
              <td>{team.draws}</td>
              <td>{team.losses}</td>
              <td className="text-neonGreen">{team.points}</td>
              
            </tr>
            
          ))}
        </tbody>
      </table>
      
    </div>
    
  )
  
}

export default GroupCard
