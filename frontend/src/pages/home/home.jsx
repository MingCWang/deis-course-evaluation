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
                <div className={styles.titleContainer}>
                    <p className={styles.title}>Deis Eval</p>
                </div>
				{/* <span className={styles.reviewNum}> </span> */}
                <div className={styles.searchContainer}>
				
                    {/* <div className={styles.topLine} />
                    <div className={styles.bottomLine} /> */}
                    {/* <div
                        className={
                            hidden
                                ? styles.shiftContainerHidden
                                : styles.shiftContainer
                        }
                        role='button'
                        tabIndex={0}
                        // onClick={handleClick}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                handleClick();
                            }
                        }}
                    > */}
                        {/* <div className={styles.shiftText1}>Search</div>
                        <div className={styles.shiftText2}>a</div>
                        <div className={styles.shiftText3}>Course</div> */}
                    {/* </div> */}

                    <SearchBar handleClick={handleClick} />
                </div>
            </div>
        </>
    );
}
