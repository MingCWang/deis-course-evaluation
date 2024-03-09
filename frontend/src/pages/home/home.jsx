// import useWindowWidth from '../../utils/useWindowWidth';
import { AiOutlineArrowDown } from 'react-icons/ai';
import ReviewCard from '../../components/ReviewCard/ReviewCard.jsx';
import UseRecentReviews from '../../services/UseRecentReviews.jsx';
// icon imports
import styles from './home.module.css';
import SearchBar from './SearchBar';
import UseTotalReveiws from '../../services/UseTotalReviews.jsx';

export default function Home() {
    // const width = useWindowWidth();
    const { reviews, error } = UseRecentReviews();
    const { totalReviews } = UseTotalReveiws();

    return (
        <>
            <div className={styles.image}>
                <div className={styles.shade} />
            </div>
            <div className={styles.background}>
                <div className={styles.block} />
                <div className={styles.searchContainer}>
                    <span className={styles.description}>
                        Make Your Voice Heard <br />
                        <i>A course evaluation website for Brandeis</i>
                    </span>
                    <SearchBar />
                </div>
                <div className={styles.recentReviews}>
                    <div className={styles.recentReviewContainer}>
                        <p className={styles.recentReviewsTitle}>
                            <i> Recent Reviews</i>
                        </p>
                    </div>

                    {reviews.map((review) => (
                        <ReviewCard key={review._id} review={review} />
                    ))}
                </div>
                <div className={styles.reviewNumContainer}>
                    <span className={styles.reviewText}>
                        <span>
                            <em>Total Reviews </em>
                        </span>
                        <span className={styles.reviewNum}>{totalReviews}</span>
                    </span>
                </div>
            </div>
        </>
    );
}
