// import useWindowWidth from '../../utils/useWindowWidth';
import UseRecentReviews from '../../services/UseRecentReviews.jsx';
// icon imports
import styles from './home.module.css';
// import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import UseReviewNum from '../../services/UseReviewNum.jsx';

export default function Home() {
    // const width = useWindowWidth();
    const { reviews, error } = UseRecentReviews();
    const { reviewNum } = UseReviewNum();

    return (
        <div>
            <div className={styles.gradient} />
            <div className={styles.descContainer}>
                <div className={styles.desc}>
                    <h1>deiseval</h1>
                    <p>course evaluation site for Brandeis University</p>
                    <div className={styles.searchButton}>
                        <SearchButton />
                    </div>
                </div>
                <div className={styles.stats}>
                    <div>
                        {/* <h2>{totalReviews}</h2> */}
                        <h1 className={styles.reviewNum}>
                            60<span className={styles.unit}>reviews</span>
                        </h1>
                    </div>
                    <div>
                        {/* <h2>{totalReviews}</h2> */}
                        <h1 className={styles.reviewNum}>
                            2300<span className={styles.unit}>courses</span>
                        </h1>
                        <h5>last updated on 07-08-2024</h5>
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                <div className={styles.shade}>
                    <h1 className={styles.slogan}>
                        Information Hub for Brandeis Student Course Reviews
                    </h1>
                </div>
            </div>
            <div className={styles.temp} />
        </div>
    );
}
