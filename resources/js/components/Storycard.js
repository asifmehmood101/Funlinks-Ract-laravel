import React from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

//import image
import Background from '../images/backimage.jpg';

const useStyle = makeStyles({
  SignBtn: {
    background: '#008DEC',
    color: 'white',
    textDecoration: 'none',
    width: '250.82px',
    height: '60px',
    fontSize: '20px',
    borderRadius: '3px',
  },
  title: {
    fontWeight: '600',
    color: 'white',
    marginTop: 'auto',
    textAlign: 'center',
    textShadow: '0px 10px 4px rgba(0, 0, 0, 0.25)',
    lineHeight: '1',
  },
  containers: {
    height: '750px',
    width: '100%',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxShadow: 'inset 100px 100px 200px black',
  },
  link: {
    textDecoration: 'none',
  },
  Flexbox: {
    display: 'flex',
    flexDirection: 'column',
    height: '40rem',
    justifyContent: 'center',
  },
  firstText: {
    color: '#008DEC',
  },
});

function Storycard() {
  const classes = useStyle();
  return (
    <Container className={classes.containers} maxWidth='xl'>
      <Box className={classes.Flexbox} maxWidth='sm'>
        <Box p={2} alignSelf='center'>
          <Typography className={classes.title} variant='h2'>
            <span className={classes.firstText}>Unlimited</span> Entertainment.
            50% off your first 2 months
          </Typography>
        </Box>
        <Box p={2} alignSelf='center'>
          <Typography className={classes.title} variant='h5'>
            Ready to watch? Click on SignUp for monthly membership.
          </Typography>
        </Box>
        <Box p={1} alignSelf='center'>
          <Link className={classes.link} to='/signup'>
            <Button
              className={classes.SignBtn}
              variant='contained'
              color='primary'
              al
            >
              Sign Up
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Storycard;
