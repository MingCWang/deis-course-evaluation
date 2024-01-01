/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoReturnUpBack } from 'react-icons/io5';
import styles from './NavBar.module.css';
import Footer from '../Footer.jsx';

export default function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';
    const [clicked, setClicked] = useState(false);

    const handleBack = () => {
        navigate(-1);
        console.log('back');
    };

    let header = '';
    if (clicked) {
        header = styles.header;
    } else {
        header = styles.headerHidden;
    }

    return (
        <>
            {isHome ? (
                <div />
            ) : (
                <div
                    className={`${styles.link} ${styles.back}`}
                    onClick={handleBack}
                    onKeyDown={handleBack} // Add onKeyDown event listener
                    role='button'
                    tabIndex={0}
                >
                    <div className={styles.backWrapper}>
                        <IoReturnUpBack className={styles.backIcon} /> BACK
                    </div>
                </div>
            )}
            <div className={header} onClick={() => setClicked(!clicked)}>
                <Link className={styles.logo} to='/'>
                    DEIS EVAL
                </Link>
                <div className={styles.navWrapper}>
                    <Link className={styles.link} to='/saved-courses'>
                        SAVED
                    </Link>
                    <Link className={styles.link} to='/'>
                        ABOUT
                    </Link>
                    <Link className={styles.link} to='/'>
                        CONTACT
                    </Link>
                </div>
                {isHome ? null : <Footer />}
            </div>
            <div className={styles.burger}>
                <input
                    hidden
                    className={styles.checkicon}
                    id='checkicon'
                    name='checkicon'
                    type='checkbox'
                    checked={clicked}
                    onClick={() => setClicked(!clicked)}
                />
                <label className={styles.iconmenu} htmlFor='checkicon'>
                    <div className={`${styles.bar} ${styles.bar1}`} />
                    <div className={`${styles.bar} ${styles.bar2}`} />
                    <div className={`${styles.bar} ${styles.bar3}`} />
                </label>
            </div>
        </>
    );
}
