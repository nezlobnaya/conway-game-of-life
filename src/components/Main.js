import React from 'react';
import Grid from './Grid';
import { GENERATION_TIME, createWorld, nextGeneration, shuffle } from './Game';
import { loadPreset } from './helpers/patterns';

class Game extends React.Component {

  state = {
    world: loadPreset(''),
    generation: 0,
    playing: false,
  }

  changeState = (world, generation) => this.setState({
    world: world,
    generation: generation,
  });

  onChange = world => this.changeState(world, this.state.generation + 1);

  onClear = () => this.changeState(createWorld(), 0);

  onShuffle = () => this.changeState(shuffle(this.state.world), 0);

  onPreset = preset => this.changeState(loadPreset(preset), 0);

  onNext = () => this.onChange(nextGeneration(this.state.world));

  onPlay = () => {
    this.setState({ playing: true });
    this.interval = setInterval(() => this.onNext(), GENERATION_TIME);
  }

  onStop = () => {
    this.setState({ playing: false });
    clearInterval(this.interval);
  }

  render() {
    const { world, playing } = this.state;
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "left"}}>
          <Grid world={world} onChange={this.onChange} />
        </div>
      </div>
    );
  }

}

export default Game;
