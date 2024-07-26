import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import p2 from '../assets/p2.png'

const Card2 = () => {
  return (
    <Card sx={{display:"flex" ,justifyContent:"center" , alignItems:"center" ,marginLeft:"30px", padding:"20px", marginTop:"30px", boxShadow:" 10px 10px 5px grey"}}>
    <CardMedia component="img" image={p2} alt="Live from space album cover" sx={{width:"550px"}}/>
      <div>
      <CardContent>
        <Typography variant="h4" color="#006838" component="div" sx={{fontWeight:600, marginLeft:"25px"}}>
        Mission And Vision <br /> Behind Jawan Pakistan
        </Typography>
        <Typography variant='p' color="#A9B2C0" component="p" sx={{padding:"20px" , margin:"5px"}}>
        Our vision is to bring our students into the 21st century through innovation and modern <br />
         technology. To create a better every day life for every people. This program is not only <br />
          impacting the youth in monetary perspective but it is also creating some deep-rooted, <br />
           long-term psychological effects e.g. minimizing frustration among the unemployed <br /> youth.
           <br /><br />
           Our mission is to provide high quality education that connects young people with <br />
            opportunities to transform their lives. The educated youngsters who remain unemployed <br />
             gets frustrated, depressed and disheartened when they do not succeed in getting their <br />
              dream jobs. This training reinforces the educated youth to earn well through freelancing, <br />
               develop variety of skills through specified domains and promote entrepreneurial culture <br />
                that diverts youths potentials for constructive purposes. This energy diversion definitely <br />
                 make the youth more confident, self-reliant and constructive asset for a progressing <br />
                  economy.
        </Typography>
      </CardContent>
      </div>
    </Card>
  );
}

export default Card2;