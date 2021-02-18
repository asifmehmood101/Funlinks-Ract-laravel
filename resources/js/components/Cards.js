import React from 'react';
import {
  makeStyles,
  Container,
  Typography,
  Box,
  Grid,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

const useStyel = makeStyles({
  SignBtn: {
    color: 'white',
    textDecoration: 'none',
    width: '250.82px',
    height: '60px',
    fontSize: '25px',
    borderRadius: '20rem',
    fontWeight: 'bold',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
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
  Flexbox: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    marginTop: '5rem',
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
});

function Cards({ step, headline, greet, detail, btn, children }) {
  const classes = useStyel();
  return (
    <Container maxWidth='sm' style={{ height: '38rem' }}>
      <Container maxWidth='xl'>
        <Box className={classes.Flexbox}>
          <Card className={classes.card} variant='outlined'>
            <Box>
              <CardContent>
                <Container>
                  <Typography className={classes.headline}>{step}</Typography>
                  <br />
                  <Box alignSelf='center'>
                    <br />
                    <Container maxWidth='xs' fixed>
                      <form noValidate autoComplete='on'>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Typography
                              variant='h4'
                              className={classes.headtitle}
                            >
                              {' '}
                              {headline}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography className={classes.textcolor}>
                              {' '}
                              {greet}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography className={classes.textcolor}>
                              {' '}
                              {detail}
                            </Typography>
                            <Typography className={classes.textcolor}>
                              {' '}
                              {children}
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sm={2} xs={1} />
                          <Grid item lg={2} sm={2} xs={1} />
                        </Grid>
                      </form>
                    </Container>
                  </Box>
                </Container>
              </CardContent>
            </Box>
          </Card>
        </Box>
      </Container>
    </Container>
  );
}

export default Cards;
