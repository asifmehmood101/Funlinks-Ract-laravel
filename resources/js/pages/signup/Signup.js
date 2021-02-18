import React from 'react';
import Navbar from '../../Partials/Navbar';
import Button from '@material-ui/core/Button';
import { makeStyles, Toolbar, Typography } from '@material-ui/core';
import Footer from '../../Partials/Footer';
import Plancard from '../../components/Plancard';
import { Link } from 'react-router-dom';
import Background from '../../images/backimage.jpg';

const useStyle = makeStyles({
  SignBtn: {
    background: '#18A0FB',
    color: 'white',
    borderRadius: '2px',
    height: '30px',
  },
  link: {
    textDecoration: 'none',
  },
  container: {
    backgroundColor: '#3f3f3f',
    height: '100%',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxShadow: 'inset 100px 100px 200px black',
  },
});

function Signup() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Toolbar>
        <Navbar
          button={
            <Link className={classes.link} to='/signin'>
              <Button
                variant='contained'
                color='primary'
                className={classes.SignBtn}
              >
                <Typography>Sign-in</Typography>
              </Button>
            </Link>
          }
        />
      </Toolbar>
      <Plancard />
      <Footer />
    </div>
  );
}

export default Signup;
