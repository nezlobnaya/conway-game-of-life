import React, { useEffect, useRef, useState } from 'react';
import { createWorld, GENERATION_TIME, nextGeneration, shuffle } from './Game';

import About from './About';
import Controls from './Controls';
import Grid from './Grid';
import { loadPreset } from './helpers/patterns';
import Presets from './Presets';
import Rules from './Rules';

const Game = () => {
  const [world, setWorld] = useState(loadPreset(''));
  const [generation, setGeneration] = useState(0);
  const [playing, setPlaying] = useState(false);
  // The useRef hook is better suited for storing mutable values that do not trigger re-renders when changed.
  const intervalId = useRef(null);


  // to avoid stale state in the onNext function,
  // use the functional form of setState to ensure that we always have the latest state.
  const changeState = (newWorld, newGeneration) => {
    setWorld(newWorld);
    setGeneration(newGeneration);
  };

  const onChange = newWorld => changeState(newWorld, generation + 1);

  const onClear = () => changeState(createWorld(), 0);

  const onShuffle = () => changeState(shuffle(world), 0);

  const onPreset = preset => changeState(loadPreset(preset), 0);

  // use the functional form of setWorld, 
  // which ensures that we're always working with the latest world state. 
  const onNext = () => {
    setWorld((prevWorld) => {
      const newWorld = nextGeneration(prevWorld);
      onChange(newWorld);
      return newWorld;
    });
  };

  const onPlay = () => {
    setPlaying(true);
    intervalId.current = setInterval(onNext, GENERATION_TIME);
  };

  const onStop = () => {
    setPlaying(false);
    clearInterval(intervalId.current);
    intervalId.current = null;
  };


  useEffect(() => {
    // This is an empty effect function that does not perform any side effects when the component mounts.

    return () => {
      // This function is the cleanup function that runs when the component unmounts.

      if (intervalId.current) {
        // If there is an intervalId stored in the useRef variable, clear the interval.
        clearInterval(intervalId.current);
      }
    };
  }, []); // The empty dependency array ensures the effect function only runs on mount and the cleanup function only runs on unmount.


  return (
    <div>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Rules />
        <Grid world={world} onChange={onChange} />
      </div>
      <Controls
        clear={onClear}
        next={onNext}
        play={onPlay}
        stop={onStop}
        shuffle={onShuffle}
        playing={playing}
      />
      <Presets
        load={onPreset}
        playing={playing}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <About />
      </div>
    </div>
  );
};

export default Game;
