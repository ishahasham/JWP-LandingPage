import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import p1 from '../assets/p1.png'

const MediaControlCard = () => {
  return (
    <Card sx={{display:"flex" ,justifyContent:"center" , alignItems:"center" ,marginLeft:"30px", padding:"20px", marginTop:"30px" ,boxShadow:"inherit"}}>
      <CardContent>
        <Typography variant="h4" color="#006838" component="div" sx={{fontWeight:600, marginLeft:"15px"}}>
        Introduction of <br /> Jawan Pakistan
        </Typography>
        <Typography variant='p' color="#A9B2C0" component="p" sx={{padding:"10px" , margin:"5px"}}>
        The foundation of every state is the education and skills set of its youth. Jawan Pakistan  <br />
        is such an organization of Pakistan who is not only working on youth education but also <br />
         enhancing skills set in youth either Free of cost or in a very low cost. This initiative, <br />
          initially developed by a single person and with almost no seed capital, promotes <br />
           entrepreneurship and innovation and Sustainable Development Goal, which promotes <br /> inclusive and sustainable economic growth.
        </Typography>
      </CardContent>
      <div>
      <CardMedia component="img" image={p1} alt="Live from space album cover" sx={{width:"750px"}}/>
      </div>
    </Card>
  );
}

export default MediaControlCard;
