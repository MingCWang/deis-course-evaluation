import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from '../../../../utils/ColorTheme.jsx';

const labels = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating({ state, setState }) {
    const [hover, setHover] = React.useState(-1);

    return (
        <ThemeProvider theme={customTheme}>
            <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Rating
                    name='hover-feedback'
                    value={state}
                    precision={1}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                        setState(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    sx={{ fontSize: '30px' }}
                    emptyIcon={
                        <StarIcon style={{ opacity: 1 }} fontSize='inherit' />
                    }
                />
                {state !== null && (
                    <Box sx={{ ml: 2, color: 'secondary.main' }}>
                        {labels[hover !== -1 ? hover : state]}
                    </Box>
                )}
            </Box>
        </ThemeProvider>
    );
}
