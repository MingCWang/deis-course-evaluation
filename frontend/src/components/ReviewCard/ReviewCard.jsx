/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import styles from './ReviewCard.module.css';
import styles1 from './MyReviewCard.module.css';
import convertToLetterGrade from '../../utils/convertToLetterGrade';
import RatingBox from '../CourseReviewCard/RatingBox.jsx';

export default function ReviewCard({ review }) {
    const formattedDate = format(new Date(review.createdAt), 'MMMM do, yyyy');
    let attendance = '';
    if (review.attendance === 'false') {
        attendance = 'Not Required';
    } else {
        attendance = 'Mandatory';
    }

    let { card } = styles;
    // const deleteButton = () => {
    //     if (window.location.pathname === '/my-reviews') {
    //         return <button className={styles1.deleteButton}>Delete</button>;
    //     }
    //     return null;
    // };

    let rating;
    const ratingAverage = review.rate;
    let color;

    if (ratingAverage % 1 === 0) {
        rating = ratingAverage.toFixed(1);
    } else {
        rating = ratingAverage;
    }

    if (rating === 5) {
        color = styles.green;
    } else if (rating >= 4) {
        color = styles.lightGreen;
    } else if (rating >= 3) {
        color = styles.yellow;
    } else if (rating >= 2) {
        color = styles.orange;
    } else if (rating >= 1) {
        color = styles.red;
    }

    if (window.location.pathname === '/my-reviews') {
        card = styles1.card;
    }

    return (
        <div className={`${card} ${color}`}>
            <RatingBox ratingAverage={review.rate} />
            <div className={styles.body}>
                <div className={styles.contents}>
                    <div className={styles.top}>
                        <p className={styles.course}>
                            <span
                                className={`${styles.courseFont} ${styles.bold}`}
                            >
                                {review.course.name}
                            </span>{' '}
							<div className={styles.profName}>
								with professor{' '}
								<span className={styles.bold}>
									{review.professor}
								</span>
							</div>
                        
                        </p>
                        <p className={styles.date}>{formattedDate}</p>
                    </div>
                    <div className={styles.infoContainer}>
                        <p className={styles.info}>
                            Term:{' '}
                            <span className={styles.bold}>
                                {review.semester}
                            </span>
                        </p>
                        <p className={styles.infoWide}>
                            Delivery:{' '}
                            <span className={styles.bold}>
                                {review.delivery}
                            </span>
                        </p>
						<p className={styles.infoNarrow}>
                            Usefulness:{' '}
                            <span className={styles.bold}>
                                {review.usefulness}
                            </span>
                        </p>
                        <p className={styles.info}>
                            Attendance:{' '}
                            <span className={styles.bold}>{attendance}</span>
                        </p>
                        <p className={styles.info}>
                            Difficulty:{' '}
                            <span className={styles.bold}>
                                {review.difficulty}
                            </span>
                        </p>
                        <p className={styles.infoWide}>
                            Usefulness:{' '}
                            <span className={styles.bold}>
                                {review.usefulness}
                            </span>
                        </p>
						<p className={styles.infoNarrow}>
                            Delivery:{' '}
                            <span className={styles.bold}>
                                {review.delivery}
                            </span>
                        </p> 
                        <p className={styles.info}>
                            Grade:{' '}
                            <span className={styles.bold}>
                                {convertToLetterGrade(review.grade)}
                            </span>
                        </p>
                    </div>
                    <div className={styles.commentWrapper}>
                        <p className={styles.comment}>
                            Comment on the course:{' '}
                        </p>
                        <p className={styles.commentText}>{review.comment}</p>
                        {review.commentProf ? (
                            <p className={styles.comment}>
                                Comment on the instructor:{' '}
                            </p>
                        ) : null}
                        <p className={styles.commentText}>
                            {review.commentProf}
                        </p>
                        {review.advice ? (
                            <p className={styles.comment}>Advice: </p>
                        ) : null}
                        <p className={styles.commentText}>{review.advice}</p>
                    </div>

                    {/* {deleteButton()} */}
                </div>
            </div>
        </div>
    );
}
