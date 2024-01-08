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
        <div className={styles.background}>
            <div className={styles.top}>
                <div className={styles.reviewNumContainer}>
                    <span className={styles.reviewText}>
                        <span>Reviews </span>
                        <span className={styles.reviewNum}>{totalReviews}</span>
                    </span>
                </div>

                <div className={styles.searchContainer}>
                    <SearchBar />
                </div>
            </div>

            <div className={styles.recentReviews}>
                <p className={styles.recentReviewsTitle}>
                    Recent Reviews{' '}
                    <AiOutlineArrowDown className={styles.arrowDown} />
                </p>

                {reviews.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                ))}
            </div>
        </div>
    );
}
