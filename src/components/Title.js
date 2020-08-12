import React from 'react';
import { Header } from 'semantic-ui-react';

export default () => (
  <Header as='h2' icon inverted textAlign='center' className='title'>
    Game Of Life
      <Header.Subheader>
      Cellular  automaton  devised  by John Conway
      </Header.Subheader>
  </Header>

);