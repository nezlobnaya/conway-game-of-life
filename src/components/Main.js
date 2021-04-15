import React, { useState, useEffect, useCallback } from 'react';
import Grid from './Grid';
import Controls from './Controls';
import Presets from './Presets';
import Rules from './Rules';
import About from './About';
import { GENERATION_TIME, createWorld, nextGeneration, shuffle } from './Game';
import { loadPreset } from './helpers/patterns';

const Game = () => {
  const [world, setWorld] = useState(loadPreset(''));
  const [generation, setGeneration] = useState(0);
  const [playing, setPlaying] = useState(false);

  const onChange = world => {
    setGeneration(generation +1)
    setWorld(world)
    
  };

  const onClear = () => {
    setWorld(createWorld())
    setGeneration(0)
  };

  const onShuffle = () => {
    setWorld(shuffle(world))
    setGeneration(0)
  };

  const onPreset = preset => {
    setWorld(loadPreset(preset))
    setGeneration(0)
  };

  const onNext = useCallback(() => {
    setGeneration(generation +1)
    setWorld(nextGeneration(world))
  }, [generation, world]);


  useEffect(() => {
    setInterval(() => {
    }, GENERATION_TIME);

  }, [onNext]);

  const onPlay = () => {
   setPlaying({ playing: true });
   setGeneration(generation +1)
   setWorld(world);
  //  setInterval(() => onNext(), GENERATION_TIME);
  }

  const onStop = () => {
   setPlaying({ playing: false });
    clearInterval();
  }



return (

  <div>
        <div style={{ display: "flex", justifyContent: "left"}}>
          <Rules />
          <Grid world={world} onChange={onChange} />
        </div>
        {/* <p style={{textAlign: "center"}}>Generation: {this.state.generation}</p> */}
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
        <div style={{ display: "flex", justifyContent: "center"}} >
          <About />
        </div>
      </div>
    );
}
// class Game extends React.Component {


//   state = {
//     world: loadPreset(''),
//     generation: 0,
//     playing: false,
//   }

//   changeState = (world, generation) => this.setState({
//     world: world,
//     generation: generation,
//   });

//   onChange = world => this.changeState(world, this.state.generation + 1);

//   onClear = () => this.changeState(createWorld(), 0);

//   onShuffle = () => this.changeState(shuffle(this.state.world), 0);

//   onPreset = preset => this.changeState(loadPreset(preset), 0);

//   onNext = () => this.onChange(nextGeneration(this.state.world));

//   onPlay = () => {
//     this.setState({ playing: true });
//     this.interval = setInterval(() => this.onNext(), GENERATION_TIME);
//   }

//   onStop = () => {
//     this.setState({ playing: false });
//     clearInterval(this.interval);
//   }

//   render() {
//     const { world, playing } = this.state;
//     return (
//       <div>
//         <div style={{ display: "flex", justifyContent: "left"}}>
//           <Rules />
//           <Grid world={world} onChange={this.onChange} />
//         </div>
//         {/* <p style={{textAlign: "center"}}>Generation: {this.state.generation}</p> */}
//         <Controls
//           clear={this.onClear}
//           next={this.onNext}
//           play={this.onPlay}
//           stop={this.onStop}
//           shuffle={this.onShuffle}
//           playing={playing}
//         />
//         <Presets
//           load={this.onPreset}
//           playing={playing}
//         />
//         <div style={{ display: "flex", justifyContent: "center"}} >
//           <About />
//         </div>
//       </div>
//     );
//   }

// }

export default Game;
