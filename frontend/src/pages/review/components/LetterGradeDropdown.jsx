import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from '../../../utils/ColorTheme.jsx';



export default function ComboBox({ value, options, handleGradeChange }) {
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === value) {
            value = options[i];
        }
    }

    return (
        <ThemeProvider theme={customTheme}>
            <Autocomplete
                onChange={(event, value) => handleGradeChange(event, value)}
                disablePortal
                id='combo-box-demo'
                options={options}
				clearIcon={false}
				popupIcon={false}
				slotProps={{
                    paper: {
                        sx: {
                            '& .MuiAutocomplete-listbox': {
                                backgroundColor: 'secondary.main',
                                '& .MuiAutocomplete-option': {
                                    color: 'background.main',
                                },
                            },
							
                        },
                    },
                }}
                sx={{
                    width: 280,
                    // '& .MuiInputBase-root': {
                    //     borderRadius: '10px',
                    // },
                    // '@media (max-width: 665px)': {
                    //     width: '80%', // Width for screens smaller than 665px
                    // },
                }}
                renderInput={(params) => (
                    <TextField {...params} />
                )}
                value={value}
            />
        </ThemeProvider>
    );
}
