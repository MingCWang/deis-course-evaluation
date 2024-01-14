/* eslint-disable react/prop-types */
import { FcGoogle } from 'react-icons/fc';
import getGoogleUrl from '../../services/getGoogleUrl';
import styles from './login.module.css';

// This is the login and register popup, which shows login or user depending on which button is clicked
export default function Login() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.loginContent}>
                    <p className={styles.loginTitle}>
                        Login to <span className={styles.logo}>Deis Eval</span>
                    </p>
                    <p className={styles.loginText}>
                        Upvote comments. <br />
                        Save your favorite courses. <br />
                        {/* Edit, save, and delete your ratings */}
                    </p>
                    <a href={getGoogleUrl()} className={styles.googleButton}>
                        <FcGoogle className={styles.googleIcon} />
                        Sign in with Google
                    </a>
                </div>
            </div>
        </div>
    );
}
