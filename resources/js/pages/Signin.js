import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Partials/Navbar';
import Footer from '../Partials/Footer';
import Scard from '../components/Signupcard';
import Signcard from '../components/Signincard';
import { makeStyles, Container, Toolbar, Grid } from '@material-ui/core';

import Background from '../images/backimage.jpg';

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

function Signin() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Toolbar>
        <Navbar />
      </Toolbar>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Scard />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Signcard />
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </div>
  );
}

export default Signin;
