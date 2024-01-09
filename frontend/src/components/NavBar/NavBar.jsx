/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import UseValidateJWT from '../../services/UseValidateJWT.jsx';
import storeLikedCourses from '../../services/storeLikedCourse';

export default function NavBar() {
	const navigate = useNavigate();
	const location = useLocation();
	const [clicked, setClicked] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const {validated, setValidated }= UseValidateJWT();
	console.log(validated);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 500) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleBack = () => {
		navigate('/');
		console.log('clicked');
	};


	const handleLogout = () => {
		localStorage.removeItem('jwt');
		localStorage.removeItem('authenticated');
		setValidated(false);
		storeLikedCourses();
		navigate('/');
	}

	// *****************************************************
	// variables for different styles depending on the page
	// *****************************************************
	let { container } = styles;

	if (isScrolled) {
		container = styles.containerScrolled;
	}

	if (location.pathname === '/login') {
		return null;
	}

	let header = '';
	if (clicked) {
		header = styles.header;
	} else {
		header = styles.headerHidden;
	}

	return (
		<div className={container}>
			<div
				className={styles.titleContainer}
				onClick={handleBack}
				onKeyDown={handleBack}
				role='button'
				tabIndex={0}
			>
				<p className={styles.title}>Deis Eval</p>
			</div>
			{!validated ? <Link className={styles.auth} to ='/login'>
						Login
					</Link> :
					<button type='button' onClick={handleLogout} className={styles.auth}>
						Logout
					</button>
					}
			<div
				className={header}
				onClick={() => setClicked(!clicked)}
				onKeyDown={() => setClicked(!clicked)}
				role='button'
				tabIndex={0}
			>
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
					onChange={() => setClicked(!clicked)}
					onClick={() => setClicked(!clicked)}
				/>
				<label className={styles.iconmenu} htmlFor='checkicon'>
					<div className={`${styles.bar} ${styles.bar1}`} />
					<div className={`${styles.bar} ${styles.bar2}`} />
					<div className={`${styles.bar} ${styles.bar3}`} />
				</label>
			</div>
		</div>
	);
}
