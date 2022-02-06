import { Navbar, Welcome, Footer, Strategies, Leaderboards } from "./components";

const App = () => {

  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Strategies />
    <Leaderboards />
    <Footer />
  </div>
  )
}

export default App
