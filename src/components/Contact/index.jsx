import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GitlabIcon from '../../media/gitlab.svg';

export default function Contact() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    newWindow.focus();
  };

  return (
    <Container>
      <Typography variant="h4">Contact Me</Typography>
      <Grid container direction="column" alignItems="left" spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" onClick={() => openInNewTab("mailto:andrasteele@gmail.com")}>
            <EmailIcon fontSize="small" style={{ cursor: "pointer" }} />
            <Typography>andrasteele@gmail.com</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <LocationOnIcon fontSize="small" />
            <Typography>Portland, Oregon</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" onClick={() => openInNewTab("https://www.linkedin.com/in/andra-steele/")}>
            <LinkedInIcon fontSize="small" style={{ cursor: "pointer" }} />
            <Typography>LinkedIn</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" onClick={() => openInNewTab("https://github.com/asteele1493")}>
            <GitHubIcon fontSize="small" style={{ cursor: "pointer" }} />
            <Typography>GitHub</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" onClick={() => openInNewTab("https://gitlab.com/asteele1493")}>
            <img src={GitlabIcon} alt="GitLab" width={24} height={24} style={{ cursor: "pointer" }} />
            <Typography>GitLab</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
