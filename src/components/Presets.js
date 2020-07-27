import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

const options = [
    { key: 'beacon', value: 'beacon', text: 'Beacon' },
    { key: 'line', value: 'line', text: 'Line' },
    { key: 'glider', value: 'glider', text: 'Glider' },
    { key: 'pulsar', value: 'pulsar', text: 'Pulsar' },
    { key: 'diehard', value: 'diehard', text: 'Diehard' },
    { key: 'brain', value: 'brain', text: 'Brain' },
    { key: 'combination', value: 'combination', text: 'Combination' },
    { key: 'gliderGun', value: 'gliderGun', text: 'Gosper Glider Gun' }
];

class Presets extends React.Component {

    state = {
        preset: 'beacon'
    }

    onLoad = () => {
        const { preset } = this.state;
        return preset ? this.props.load(preset) : null;
    }

    render() {
        return (
            <div className='presets'>
                <Button as='div' labelPosition='left'>
                    <Dropdown
                        placeholder='Select a preset'
                        options={options}
                        selection
                        className='label'
                        value={this.state.preset}
                        onChange={(e, { value }) => this.setState({ preset: value })}
                    />
                    <Button
                        content='Load'
                        onClick={this.onLoad}
                        disabled={this.props.playing}
                    />
                </Button>
            </div>
        );
    }

}

export default Presets;