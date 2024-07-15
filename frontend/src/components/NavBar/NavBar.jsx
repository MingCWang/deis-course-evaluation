/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import styles from './NavBar.module.css';
// import UseValidateJWT from '../../services/UseValidateJWT.jsx';
import { UserContext } from '../../context/UserContext.jsx';

export default function NavBar() {
    const location = useLocation();
    const { authState } = useContext(UserContext);
    const [validated] = authState;
    const [profileClicked, setProfileClicked] = useState(false);

    // const {validated, setValidated }= UseValidateJWT();

    function handleOnClick() {
        // setProfileClicked(!profileClicked);
        setProfileClicked(!profileClicked);
    }

    if (location.pathname === '/login') {
        return null;
    }
    let { navBar } = styles;
    if (location.pathname === '/home') {
        navBar = styles.navBarAnimated;
    }

    return (
        <div className={navBar}>
            <div className={styles.navWrapper}>
                <Link className={styles.link} to='/'>
                    Home
                </Link>
                <Link className={styles.link} to='/search'>
                    Search
                </Link>
                {/* {!validated ? (
                        <Link className={styles.link} to='/saved-courses'>
                            Saved
                        </Link>
                    ) : null} */}
                {/* <Link className={styles.link} to='/contact'>
                        Contact
                    </Link> */}
                {!validated ? (
                    <Link className={styles.linkLogin} to='/login'>
                        Login
                    </Link>
                ) : (
                    <button
                        type='button'
                        className={styles.profileButton}
                        onClick={handleOnClick}
                    >
                        <AiOutlineUser className={styles.profileIcon} />
                    </button>
                )}
            </div>
        </div>
    );
}
