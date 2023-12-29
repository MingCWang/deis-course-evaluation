/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import styles from './NavBar.module.css';

export default function NavBar() {
	return (
		<div className={styles.header}>
		<Link className={styles.link} to='/'>
			ABOUT
		</Link>
		<Link className={styles.link} to='/'>
			CONTACT
		</Link>
	</div>
	);
	}	