import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import styles from './RateCourseButton.module.css';
import { UserContext } from '../../context/UserContext.jsx';


export default function RateCourseButton({ course, isCourse }) {
    const navigate = useNavigate();
	const { authState } = useContext(UserContext);
	const [validated, setValidated] = authState;


    function handleRateCourse() {

		if (!validated) {
			navigate('/login');
		}else{
			navigate(`/review/${course._id}`);
		}


    }

    let rateButtonStyle;
    if (isCourse) {
        rateButtonStyle = styles.rateButtonCourse;
    } else {
        rateButtonStyle = styles.rateButton;
    }

    return (
        <button
            type='button'
            className={rateButtonStyle}
            onClick={handleRateCourse}
        >
            Rate this course
        </button>
    );
}
