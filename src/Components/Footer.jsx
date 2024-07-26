import * as React from 'react';
import p14 from "../assets/p14.png"
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from '@mui/joy/Link';
import { FaRegCopyright } from "react-icons/fa6";


export default function Footer() {
 
  return (
    <Sheet>
         <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <img src={p14} width="350px" alt="" />
        <List
          size="ex"
          orientation="horizontal"
          wrap
          sx={{ marginLeft:"200px", padding:"30px", display:"flex", justifyContent:"space-evenly"}}
        >
          <ListItem nested >
            <ListSubheader sx={{color:"#006838" , fontWeight:"bold", fontSize:"13px"}} >Company</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton  sx={{color:"#009650"}}>Home</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{color:"#009650"}}>About us</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{color:"#009650"}}>Trainings</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{color:"#009650"}}>Contact us</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
            <ListSubheader sx={{color:"#006838" , fontWeight:"bold", fontSize:"13px"}} >Contact Details</ListSubheader>
            <List >
              <ListItem>
                <Link sx={{textDecoration:"none", color:"#009650"}}>Ali Mughal</Link>
              </ListItem>
              <ListItem>
                <Link sx={{textDecoration:"none", color:"#009650"}}>+923005292675</Link>
              </ListItem>
              <ListItem>
                <Link sx={{textDecoration:"none", color:"#009650"}}>jawantechpk@gmail.com</Link>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
      <Divider sx={{ my: 2 }} />
      <div className='footer-last'>
      <Box>
      <FaRegCopyright />2022 JawanPakistan

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 , marginLeft:"1300px"}}>
      <FaFacebookF />
      <FaInstagram />
      <FaLinkedinIn />
      </Box>
      </Box>
      </div>
       <br />
    </Sheet>
  );
}
