import React from 'react';
import { Toolbar } from '@material-ui/core';
import HomeNavbar from '../Partials/Homenavbar';
import Slider from '../components/Slider';
import Explore from '../components/Movies';
import Footer from '../Partials/Footer';

function Home() {
  return (
    <div style={{ backgroundColor: '#0c111b' }}>
      <Toolbar style={{ margin: 0, padding: 0 }}>
        <HomeNavbar />
      </Toolbar>
      <Slider />
      <Explore />
      <Footer />
    </div>
  );
}

export default Home;
