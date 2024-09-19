import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from '../../../../utils/ColorTheme.jsx';

export default function AttendanceButtons({ state, setState }) {
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
                        value='yes'
                        control={
                            <Radio
                                checked={state === 'yes'}
                                onChange={handleChange}
                                sx={{ color: 'secondary.main' }}
                            />
                        }
                        label='yes'
                        sx={{ color: 'secondary.main' }}
                    />
                    <FormControlLabel
                        value='no'
                        control={
                            <Radio
                                checked={state === 'no'}
                                onChange={handleChange}
                                sx={{ color: 'secondary.main' }}
                            />
                        }
                        label='no'
                        sx={{ color: 'secondary.main', mr:0 }}
                    />
                </RadioGroup>
            </FormControl>
        </ThemeProvider>
    );
}
