import React from 'react'
import "../style/Navbar.css"

function Navbar() {
  return (
    <>
    <header className="container main-navbar">
      <nav className="d-flex justify-content-between align-items-center py-4">
        <div className="d-flex gap-5 left-navbar">
          <a href="#">Home </a>
          <a href="#">Add Recipe</a>
          <a href="#">Profile</a>
        </div>
        <div className="d-flex gap-5 right-navbar">
          <img src="" alt="" />
          <a href="#">Login</a>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar