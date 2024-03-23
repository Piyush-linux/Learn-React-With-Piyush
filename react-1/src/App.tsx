import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  // let navItems:{name: string}[] = [{name:"Home"},{name:"Login"}];

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* COntent */}
      <Hero/>
      {/* Footer */}
      <Footer/>
      
    </>
  )
}

export default App
