// import useWindowWidth from '../../utils/useWindowWidth';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// icon imports
import styles from './home.module.css';
import SearchBar from './SearchBar';

export default function Home() {
    // const width = useWindowWidth();
    const [hidden, setHidden] = useState(false);

    const handleClick = () => {
        console.log('clicked');
        setHidden(true);
    };

    return (
        <>
            {/* <div className={styles.header}>
                <Link className={styles.link} to='/'>
                    ABOUT
                </Link>
                <Link className={styles.link} to='/'>
                    CONTACT
                </Link>
            </div> */}
            <div className={styles.background}>
				<div className={styles.top}>
					<div className={styles.titleContainer}>
						<p className={styles.title}>Deis Eval</p>
					</div>
					<span className={styles.reviewText}> 
						Reviews : <span className={styles.reviewNum}>20</span>
					</span>
					<div className={styles.searchContainer}>
						<SearchBar handleClick={handleClick} />
					</div>
				</div>
             
				<div className={styles.recentReviews}>
					<p className={styles.recentReviewsTitle}>Recent Reviews</p>

				</div>
            </div>
		
        </>
    );
}
