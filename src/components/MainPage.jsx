import React from "react"
import Navbar from "./Navbar"
import NavPage from "./NavPage"

const MainPage = () => {
  return (
    <div>
      <section>
        {/* navbar section */}
        <div className="navbar-section">
          <Navbar />
        </div>

        {/* navpage section */}
        <div className="navpage-section">
          <NavPage />
        </div>
      </section>
    </div>
  )
}

export default MainPage
