import { useState, useEffect } from 'react';
// import { FaArrowTurnUp } from "react-icons/fa6";
import styles from './BackToTopButton.module.css';

export default function BackToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return showButton ? (
        <div className={styles.container}>
            <button
                className={styles.button}
                onClick={scrollToTop}
                type='button' // Add the type attribute with the value of 'button'
            >
                <div className={styles.text}>
                    <span>Back</span>
                    <span>to</span>
                    <span>top</span>
                </div>
                <div className={styles.clone}>
                    <span>Back</span>
                    <span>to</span>
                    <span>top</span>
                </div>
                <svg
                    strokeWidth='2'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    fill='none'
                    className={`${styles.h6} ${styles.w6}`}
                    xmlns='http://www.w3.org/2000/svg'
                    width='20px'
                >
                    <path
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                        strokeLinejoin='round'
                        strokeLinecap='round'
                    />
                </svg>
            </button>
        </div>
    ) : null;
}
