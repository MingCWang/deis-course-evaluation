import { Link, useLocation } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    const location = useLocation();
    const pathIsHome = location.pathname === '/';

    let footerStyles;
	let yearStyles;
    if (pathIsHome) {
        footerStyles = styles.footerMain;
		yearStyles = styles.yearMain;
    } else {
        footerStyles = styles.footer;
		yearStyles = styles.year;
    }

    return (
        <div className={styles.container}>
            <div className={footerStyles}>
                <Link className={styles.link} to='/terms-conditions'>
                    Terms & Conditions
                </Link>
                <Link className={styles.link} to='/privacy-policy'>
                    Privacy Policy
                </Link>
                {/* <Link className={styles.link} to='/'>
                    FAQ
                </Link> */}
			<p className={styles.year}>2024</p>
           
            </div>
        </div>
    );
}


// #665555