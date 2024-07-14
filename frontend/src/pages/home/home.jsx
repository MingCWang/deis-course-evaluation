// import useWindowWidth from '../../utils/useWindowWidth';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import UseRecentReviews from '../../services/UseRecentReviews.jsx';
// icon imports
import styles from './home.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import SearchButton from './SearchButton';
import UseReviewNum from '../../services/UseReviewNum.jsx';
import ReviewCardSmall from '../../components/ReviewCard/ReviewCardSmall.jsx';
import theme from '../../utils/ColorTheme.jsx';
import { ThemeProvider } from '@mui/material/styles';

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
			"comment": `lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			`,
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
			"professor": "Timothy Hickey",
			"difficulty": 1,
			"rate": 5,
			"usefulness": 1,
			"attendance": true,
			"grade": 9,
			"delivery": "In Person",
			"comment": "test",
			"commentProf": "test",
			"advice": "test",
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
			"rate": 1,
			"usefulness": 1,
			"attendance": true,
			"grade": 9,
			"delivery": "In Person",
			"comment": `lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			`,
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
			"professor": "Timothy Hickey",
			"difficulty": 1,
			"rate": 5,
			"usefulness": 1,
			"attendance": true,
			"grade": 9,
			"delivery": "In Person",
			"comment": "test",
			"commentProf": "test",
			"advice": "test",
			"likes": 0,
			"createdAt": "2024-03-06T00:48:25.737Z",
			"updatedAt": "2024-07-06T02:12:33.448Z",
			"__v": 0
		  },
		];
		

	const gridContainer = {
		paddingLeft: "40px",
		paddingRight: "40px"
	}
		
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
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={gridContainer}>	
					{mockReviews.map((review) => (
					<Grid item xs={4} sm={4} md={4} key={review._id}>
						<ScrollAnimation animateIn="bounceIn" duration={1} animateOnce>
							<ReviewCardSmall review={review}  />
						</ScrollAnimation>
					</Grid>
					))}
				</Grid>
			</Box>
			{/* <Box sx={{ display:"flex", justifyContent:"center", pt: 3}}>
				<ThemeProvider theme={theme}>			
					<Button 
						variant="outlined"
						color='button'
					>
						Load more
					</Button>
				</ThemeProvider>
			</Box> */}

            <div className={styles.temp} />
        </div>
    );
}
