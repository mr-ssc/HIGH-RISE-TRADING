import React from 'react'
import Navbar from '../../Component/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Slider from '../../Component/Slider';
import Contact from '../../Component/Contact';
import Mechanical from '../../Component/Mechanical';



const page = () => {
  return (
    <>
     
     <Navbar/> 
     <Slider/>
     <Contact/>
     <Mechanical/>
      
    </>
  )
}

export default page
