import * as React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import RateReviewIcon from '@mui/icons-material/RateReview';
import theme from '../../utils/ColorTheme.jsx';

export default function ReviewButton() {
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
                endIcon={<RateReviewIcon />}
            >
                leave a review
            </Button>
        </ThemeProvider>
    );
}
