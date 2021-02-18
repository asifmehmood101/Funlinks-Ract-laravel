import React from 'react';
import { Toolbar, makeStyles } from '@material-ui/core';
import Navbar from '../../Partials/Navbar';
import Footer from '../../Partials/Footer';
import Creditoption from '../../components/Creditoption';
import Background from '../../images/backimage.jpg';

const useStyle = makeStyles({
  container: {
    backgroundColor: '#3f3f3f',
    height: '100%',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxShadow: 'inset 100px 100px 200px black',
  },
});

function Credit() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Toolbar>
        <Navbar />
      </Toolbar>
      <Creditoption />
      <Footer />
    </div>
  );
}

export default Credit;
