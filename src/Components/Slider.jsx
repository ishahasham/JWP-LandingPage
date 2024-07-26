import React from 'react'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'
import p7 from '../assets/p7.jpg'
import p8 from '../assets/p8.jpg'
import p9 from '../assets/p9.jpg'

const Slider = () => {
  return (
    <div className='sliders'>
        <h1 className='slider-h1'>Glimpses Of Sessions Conducted By Jawan Pakistan</h1>
      <div>
        <img src={p8} width="300px" height="280px" alt="" />
        <img src={p4} width="300px" height="280px" alt="" />
        <img src={p6} width="550px" height="280px" alt="" />
      </div>
      <div>
        <img src={p9} width="550px" height="280px" alt="" />
        <img src={p5} width="300px" height="280px" alt="" />
        <img src={p7} width="300px" height="280px" alt="" />
      </div>
    </div>
  )
}

export default Slider
