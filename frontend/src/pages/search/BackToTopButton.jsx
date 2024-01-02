import { useState, useEffect } from 'react';
import { FaArrowTurnUp } from "react-icons/fa6";
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
                type='button'
            >
				<FaArrowTurnUp className={styles.icon} />

                Back to top
            </button>
        </div>
    ) : null;
}
