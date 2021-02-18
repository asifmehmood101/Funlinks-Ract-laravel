import React from 'react';
import {
  makeStyles,
  Box,
  AppBar,
  Typography,
  Toolbar,
} from '@material-ui/core';

const useStyle = makeStyles({
  title: {
    marginBottom: '15px',
    color: 'white',
    marginTop: '12px',
  },
  NavColor: {
    background: '#000000',
    height: '50px',
  },
  logo: {
    color: '#18A0FB',
  },
  navbar: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
  },
});

function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.navbar}>
      <Box display='flex'>
        <AppBar position='static' className={classes.NavColor}>
          <Box alignSelf='center'>
            <Toolbar>
              <Typography className={classes.title}>
                This project is made by{' '}
                <span className={classes.logo}>A Team</span> with 💖
              </Typography>
            </Toolbar>
          </Box>
        </AppBar>
      </Box>
    </div>
  );
}

export default Footer;
