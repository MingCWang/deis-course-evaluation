/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { IoReturnUpBack } from 'react-icons/io5';
import styles from './NavBar.module.css';

export default function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    const handleBack = () => {
        navigate(-1);
        console.log('back');
    };
    return (
        <div className={styles.header}>
            {isHome ? (
                <div />
            ) : (
                <div
                    className={`${styles.link} ${styles.back}`}
                    onClick={handleBack}
                    role='button'
                    tabIndex={0}
                >
                    <div className={styles.backWrapper}>
                        <IoReturnUpBack className={styles.backIcon} /> BACK
                    </div>
                </div>
            )}
            <Link className={styles.link} to='/'>
                ABOUT
            </Link>
            <Link className={styles.link} to='/'>
                CONTACT
            </Link>
        </div>
    );
}
