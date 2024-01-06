/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './NavBar.module.css';

export default function NavBar() {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    const handleBack = () => {
        navigate('/');
        console.log('clicked');
    };

    let header = '';
    if (clicked) {
        header = styles.header;
    } else {
        header = styles.headerHidden;
    }

    return (
        <>
            <div
                className={styles.titleContainer}
                onClick={handleBack}
                role='button'
                tabIndex={0}
            >
                <p className={styles.title}>Deis Eval</p>
            </div>

            <div className={header} onClick={() => setClicked(!clicked)}>
                <Link className={styles.logo} to='/'>
                    Deis Eval
                </Link>
                <div className={styles.navWrapper}>
                    <Link className={styles.link} to='/search'>
                        Search
                    </Link>
                    <Link className={styles.link} to='/saved-courses'>
                        Saved
                    </Link>
                    <Link className={styles.link} to='/about'>
                        About
                    </Link>
                    <Link className={styles.link} to='/contact'>
                        Contact
                    </Link>
                </div>
                {/* {isHome ? null : <Footer />} */}
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
