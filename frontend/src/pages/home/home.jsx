// import useWindowWidth from '../../utils/useWindowWidth';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ScrollAnimation from 'react-animate-on-scroll';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from '../../utils/ColorTheme.jsx';
import UseRecentReviews from '../../services/UseRecentReviews.jsx';
// icon imports
import styles from './home.module.css';
import SearchButton from './SearchButton';
import ReviewButton from './ReviewButton';
import UseReviewNum from '../../services/UseReviewNum.jsx';
import ReviewCardSmall from '../../components/ReviewCard/ReviewCardSmall.jsx';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Home() {
    // const width = useWindowWidth();
    const { reviews, error } = UseRecentReviews();
    const { reviewNum } = UseReviewNum();
    const mockReviews = [
        {
            _id: '65e7bd599cc37656114e4e07',
            userId: '65a42b1462da245e4f9dd458',
            course: {
                id: '65a42b047282b420e6840acb',
                name: 'COSI 10A ',
                title: ' Introduction to Problem Solving in Python  ',
                _id: '65e7bd659cc37656114e4e1d',
            },
            semester: 'SPRING 2024',
            professor: 'test test',
            difficulty: 1,
            rate: 1,
            usefulness: 1,
            attendance: true,
            grade: 9,
            delivery: 'In Person',
            comment: `lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			`,
            likes: 0,
            createdAt: '2024-03-06T00:48:25.737Z',
            updatedAt: '2024-07-06T02:12:33.448Z',
            __v: 0,
        },
        {
            _id: '65e7bd599cc37656114e4e07',
            userId: '65a42b1462da245e4f9dd458',
            course: {
                id: '65a42b047282b420e6840acb',
                name: 'COSI 10A ',
                title: ' Introduction to Problem Solving in Python  ',
                _id: '65e7bd659cc37656114e4e1d',
            },
            semester: 'SPRING 2024',
            professor: 'test test',
            difficulty: 1,
            rate: 2,
            usefulness: 1,
            attendance: true,
            grade: 9,
            delivery: 'In Person',
            comment: 'test',
            likes: 0,
            createdAt: '2024-03-06T00:48:25.737Z',
            updatedAt: '2024-07-06T02:12:33.448Z',
            __v: 0,
        },
        {
            _id: '65e7bd599cc37656114e4e07',
            userId: '65a42b1462da245e4f9dd458',
            course: {
                id: '65a42b047282b420e6840acb',
                name: 'COSI 10A ',
                title: ' Introduction to Problem Solving in Python  ',
                _id: '65e7bd659cc37656114e4e1d',
            },
            semester: 'SPRING 2024',
            professor: 'test test',
            difficulty: 1,
            rate: 3,
            usefulness: 1,
            attendance: true,
            grade: 9,
            delivery: 'In Person',
            comment: 'test',
            likes: 0,
            createdAt: '2024-03-06T00:48:25.737Z',
            updatedAt: '2024-07-06T02:12:33.448Z',
            __v: 0,
        },
        {
            _id: '65e7bd599cc37656114e4e07',
            userId: '65a42b1462da245e4f9dd458',
            course: {
                id: '65a42b047282b420e6840acb',
                name: 'COSI 10A ',
                title: ' Introduction to Problem Solving in Python  ',
                _id: '65e7bd659cc37656114e4e1d',
            },
            semester: 'SPRING 2024',
            professor: 'test test',
            difficulty: 1,
            rate: 4,
            usefulness: 1,
            attendance: true,
            grade: 9,
            delivery: 'In Person',
            comment: 'test',
            likes: 0,
            createdAt: '2024-03-06T00:48:25.737Z',
            updatedAt: '2024-07-06T02:12:33.448Z',
            __v: 0,
        },
        {
            _id: '65e7bd599cc37656114e4e07',
            userId: '65a42b1462da245e4f9dd458',
            course: {
                id: '65a42b047282b420e6840acb',
                name: 'COSI 10A ',
                title: ' Introduction to Problem Solving in Python  ',
                _id: '65e7bd659cc37656114e4e1d',
            },
            semester: 'SPRING 2024',
            professor: 'Timothy Hickey',
            difficulty: 1,
            rate: 5,
            usefulness: 1,
            attendance: true,
            grade: 9,
            delivery: 'In Person',
            comment: 'test',
            commentProf: 'test',
            advice: 'test',
            likes: 0,
            createdAt: '2024-03-06T00:48:25.737Z',
            updatedAt: '2024-07-06T02:12:33.448Z',
            __v: 0,
        },
        {
            _id: '65e7bd599cc37656114e4e07',
            userId: '65a42b1462da245e4f9dd458',
            course: {
                id: '65a42b047282b420e6840acb',
                name: 'COSI 10A ',
                title: ' Introduction to Problem Solving in Python  ',
                _id: '65e7bd659cc37656114e4e1d',
            },
            semester: 'SPRING 2024',
            professor: 'test test',
            difficulty: 1,
            rate: 1,
            usefulness: 1,
            attendance: true,
            grade: 9,
            delivery: 'In Person',
            comment: `lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
			`,
            likes: 0,
            createdAt: '2024-03-06T00:48:25.737Z',
            updatedAt: '2024-07-06T02:12:33.448Z',
            __v: 0,
        },
        {
            _id: '65e7bd599cc37656114e4e07',
            userId: '65a42b1462da245e4f9dd458',
            course: {
                id: '65a42b047282b420e6840acb',
                name: 'COSI 10A ',
                title: ' Introduction to Problem Solving in Python  ',
                _id: '65e7bd659cc37656114e4e1d',
            },
            semester: 'SPRING 2024',
            professor: 'test test',
            difficulty: 1,
            rate: 2,
            usefulness: 1,
            attendance: true,
            grade: 9,
            delivery: 'In Person',
            comment: 'test',
            likes: 0,
            createdAt: '2024-03-06T00:48:25.737Z',
            updatedAt: '2024-07-06T02:12:33.448Z',
            __v: 0,
        },
        {
            _id: '65e7bd599cc37656114e4e07',
            userId: '65a42b1462da245e4f9dd458',
            course: {
                id: '65a42b047282b420e6840acb',
                name: 'COSI 10A ',
                title: ' Introduction to Problem Solving in Python  ',
                _id: '65e7bd659cc37656114e4e1d',
            },
            semester: 'SPRING 2024',
            professor: 'test test',
            difficulty: 1,
            rate: 3,
            usefulness: 1,
            attendance: true,
            grade: 9,
            delivery: 'In Person',
            comment: 'test',
            likes: 0,
            createdAt: '2024-03-06T00:48:25.737Z',
            updatedAt: '2024-07-06T02:12:33.448Z',
            __v: 0,
        },
        {
            _id: '65e7bd599cc37656114e4e07',
            userId: '65a42b1462da245e4f9dd458',
            course: {
                id: '65a42b047282b420e6840acb',
                name: 'COSI 10A ',
                title: ' Introduction to Problem Solving in Python  ',
                _id: '65e7bd659cc37656114e4e1d',
            },
            semester: 'SPRING 2024',
            professor: 'test test',
            difficulty: 1,
            rate: 4,
            usefulness: 1,
            attendance: true,
            grade: 9,
            delivery: 'In Person',
            comment: 'test',
            likes: 0,
            createdAt: '2024-03-06T00:48:25.737Z',
            updatedAt: '2024-07-06T02:12:33.448Z',
            __v: 0,
        },
        {
            _id: '65e7bd599cc37656114e4e07',
            userId: '65a42b1462da245e4f9dd458',
            course: {
                id: '65a42b047282b420e6840acb',
                name: 'COSI 10A ',
                title: ' Introduction to Problem Solving in Python  ',
                _id: '65e7bd659cc37656114e4e1d',
            },
            semester: 'SPRING 2024',
            professor: 'Timothy Hickey',
            difficulty: 1,
            rate: 5,
            usefulness: 1,
            attendance: true,
            grade: 9,
            delivery: 'In Person',
            comment: 'test',
            commentProf: 'test',
            advice: 'test',
            likes: 0,
            createdAt: '2024-03-06T00:48:25.737Z',
            updatedAt: '2024-07-06T02:12:33.448Z',
            __v: 0,
        },
    ];
    const popularReviews = [
        {
            _id: '65e7bd599cc37656114e4e07',
            userId: '65a42b1462da245e4f9dd458',
            course: {
                id: '65a42b047282b420e6840acb',
                name: 'COSI 10A ',
                title: ' Introduction to Problem Solving in Python  ',
                _id: '65e7bd659cc37656114e4e1d',
            },
            semester: 'SPRING 2024',
            professor: 'Timothy Hickey',
            difficulty: 1,
            rate: 5,
            usefulness: 1,
            attendance: true,
            grade: 9,
            delivery: 'In Person',
            comment: 'popular',
            commentProf: 'test',
            advice: 'test',
            likes: 5,
            createdAt: '2024-03-06T00:48:25.737Z',
            updatedAt: '2024-07-06T02:12:33.448Z',
            __v: 0,
        },
    ];
    const [displayReviews, setDisplayReviews] = useState(mockReviews);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
            setDisplayReviews(mockReviews);
        } else {
            setDisplayReviews(popularReviews);
        }
    };

    const gridContainer = {
        padding: '20px',
        justifyContent: 'center',
    };

    return (
        <div className={styles.homeContainer}>
            <div className={styles.descContainer}>
                <div className={styles.desc}>
                    <h1>deiseval</h1>
                    <p>course evaluation site for Brandeis University</p>
                    <div className={styles.searchButton}>
                        <SearchButton /> <ReviewButton />
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
            <ThemeProvider theme={customTheme}>
                <Box sx={{ width: '90%', margin: '50px auto' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label='review type toggle'
                        >
                            <Tab
                                label='Most Recent'
                                sx={{
                                    color:
                                        value === 0
                                            ? 'primary.main'
                                            : 'secondary.main', // Active vs inactive color
                                    '&.Mui-selected': {
                                        color: 'primary.main', // Active tab color
                                    },
                                }}
                            />
                            <Tab
                                label='Most Popular'
                                sx={{
                                    color:
                                        value === 1
                                            ? 'primary.main'
                                            : 'secondary.main', // Active vs inactive color
                                    '&.Mui-selected': {
                                        color: 'primary.main', // Active tab color
                                    },
                                }}
                            />
                        </Tabs>
                    </Box>
                </Box>
            </ThemeProvider>
            {/* <div className={styles.recentTitle}>Recent Reviews</div> */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 3, sm: 3, md: 3 }}
                    columns={{ xs: 1, sm: 1, md: 1 }}
                    sx={gridContainer}
                >
                    {displayReviews.map((review) => (
                        <Grid
                            item
                            xs={1}
                            sm={1}
                            md={1}
                            key={review._id}
                            sx={{}}
                        >
                            <ScrollAnimation
                                animateIn='bounceIn'
                                duration={1}
                                animateOnce
                            >
                                <ReviewCardSmall review={review} />
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
