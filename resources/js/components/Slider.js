import React from 'react';
import Moviecard from './Moviecard';
import { Container } from '@material-ui/core';

function Slider() {
  return (
    <Container maxWidth='xl'>
      <Moviecard />
    </Container>
  );
}

export default Slider;
