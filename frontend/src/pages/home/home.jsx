// import useWindowWidth from '../../utils/useWindowWidth';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import UseRecentReviews from '../../services/UseRecentReviews.jsx';
// icon imports
import styles from './home.module.css';
// import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import UseReviewNum from '../../services/UseReviewNum.jsx';
import ReviewCard from '../../components/ReviewCard/ReviewCardSmall.jsx';
import ReviewCardSmall from '../../components/ReviewCard/ReviewCardSmall.jsx';

export default function Home() {
    // const width = useWindowWidth();
    const { reviews, error } = UseRecentReviews();
    const { reviewNum } = UseReviewNum();

	const mockReviews = [
		{
			"_id": "65e7bd599cc37656114e4e07",
			"userId": "65a42b1462da245e4f9dd458",
			"course": {
			  "id": "65a42b047282b420e6840acb",
			  "name": "COSI 10A ",
			  "title": " Introduction to Problem Solving in Python  ",
			  "_id": "65e7bd659cc37656114e4e1d"
			},
			"semester": "SPRING 2024",
			"professor": "test test",
			"difficulty": 1,
			"rate": 1,
			"usefulness": 1,
			"attendance": true,
			"grade": 9,
			"delivery": "In Person",
			"comment": "test",
			"likes": 0,
			"createdAt": "2024-03-06T00:48:25.737Z",
			"updatedAt": "2024-07-06T02:12:33.448Z",
			"__v": 0
		  },
		  {
			"_id": "65e7bd599cc37656114e4e07",
			"userId": "65a42b1462da245e4f9dd458",
			"course": {
			  "id": "65a42b047282b420e6840acb",
			  "name": "COSI 10A ",
			  "title": " Introduction to Problem Solving in Python  ",
			  "_id": "65e7bd659cc37656114e4e1d"
			},
			"semester": "SPRING 2024",
			"professor": "test test",
			"difficulty": 1,
			"rate": 2,
			"usefulness": 1,
			"attendance": true,
			"grade": 9,
			"delivery": "In Person",
			"comment": "test",
			"likes": 0,
			"createdAt": "2024-03-06T00:48:25.737Z",
			"updatedAt": "2024-07-06T02:12:33.448Z",
			"__v": 0
		  },
		  {
			"_id": "65e7bd599cc37656114e4e07",
			"userId": "65a42b1462da245e4f9dd458",
			"course": {
			  "id": "65a42b047282b420e6840acb",
			  "name": "COSI 10A ",
			  "title": " Introduction to Problem Solving in Python  ",
			  "_id": "65e7bd659cc37656114e4e1d"
			},
			"semester": "SPRING 2024",
			"professor": "test test",
			"difficulty": 1,
			"rate": 3,
			"usefulness": 1,
			"attendance": true,
			"grade": 9,
			"delivery": "In Person",
			"comment": "test",
			"likes": 0,
			"createdAt": "2024-03-06T00:48:25.737Z",
			"updatedAt": "2024-07-06T02:12:33.448Z",
			"__v": 0
		  },
		  {
			"_id": "65e7bd599cc37656114e4e07",
			"userId": "65a42b1462da245e4f9dd458",
			"course": {
			  "id": "65a42b047282b420e6840acb",
			  "name": "COSI 10A ",
			  "title": " Introduction to Problem Solving in Python  ",
			  "_id": "65e7bd659cc37656114e4e1d"
			},
			"semester": "SPRING 2024",
			"professor": "test test",
			"difficulty": 1,
			"rate": 4,
			"usefulness": 1,
			"attendance": true,
			"grade": 9,
			"delivery": "In Person",
			"comment": "test",
			"likes": 0,
			"createdAt": "2024-03-06T00:48:25.737Z",
			"updatedAt": "2024-07-06T02:12:33.448Z",
			"__v": 0
		  },
		  {
			"_id": "65e7bd599cc37656114e4e07",
			"userId": "65a42b1462da245e4f9dd458",
			"course": {
			  "id": "65a42b047282b420e6840acb",
			  "name": "COSI 10A ",
			  "title": " Introduction to Problem Solving in Python  ",
			  "_id": "65e7bd659cc37656114e4e1d"
			},
			"semester": "SPRING 2024",
			"professor": "test test",
			"difficulty": 1,
			"rate": 5,
			"usefulness": 1,
			"attendance": true,
			"grade": 9,
			"delivery": "In Person",
			"comment": "test",
			"likes": 0,
			"createdAt": "2024-03-06T00:48:25.737Z",
			"updatedAt": "2024-07-06T02:12:33.448Z",
			"__v": 0
		  },
		];
		
		
    return (
        <div className={styles.homeContainer}>
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
                    <div className={styles.slogan}>Information Hub </div>
                    <div className={styles.sloganBottom}>
                        for Brandeis Student Course Reviews
                    </div>
                </div>
            </div>
            <div className={styles.recentTitle}>Recent Reviews</div>
			{/* <div className={styles.recentReviews}>
				{mockReviews.map((review) => (
					<ReviewCard review={review} key={review._id}/>
				))}
			</div> */}

			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>	
				{mockReviews.map((review) => (
					<Grid xs={6} key={review._id}>
						<ReviewCardSmall review={review}  />
					</Grid>
				))}
			</Grid>

            <div className={styles.temp} />
        </div>
    );
}
