import { Link, useLocation } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    const location = useLocation();
    const pathIsHome = location.pathname === '/';

    let footerStyles;
    if (pathIsHome) {
        footerStyles = styles.footerMain;
    } else {
        footerStyles = styles.footer;
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
