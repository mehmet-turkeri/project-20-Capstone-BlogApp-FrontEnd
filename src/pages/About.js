import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import res from "../assets/aboutme.jpg"

const About = () => {  
  return (
    <Box sx={{
      display: 'flex', flexDirection: { xs: "column-reverse", sm: 'column-reverse', md: 'row' }, justifyContent: { xs: 'center', md: 'space-evenly' }, alignContent: 'center', gap: 5, margin: '3rem auto', backgroundColor: 'bisque'
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', gap: 3 }}>
        <Typography component="h2" variant="h4" >Hi, I'm MEHMET TURKERİ</Typography>
        <Typography component="h2" variant="h6">I'm Full Stack Developer</Typography>
      </Box> 
      <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', gap: 3 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image={res}
          sx={{ borderRadius: '50%', maxWidth: { xs: "200px", sm: "250px", md: "250px" } }}
        />
      </Box>
    </Box>
  )
}

export default About