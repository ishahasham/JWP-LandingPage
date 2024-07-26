import React from 'react'
import {Typography, AppBar, Tabs, Tab ,Toolbar} from "@mui/material"
import p14 from '../assets/p14.png'


const Navbar = () => {
  return (
    <div>
      <AppBar sx={{ backgroundColor: 'white', boxShadow:"none" }}>
      <Toolbar sx={{display:"flex", justifyContent:"start" ,alignItems: "center", padding:"10px", marginLeft: '150px'}}>
      <img src={p14} alt="" className='logo' />
      <hr />
        <Tabs>
          <Tab label="Home" sx={{color: "black", '&:hover': { color: 'green' }}}/>
          <Tab label="About Us" sx={{color: "black", '&:hover': { color: 'green' }}}/>
          <Tab label="Training" sx={{color: "black", '&:hover': { color: 'green' }}}/>
          <Tab label="Contact us" sx={{color: "black" ,'&:hover': { color: 'green' }}}/>
        </Tabs>
        
        </Toolbar>
     </AppBar>
    </div>
  )
}

export default Navbar
