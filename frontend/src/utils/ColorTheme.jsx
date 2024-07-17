import { createTheme } from '@mui/material/styles';


function getCSSVariableValue(variable) {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}


const theme = createTheme({
    palette: {
        // primary: {
        //     main: '#b8c1ec',
        // },
        // secondary: {
        //     main: '#fffffe',
        // },
        // tertiary: {
        //     main: '#eebbc3',
        // },
        // highlight: {
        //     main: '#eebbc3',
        // },
        // stroke: {
        //     main: '#121629',
        // },
        // button: {
        //     main: '#eebbc3',
        // },
        // cardBackground: {
        //     main: '#fffffe',
        // },
        // cardHeadline: {
        //     main: '#232946',
        // },
        // cardParagraph: {
        //     main: '#232946',
        // },
        // cardHighlight: {
        //     main: '#d4939d',
        // },
        // cardTagText: {
        //     main: '#b8c1ec',
        // },
        // cardTagBackground: {
        //     main: '#232946',
        // },

        highlight: {
            main: getCSSVariableValue('--headline'),
        },
        stroke: {
            main: getCSSVariableValue('--stroke'),
        },
        button: {
            main: getCSSVariableValue('--button'),
        },
        cardBackground: {
            main: getCSSVariableValue('--card-background'),
        },
        cardHeadline: {
            main: getCSSVariableValue('--card-headline'),
        },
		cardParagraph: {
			main: getCSSVariableValue('--card-paragraph'),
		},
		cardHighlight: {
			main: getCSSVariableValue('--card-highlight'),
		},
		cardTagText: {
			main: getCSSVariableValue('--card-tag-text'),
		},
		cardTagBackground: {
			main: getCSSVariableValue('--card-tag-background'),
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
