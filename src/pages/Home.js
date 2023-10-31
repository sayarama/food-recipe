import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../style/Home.css"
import {BsSearch} from 'react-icons/bs'

function Home() {
  return (
    <>
    <div className='main-box'>
    <Navbar/>
    <nav className='nav-box'>
        <div className='hero-left'>
            <h1>Discover Recipe <br/> & Delicious Food</h1>
            <div className='hero-input'>
                <BsSearch/>
                <input type='text' placeholder='Search Recipe'></input>
            </div>
        </div>
        <div className='hero-right'>
            <img src='/images/food-hero.png'/>
        </div>
    </nav>
    </div>

    <div className='background'>
        <div className='orange-bar'>

        </div>
    </div>
    </>
    
  )
}

export default Home