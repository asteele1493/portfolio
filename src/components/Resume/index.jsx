import React from 'react';
import { Button } from '@mui/material';

const resumeUrl = '../../media/resume'; // Replace with the actual URL of your resume

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank'; 
    link.download = 'Steele-Resume.pdf'; 
    link.click();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleDownload}>
      Download Resume
    </Button>
  );
}
