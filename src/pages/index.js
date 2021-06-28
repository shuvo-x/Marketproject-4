import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import { useState } from 'react'
import { homeObjOne,homeObjTwo,homeObjThree } from '../components/InfoSection/Data';
const Home = () => {
   const [isOpen, setIsOpen] = useState(false)
   const toggle = () => {
       setIsOpen(!isOpen)
   }
    return (

        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />
         <HeroSection />
         <InfoSection {...homeObjOne} />
         <InfoSection {...homeObjTwo} />
         <Services />
         <InfoSection {...homeObjThree} />
        </>  
    )        
}

export default Home
