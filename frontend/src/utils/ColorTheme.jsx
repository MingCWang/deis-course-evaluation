import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiTextField: {
			styleOverrides: {
			root: {
				'& label': {
				color: '#fffffe',
				},
				'& label.Mui-focused': {
				color: '#fffffe',
				},
				'& .MuiInput-underline:after': {
				borderBottomColor: '#fffffe',
				},
				'& .MuiOutlinedInput-root': {
					color: '#fffffe',
				'& fieldset': {
					borderColor: '#fffffe',
				},
				'&:hover fieldset': {
					borderColor: '#fffffe',
					borderWidth: '0.15rem',
				},
				'&.Mui-focused fieldset': {
					borderColor: '#fffffe',
				},
				},
			},
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
			root: {
				textTransform: 'initial',
				fontSize: '1rem',
			},
			},
		},
	},
    palette: {
        primary: {
            main: '#b8c1ec',
        },
        secondary: {
            main: '#fffffe',
        },
        tertiary: {
            main: '#eebbc3',
        },
		background: {
			main: '#232946',
		},
        highlight: {
            main: '#eebbc3',
        },
        stroke: {
            main: '#121629',
        },
        button: {
            main: '#eebbc3',
        },
        cardBackground: {
            main: '#fffffe',
        },
        cardHeadline: {
            main: '#232946',
        },
        cardParagraph: {
            main: '#232946',
        },
        cardHighlight: {
            main: '#d4939d',
        },
        cardTagText: {
            main: '#b8c1ec',
        },
        cardTagBackground: {
            main: '#232946',
        },
        A: {
            main: '#4ce600',
        },
        B: {
            main: '#339a00',
        },
        C: {
            main: '#ffffbf',
        },
        D: {
            main: '#fdae5d',
        },
        F: {
            main: '#d7d7d7',
        },
    },
    typography: {
        fontFamily: 'Kanit, sans-serif',
    },

	
});

export default theme;
