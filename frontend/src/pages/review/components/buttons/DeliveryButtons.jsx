import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from '../../../../utils/ColorTheme.jsx';

export default function DeliveryButtons({ state, setState }) {
    const handleChange = (event) => {
        setState(event.target.value);
    };

    return (
        <ThemeProvider theme={customTheme}>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                >
                    <FormControlLabel
                        value='In Person'
                        control={
                            <Radio
                                checked={state === 'In Person'}
                                onChange={handleChange}
                                sx={{ color: 'secondary.main' }}
                            />
                        }
                        label='In Person'
                        sx={{ color: 'secondary.main' }}
                    />
                    <FormControlLabel
                        value='Online'
                        control={
                            <Radio
                                checked={state === 'Online'}
                                onChange={handleChange}
                                sx={{ color: 'secondary.main' }}
                            />
                        }
                        label='Online'
                        sx={{ color: 'secondary.main' }}
                    />
					 <FormControlLabel
                        value='Hybrid'
                        control={
                            <Radio
                                checked={state === 'Hybrid'}
                                onChange={handleChange}
                                sx={{ color: 'secondary.main' }}
                            />
                        }
                        label='Hybrid'
                        sx={{ color: 'secondary.main', mr:0 }}
                    />
                </RadioGroup>
            </FormControl>
        </ThemeProvider>
    );
}
