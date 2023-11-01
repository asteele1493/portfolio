import "./App.css";
import React from 'react';
import Contact from "./components/Contact";
import Header from "./components/Header";
import Bio from "./components/Bio";
import { ThemeProvider } from '@mui/material/styles';
import themes from "./style/themes";
import Resume from "./components/Resume";


function App() {
  return (
    <ThemeProvider theme={themes}>
      <Header/>
      <Bio/>
      <Contact/>
      <Resume/>
    </ThemeProvider>
  );
}

export default App;
