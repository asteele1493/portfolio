import React from "react";
import { Container, Typography, Paper } from '@mui/material';


export default function Bio() {
  return (
    <Container>
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4">About Me</Typography>
      <Typography variant="body1">
      PNW-based software engineer passionate about collaborative and creative approaches to elegant software solutions. My experience is informed by almost a decade of work within the hospitality sector as a chef as well as an academic background in sociology and law. I specialize in back-end development with interests in machine learning and user experience.
      </Typography>
    </Paper>
  </Container>
  )
}

