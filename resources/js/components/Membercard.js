import React from 'react';
import Cards from './Cards';
import { makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyel = makeStyles({
  SignupBtn: {
    color: 'white',
    textDecoration: 'none',
    height: '60px',
    fontSize: '25px',
    borderRadius: '3px',
    fontWeight: 'bold',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  headtitle: {
    color: '#008DEC',
  },
  headline: {
    fontWeight: '500',
    color: 'white',
    fontSize: '2rem',
    textDecoration: '5px underline #008DEC',
  },
  contentSpace: {
    marginTop: '.5em',
    marginBottom: '.5em',
  },
  card: {
    backgroundColor: 'black ',
    border: '2px solid #008DEC',
    borderRadius: '10px',
    filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))',
  },
  link: {
    textDecoration: 'none',
  },
  textcolor: {
    color: 'white',
  },
  icon: {},
});

function Membercard() {
  const classes = useStyel();
  return (
      <>
          <Cards
              step={"Step 3/3"}
              headline={"All setup your good to go enjoy your session"}
          >
              <br />
              <Link className={classes.link} to="/Explore">
                  <Button
                      type="submit"
                      className={classes.SignupBtn}
                      variant="contained"
                      color="primary"
                      fullWidth
                  >
                      <Typography variant="h5">Continue</Typography>
                  </Button>
              </Link>
          </Cards>
      </>
  );
}

export default Membercard;
