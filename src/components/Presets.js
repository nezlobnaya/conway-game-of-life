import React, { useState } from 'react';
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

const Presets = ({ playing, load }) => {
    
    let [preset, setPreset] = useState('beacon')

    const onLoad = () => {
        setPreset(load(preset))
    }

    return (
        <div className='presets'>
            <Button as='div' labelPosition='left'>
                <Dropdown
                    placeholder='Select a preset'
                    options={options}
                    selection
                    className='label'
                    value={preset}
                    onChange={(e, { value }) => setPreset(value)}
                />
                <Button
                    content='Load'
                    onClick={onLoad}
                    disabled={playing}
                />
            </Button>
        </div>
    );
}



export default Presets;