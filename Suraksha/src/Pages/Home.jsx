import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Working from '../Components/working'
import "../Components/Hero.css"
import CommunitySupport from '../Components/CommunitySupport'
import ConnectorForm from '../Components/ConnectorForm'
import Shop from '../Components/Shop'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Working/>
        <CommunitySupport/>
        <ConnectorForm/>
        <Shop/>
        <Footer/>
    </div>
  )
}

export default Home