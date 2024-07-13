// TO DO: show reviews by user if user is logged in
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';

// import ReviewCard from '../../components/ReviewCard/ReviewCard.jsx';
import fetchUserReviews from '../../services/fetchUserReviews.js';
import styles from './my-reviews.module.css';

export default function MyReviews() {
    const [reviews, setReviews] = useState([]);
    const { authState } = useContext(UserContext);
    const [validated] = authState;

    useEffect(() => {
        if (validated) {
            const { id } = JSON.parse(localStorage.getItem('userInfo'));
            fetchUserReviews(id, setReviews);
        }
    }, [validated]);

    const empty = () => {
        if (reviews.length === 0)
            return <p className={styles.noreviews}>No reviews yet</p>;
        return null;
    };

    return (
        <div>
            <h1 className={styles.title}>My Reviews</h1>
            <div className={styles.dividerContainer}>
                <div className={styles.divider} />
            </div>
            {empty()}
            {reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
            ))}
        </div>
    );
}
