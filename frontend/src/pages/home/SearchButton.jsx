import * as React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import theme from '../../utils/ColorTheme.jsx';

export default function SearchButton() {
    const style = {
        borderRadius: '12px',
        padding: '10px 30px',
        fontSize: '15px',
        textTransform: 'none',
    };

    return (
        <ThemeProvider theme={theme}>
            <Button
                variant='contained'
                color='button'
                style={style}
                endIcon={<DoubleArrowIcon />}
            >
                search courses
            </Button>
        </ThemeProvider>
    );
}
