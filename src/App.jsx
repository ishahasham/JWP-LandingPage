import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MediaControlCard from './Components/Card'
import Card2 from './Components/Card2'
import Founder from './Components/Founder'
import Courses from './Components/Courses'
import Slider from './Components/Slider'
import Form from './Components/Form'
import Footer from './Components/Footer'



function App() {
 

  return (
    <>
     <Navbar/>
     <br />
     <MediaControlCard/>
     <br />
     <Card2/>
     <br />
     <Founder/>
     <br />
     <Courses/>
     <br />
     <Slider/>
     <br />
     <Form/>
     <br />
     <Footer/>

    </>
  )
}

export default App
