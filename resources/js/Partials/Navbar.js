import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: '13px',
    fontSize: '27px',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'underline',
    textDecorationColor: '#18A0FB',
    marginTop: '12px',
  },
  NavColor: {
    background: '#000000',
    height: '65px',
  },
  logo: {
    color: '#18A0FB',
    cursor: 'pointer',
    textDecoration: 'underline',
    textDecorationColor: '#18A0FB',
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
    },
    '25%': {
      opacity: 0.25,
    },
    '50%': {
      opacity: 0.5,
    },
    '75%': {
      opacity: 0.75,
    },

    '100%': {
      opacity: 1,
    },
  },
  animationIcon: {
    animation: `$myEffect 4000ms`,
    animationTimingFunction: 'linear',
  },
}));

function Navbar({ button }) {
  const classes = useStyles();
  const [show, setshow] = useState(false);
  const ShowLogo = () => {
    setshow(!show);
  };
  const Nologo = () => {
    setshow(false);
  };
  return (
    <div>
      <Box display='flex'>
        <AppBar
          position='fixed'
          className={classes.NavColor}
          style={{ margin: 0 }}
        >
          <Toolbar>
            <Box flexGrow={1}>
              <Typography className={classes.title}>
                <span
                  className={classes.logo}
                  onMouseOver={ShowLogo}
                  onMouseOut={Nologo}
                >
                  <TheatersOutlinedIcon />
                </span>

                {show ? (
                  <span className={classes.animationIcon}>FUNLINKS</span>
                ) : (
                  ''
                )}
              </Typography>
            </Box>
            <Box marginLeft={1}>{button}</Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
