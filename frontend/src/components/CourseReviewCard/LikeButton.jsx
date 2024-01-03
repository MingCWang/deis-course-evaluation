import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from 'react';
import styles from './LikeButton.module.css';
// import { UserContext } from '../../contexts/UserContext.jsx';

export default function LikeButton({ courseId, isCourse, reload, isSmall}) {
    const [clicked, setClicked] = useState(false);
    const [added, setAdded] = useState(false);

    // const { loggingInState, authState } = useContext(UserContext);
    // const [loggingIn, setLoggingIn] = loggingInState;
    // const [authenticated, setAuthenticated] = authState;

    // **************************check if course is in liked courses when page is loaded, require auth version ***********************************************
    // useEffect(() => {
    //     const likedCourses =
    //         JSON.parse(localStorage.getItem('likedCourses')) || [];

    //     if (authenticated) {
    //         if (likedCourses.includes(courseId)) {
    //             setClicked(true);
    //             setAdded(true);
    //         }
    //     } else {
    //         setClicked(false);
    //         setAdded(false);
    //     }
    // }, [authenticated, localStorage.getItem('likedCourses')]);
    // *********************************************************************************************************************************************************

    useEffect(() => {
        const likedCourses =
            JSON.parse(localStorage.getItem('likedCourses')) || [];

        if (likedCourses.includes(courseId)) {
            setClicked(true);
            setAdded(true);
        }
    }, [localStorage.getItem('likedCourses')]);

    // fetch liked courses from local storage and update when liked/unliked
    useEffect(() => {
        const likedCourses =
            JSON.parse(localStorage.getItem('likedCourses')) || [];
        if (clicked && !added) {
            setAdded(true);
            likedCourses.push(courseId);
            localStorage.setItem('likedCourses', JSON.stringify(likedCourses));
        } else if (!clicked && added) {
            setAdded(false);
            const deletedCourses = likedCourses.filter(
                (likedCourse) => likedCourse !== courseId,
            );
            localStorage.setItem(
                'likedCourses',
                JSON.stringify(deletedCourses),
            );
        }
    }, [clicked]);

    // ********************************************This function is for when liking a course requries authentication*****************************************
    // function handleLikedCourse() {
    //     if (!authenticated) {
    //         setLoggingIn(true);
    //     } else {
    //         setClicked(!clicked);
    //         if (reload) reload();
    //     }
    // }
    // *********************************************************************************************************************************************************

    function handleLikedCourse() {
        setClicked(!clicked);
        if (reload) reload();
    }

    /**
     * These are for custom rating hearts from MUI
     * */
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#3A7BD5',
        },
        '& .MuiRating-iconHover': {
            color: '#3A7BD5',
        },
    });

    let buttonStyle;
	let addText;
	let favicon;
    if (isCourse) {
        buttonStyle = styles.listButtonCourse;
		addText = styles.addTextCourse;
		favicon = styles.faviconCourse;
    } else {
        buttonStyle = styles.listButton;
		addText = styles.addText;
		favicon = styles.favicon;
    }

	if (isSmall) {
		if (isCourse) {
			buttonStyle = styles.listButtonCourseSmall;
		}else{
			buttonStyle = styles.listButtonSmall;

		}
	}


	
    return (
        <button
            type='button'
            className={buttonStyle}
            onClick={handleLikedCourse}
        >
            <StyledRating
                name='rating-heart'
                max={1}
                icon={<FavoriteIcon fontSize='inherit'  className={favicon} />}
                emptyIcon={<FavoriteBorderIcon fontSize='40' className={favicon} />}
                className={styles.ratingHeart}
                value={clicked ? 1 : 0}
                readOnly
            />
            <p className={addText}>Add to list</p>
        </button>
    );
}
