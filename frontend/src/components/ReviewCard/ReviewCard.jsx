/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './ReviewCard.module.css';
import styles1 from './MyReviewCard.module.css';
import convertToLetterGrade from '../../utils/convertToLetterGrade';
import RatingBox from '../CourseReviewCard/RatingBox.jsx';
import UseLikeReview from '../../services/UseLikeReview.jsx';

export default function ReviewCard({ review}) {
    const [isChecked, setIsChecked] = useState(null);
    const { likes, error } = UseLikeReview({ isChecked, reviewId: review._id });
    const formattedDate = format(new Date(review.createdAt), 'MMMM do, yyyy');
    let location = useLocation();
    location = location.pathname;

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
	let courseName = styles.courseFont;

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



    if (location === '/my-reviews') {
        card = styles1.card;
    } else if (location === '/') {
        card = styles.cardHome;
		courseName = styles.courseFontHome;
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={`${card} ${color}`}>
            <RatingBox ratingAverage={review.rate} />
            <div className={styles.body}>
                <div className={styles.contents}>
                    <div className={styles.top}>
                        <p className={styles.course}>
							{location === '/' ? (
								  <Link
								  to={`/course/${review.course.id}`}
								  className={`${courseName} ${styles.bold}`}
							  >
								  {review.course.name}
							  </Link>
							): (
								<span className={`${courseName} ${styles.bold}`}>	
									{review.course.name}
								</span>
							)}
                          
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
                <label className={styles.container}>
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <div className={styles.checkmark}>
                        <svg fill='none' viewBox='0 0 24 24'>
                            <path
                                strokeLinejoin='round'
                                strokeLinecap='round'
                                strokeWidth='1.3'
                                stroke='#FFFFFF'
                                d='M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20'
                            />
                        </svg>
                    </div>
                    <div className={styles.likes}>{likes}</div>
                </label>
            </div>
        </div>
    );
}
