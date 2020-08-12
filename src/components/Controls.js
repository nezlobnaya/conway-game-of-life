import React from 'react';
import { Button } from 'semantic-ui-react';

const Controls = ({playing, shuffle, clear, next, stop, play}) => (
  <div className='controls'>
    <Button content='Shuffle' icon='random' labelPosition='right'
      onClick={shuffle} disabled={playing}
    />
    <Button content='Clear' icon='redo' labelPosition='right' onClick={clear} />
    <Button content='Next' icon='right arrow' labelPosition='right' onClick={next} />
    {playing ?
      <Button content='Stop' icon='stop' labelPosition='right' onClick={stop} /> :
      <Button content='Play' icon='play' labelPosition='right' onClick={play} />
    }
  </div>
);

export default Controls;