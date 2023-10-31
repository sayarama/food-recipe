import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <p>Tes</p>
        <Link to="/detail">
        <button>detail</button>
        </Link>
    </div>
    
  )
}

export default Home