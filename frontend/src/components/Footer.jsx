import { Link, useLocation } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    const location = useLocation();


    if (location.pathname === '/login') {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.footer}>
				<div>
					<h3>Deis Eval</h3>
					<p>Never pick the wrong course again</p>
				</div>
				<div>
					<h3>Resources</h3>
					<Link className={styles.link} to='/terms-conditions'>
						Terms & Conditions
					</Link>
					<Link className={styles.link} to='/privacy-policy'>
						Privacy Policy
					</Link>
					<Link className={styles.link} to='/site-regulations'>
						Site Regulations
					</Link>
				</div>
				<div>
					<h3>Resources</h3>
					<Link className={styles.link} to='/terms-conditions'>
						Terms & Conditions
					</Link>
					<Link className={styles.link} to='/privacy-policy'>
						Privacy Policy
					</Link>
					<Link className={styles.link} to='/site-regulations'>
						Site Regulations
					</Link>
				</div>
                <p className={styles.year}> © 2024. All Rights Reserved</p>
   
            </div>
        </div>
    );
}

// #665555
