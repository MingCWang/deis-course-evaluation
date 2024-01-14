/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import styles from './ProfileDropdown.module.css';
import { UserContext } from '../../context/UserContext.jsx';
import storeLikedCourses from '../../services/storeLikedCourse';

export default function ProfileDropdown({ handleOnClick }) {
    const { authState } = useContext(UserContext);
	const [validated, setValidated] = authState;
	const navigate = useNavigate();
	let name;
	let email;
	if(validated) {
		name = JSON.parse(localStorage.getItem('userInfo')).name;
		email = JSON.parse(localStorage.getItem('userInfo')).email;
	}else{
		navigate('/login');
	}

	const handleLogout = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('authenticated');
        setValidated(false);
        storeLikedCourses();
        navigate(-4);
    };


    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div className={styles.background} onClick={handleOnClick}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.title}>
                        {name ? `Welcome ${name}!` : 'Welcome!'}
                    </p>
                    <p className={styles.email}>{email}</p>
                    <div className={styles.links}>
                        <Link to='/saved-courses' className={styles.link}>
                            <span className={styles.text}>
                                Saved Courses
                            </span>
                        </Link>
                        <Link to='/my-reviews' className={styles.link}>
                            <span className={styles.text}>Reviews</span>
                        </Link>
						<Link to='/manage-account' className={styles.link}>
                            <span className={styles.text}>Manage Account</span>
                        </Link>
                    </div>
                    <button
                        to='/'
                        type='button'
                        className={styles.signout}
                        onClick={handleLogout}
                    >
                        <span className={styles.text}>Logout</span>
                    </button>
			
                </div>
            </div>
        </div>
    );
}
