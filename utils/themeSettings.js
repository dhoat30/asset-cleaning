import { createTheme } from '@mui/material/styles';
//export theme settings
// mui theme settings 
export const theme = createTheme({

    palette: {
        mode: 'light',
        primary: {
            main: '#80C342',
            light: "#295000"

        },
        secondary: {
            main: '#0DA7E0',


        },
        contrastThreshold: 4.5,
    },
    typography: {
        fontFamily: [
            'var(--font-work-sans)',
            "Segoe UI",
            'sans-serif',
        ].join(','),
        h1: {

            fontWeight: 400,
            '@media (max-width:900px)': {
                fontSize: '1.5rem',
            },
        },
        h2: {
            fontWeight: 600,
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h3: {
            fontWeight: 700,
            color: "#1B1C18",
            '@media (max-width:600px)': {
                fontSize: '2rem',
            },

        },
        h4: {
            fontWeight: 600,
        },

        h6: {
            fontWeight: 400,
            color: "var(--dark-on-surface)",
            '@media (max-width:600px)': {
                fontSize: '1.1rem',
            },
        },
        body1: {
            color: '#44483E',

        },

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "20px",
                    textTransform: "none",
                }
            }
        }
    }
});