import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../style/Home.css"

function Home() {
  return (
    <div className='main-box'>
        <Navbar/>
        <section className='container hero'>

        </section>
        <Footer/>
    </div>
    
  )
}

export default Home