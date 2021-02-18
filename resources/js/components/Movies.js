import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ExplicitIcon from '@material-ui/icons/Explicit';
import { Link } from 'react-router-dom';

//style

const usestyle = makeStyles({
  container: {
    height: '10rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  SignBtn: {
    color: 'white',
    textDecoration: 'none',
    width: '200px',
    height: '50px',
    fontSize: '20px',
    borderRadius: '3px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  link: {
    textDecoration: 'none',
  },
});

function Movies() {
  const classes = usestyle();
  return (
    <div className={classes.container}>
      <Box alignSelf='center'>
        <Link to='/Explore' className={classes.link}>
          <Button
            className={classes.SignBtn}
            variant='contained'
            color='primary'
          >
            Explore
            <ExplicitIcon />
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default Movies;
