import TopScorersSystem from "../sections/Tournament/TopScorers"
import Navbar from "../components/Navbar3"
import Footer from "../components/Footer"
function TopPlayers() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <Navbar />
      <TopScorersSystem />
      <Footer />
    </div>
  )
}

export default TopPlayers
