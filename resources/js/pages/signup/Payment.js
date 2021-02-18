import React from 'react';
import Navbar from '../../Partials/Navbar';
import Footer from '../../Partials/Footer';
import Paymentcard from '../../components/Paymentcard';
import { Toolbar, makeStyles } from '@material-ui/core';

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

function Payment() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Toolbar>
        <Navbar />
      </Toolbar>
      <Paymentcard />
      <Footer />
    </div>
  );
}

export default Payment;
