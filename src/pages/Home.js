import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../style/Home.css"
import {BsSearch} from 'react-icons/bs'

function Home() {
  return (
    <>
    {/* Header Part */}
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

    {/* Popular */}
    <section className='popular-box'>
      <div className='title-head'>
        <span className='orange-vertical'></span>
        <p>Popular For You !</p>
      </div>
      <div className='popular-img'>
        <img src='/images/pizza.png'/>
        <img src='/images/kingburger.png'/>
      </div>
    </section>

    {/* New Recipe */}
    <section className='newrecipe-box'>
    <div className='title-head'>
        <span className='orange-vertical'></span>
        <p>New Recipe !</p>
    </div>
    <div className='newrecipe-img'>
      
    </div>
    </section>
    </>
    
  )
}

export default Home