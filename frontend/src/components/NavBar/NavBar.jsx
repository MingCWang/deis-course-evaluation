/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';
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

    if (location.pathname === '/login' || location.pathname.includes('/review')) {
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
                    <IconButton
                        aria-label='profile'
                        r
                        sx={{ color: 'white' }}
                        onClick={handleOnClick}
                    >
                        <AiOutlineUser />
                    </IconButton>
                )}
            </div>
        </div>
    );
}
