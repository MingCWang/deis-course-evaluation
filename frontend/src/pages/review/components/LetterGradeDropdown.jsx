import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Montserrat, serif',
            textTransform: 'none',
        },
    },
});

export default function ComboBox({ value, options, label, handleGradeChange }) {
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === value) {
            value = options[i];
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Autocomplete
                onChange={(event, value) => handleGradeChange(event, value)}
                disablePortal
                id='combo-box-demo'
                options={options}
                sx={{
                    width: 615,
                    '& .MuiInputBase-root': {
                        borderRadius: '10px',
                    },
                    '@media (max-width: 665px)': {
                        width: '80%', // Width for screens smaller than 665px
                    },
                }}
                renderInput={(params) => (
                    <TextField {...params} label={label} />
                )}
                value={value}
            />
        </ThemeProvider>
    );
}
