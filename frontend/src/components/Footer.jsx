import { Link, useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import styles from './Footer.module.css';
import customTheme from '../utils/ColorTheme.jsx';

export default function Footer() {
    const location = useLocation();

    if (location.pathname === '/login') {
        return null;
    }

	const columnContainer = {
		display: 'flex',
		flexDirection: 'column',
	};

    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={4} sm={4} md={6}>
                        <div className={styles.logoContainer}>
                            <img
                                src='./300.png'
                                alt='logo'
                                className={styles.logo}
                            />
                            <h3 className={styles.logoText}>deiseval</h3>
                        </div>
                        <p className={styles.logoParagraph}>Never pick the wrong course again.</p>
						<ThemeProvider theme={customTheme}>
							<IconButton aria-label="linkedin" sx={{marginLeft: '-8px', paddingLeft: '0', marginTop: '20px'}} href='https://www.linkedin.com/company/deiseval/'>
								<LinkedInIcon sx={{fontSize: 40, color: 'var(--paragraph)'}}/>
							</IconButton>
						</ThemeProvider>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3} sx={columnContainer}>
                        <h3 className={styles.columnTitle}>Resources</h3>
						<Link className={styles.columnFont} to='/about'>
                            About
                        </Link>
                        <Link className={styles.columnFont} to='/terms-conditions'>
                            Terms & Conditions
                        </Link>
                        <Link className={styles.columnFont} to='/privacy-policy'>
                            Privacy Policy
                        </Link>
                        <Link className={styles.columnFont} to='/site-regulations'>
                            Site Regulations
                        </Link>
                    </Grid>
                    <Grid item xs={4} sm={4} md={3}>
                        <h3 className={styles.columnTitle}>Contact</h3>
                        <p className={styles.columnFont}>mingshihwang@brandeis.edu </p>
                    </Grid>
					<Grid item xs={4} sm={8} md={12}>
                    	<p className={styles.rights}> © 2024. All Rights Reserved</p>
					</Grid>
                </Grid>
            </div>
        </div>
    );
}

// #665555
