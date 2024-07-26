import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import p3 from '../assets/p3.png'
import p10 from '../assets/p10.jpg'
import p11 from '../assets/p11.png'
import p12 from '../assets/p12.png'
import p15 from '../assets/p15.jpg'

const Courses = () => {
  return (
    <div className='courses' >
      <h1 className='h1all'>IT Trainings Offering in Jawan Pakistan </h1>
      <div className='courses1'>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={p3}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
           Web and Mobile Application <br /> Development
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={p12}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Flutter Mobile Application <br /> Development
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={p15}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Graphic Design and Video <br /> Editing
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div> <br />
    <div className='courses1'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={p11}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
           Digital and Social Media <br /> Marketing
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={p10}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
           Blockchain Development
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  )
}

export default Courses
