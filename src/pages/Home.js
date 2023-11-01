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
        <div className='inner-text'>
          <p>Pizza Lamoa</p>
        <img src='/images/pizza.png'/>
        </div>
        <div className='inner-text'>
          <p>King Burger</p>
        <img src='/images/kingburger.png'/>
        </div>
      </div>
    </section>

    {/* New Recipe */}
    <section className='recipe-box'>
    <div className='title-head'>
        <span className='orange-vertical'></span>
        <p>New Recipe</p>
    </div>
    <div className='recipe-img row align-items-center'>
      <div className='recipe-left col-md-6'>
      <div className='recipe-left-img'>
          <img src='/images/onionburger.png'/>
        </div>
        <div className='recipe-orange'>
        </div>
        
      </div>
      <div className='recipe-right col-md-6'>
        <h1>Healthy Bone Broth <br/> Ramen (Quick&Easy)</h1>
        <hr/>
        <p>Quick + Easy Chicken Bone Broth Ramen- <br/> Healty chicken ramen in a hurry? That's right!</p>
        <button type="button" className="btn btn-warning text-white">Learn More</button>
      </div>
    </div>
    </section>
    {/* Popular Recipe */}
    <div className='popular-recipe'>
    <div className='title-head'>
        <span className='orange-vertical'></span>
        <p>Popular Recipe</p>
      </div>

      <div className=''>
        
      </div>
    </div>
    </>
    
  )
}

export default Home