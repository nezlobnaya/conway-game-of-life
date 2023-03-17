import React, { useEffect, useState } from 'react';
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
  const [intervalId, setIntervalId] = useState(null);

  const changeState = (newWorld, newGeneration) => {
    setWorld(newWorld);
    setGeneration(newGeneration);
  };

  const onChange = newWorld => changeState(newWorld, generation + 1);

  const onClear = () => changeState(createWorld(), 0);

  const onShuffle = () => changeState(shuffle(world), 0);

  const onPreset = preset => changeState(loadPreset(preset), 0);

  const onNext = () => onChange(nextGeneration(world));

  const onPlay = () => {
    setPlaying(true);
    const interval = setInterval(() => onNext(), GENERATION_TIME);
    setIntervalId(interval);
  };

  const onStop = () => {
    setPlaying(false);
    clearInterval(intervalId);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

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
