/* eslint-disable react/prop-types */
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { UserContext } from '../../contexts/UserContext.jsx';
import format from '../../utils/formatSentence.js';
import styles from './review.module.css';
import fetchCourse from '../../services/fetchCourse.js';
import Loading from '../loading/loading.jsx';
import Form from './components/Form.jsx';
/**
 * TO DO: write api request to submit form data to backend
 * @returns {JSX.Element} Review page
 */
export default function Review({ edit }) {
    const { id: courseId } = useParams();
    const [submit, setSubmit] = useState(false);
    const [difficulty, setDifficulty] = useState(1);
    const [rate, setRate] = useState(1);
    const [usefulness, setUsefulness] = useState(1);
    const [attendance, setAttendance] = useState(true);
    const [delivery, setDelivery] = useState('In Person');
    const [grade, setGrade] = useState(0);
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [semester, setSemester] = useState('');
    const [comment, setComment] = useState('');
    const [commentProf, setCommentProf] = useState('');
    const [advice, setAdvice] = useState('');
    const [error, setError] = useState(false);
    const [courseInfo, setCourseInfo] = useState({});
    const [loadingCourse, setLoadingCourse] = useState(true);
	const [reviewId, setReviewId] = useState(null);
    const navigate = useNavigate();
	const process = import.meta.env;

    useEffect(() => {
        // if review is in edit mode, pass in the original review info
        if (edit) {
            const {
                difficulty: fetchedDiff,
                rate: fetchedRate,
                usefulness: fetchedUseful,
                attendance: fetchedAttend,
                delivery: fetchedDelivery,
                grade: fetchedGrade,
                professor: fetchedProf,
                semester: fetchedSemester,
                comment: fetchedComment,
                commentProf: fetchedCommentProf,
                advice: fetchedAdvice,
                course: fetchedCourse,
				_id
            } = JSON.parse(localStorage.getItem('reviewInfo'));
            const firstName = fetchedProf.split(' ')[0];
            const lastName = fetchedProf.split(' ')[1];

			setReviewId(_id)
            setDifficulty(fetchedDiff);
            setRate(fetchedRate);
            setUsefulness(fetchedUseful);
            setAttendance(fetchedAttend);
            setDelivery(fetchedDelivery);
            setGrade(fetchedGrade);
            setFirst(firstName);
            setLast(lastName);
            setSemester(fetchedSemester);
			setComment(fetchedComment)
			setCommentProf(fetchedCommentProf || '')
			setAdvice(fetchedAdvice || '')
			setCourseInfo({
				course: fetchedCourse.name,
				courseTitle: fetchedCourse.title,
				id: fetchedCourse.id,
			});
            setLoadingCourse(false);
        } else {
            // fetch course info if not in edit mode
            fetchCourse(setCourseInfo, setLoadingCourse, courseId);
        }
    }, []);

    if (loadingCourse) {
        return <Loading />;
    }

    const { course, courseTitle } = courseInfo;
    const { courseFormatted, courseTitleFormatted } = format(
        `${course} ${courseTitle}`,
    );

    const term = [
        { label: 'SPRING 2024', value: 'SPRING 2024' },
        { label: 'FALL 2023', value: 'FALL 2023' },
        { label: 'SUMMER 2023', value: 'SUMMER 2023' },
        { label: 'SPRING 2023', value: 'SPRING 2023' },
        { label: 'FALL 2022', value: 'FALL 2022' },
        { label: 'SUMMER 2022', value: 'SUMMER 2022' },
        { label: 'SPRING 2022', value: 'SPRING 2022' },
        { label: 'FALL 2021', value: 'FALL 2021' },
        { label: 'SUMMER 2021', value: 'SUMMER 2021' },
        { label: 'SPRING 2021', value: 'SPRING 2021' },
        { label: 'FALL 2020', value: 'FALL 2020' },
        { label: 'SUMMER 2020', value: 'SUMMER 2020' },
        { label: 'SPRING 2020', value: 'SPRING 2020' },
        { label: 'FALL 2019', value: 'FALL 2019' },
        { label: 'SUMMER 2019', value: 'SUMMER 2019' },
        { label: 'SPRING 2019', value: 'SPRING 2019' },
    ];



	const handleDelete = (event) => {
        const { id } = JSON.parse(localStorage.getItem('userInfo'));
		event.preventDefault();
		const jwt = localStorage.getItem('jwt');
		if (!jwt) return;
        fetch(`${process.VITE_BASE_URL}api/evaluations/forms/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${jwt}`,
            },
			body: JSON.stringify({
				courseId: courseInfo.id,
				userId: id,
			}),
        })
		.then((response) => response.json())
		.then((data) => {
			if (!data.error) {
				
				setSubmit(true);
			} else {
				setError(true);
				console.log(data.error);
			}
		})
            .catch((err) => {
                console.log(err);
            });
    };

	const handleConfirm = (event) => {
		event.preventDefault();
        const confirmation = window.confirm(
            'Are you sure you want to delete this review?',
        );
        if (confirmation) {
            handleDelete(event);
        }
    };


    function handleSubmit(event, isUpdate) {
		let method = 'POST';
		let url = `${process.VITE_BASE_URL}api/evaluations/forms`;
		if (isUpdate) {
			method = 'PUT';
			url = `${process.VITE_BASE_URL}api/evaluations/forms/${reviewId}`;
		}
        event.preventDefault();
        console.log('submitting form');
        const commentString = comment.comment;
        const commentProfString = commentProf.commentProf;
        const adviceString = advice.advice;


        const courseIdName = {
            id: edit ? courseInfo.id : courseId,
            name: courseFormatted,
			title: courseTitleFormatted,
        };

        let professor;
        if (first === '' || last === '') {
            professor = null;
        } else {
            professor = `${first} ${last}`;
        }

        let userId;
        try {
            userId = JSON.parse(localStorage.getItem('userInfo')).id;
        } catch {
            userId = null;
        }

		const jwt = localStorage.getItem('jwt');
		if (!jwt) return;
		
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                userId,
                courseIdName,
                difficulty,
                rate,
                usefulness,
                attendance,
                delivery,
                grade,
                professor,
                semester,
                commentString,
                commentProfString,
                adviceString,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (!data.error) {
                    setSubmit(true);
                } else {
                    setError(true);
                    console.log(data.error);
                }
            });
    }

    function handleFirstName(value) {
        setFirst(value);
        console.log(value);
    }
    function handleLastName(value) {
        setLast(value);
        console.log(value);
    }
    function handleSemesterChange(event, value) {
        Object.keys(term).forEach((key) => {
            if (term[key].value === value) {
                setSemester(value);
            }
        });
    }
    function handleCommentChange(event) {
        setComment({ ...comment, comment: event.target.value });
    }
    function handleCommentProfChange(event) {
        setCommentProf({ ...commentProf, commentProf: event.target.value });
    }
    function handleAdviceChange(event) {
        setAdvice({ ...advice, advice: event.target.value });
    }
    function handleGradeChange(event, value) {
        setGrade(value.value);
    }

    if (submit) {
        return (
            <div className={styles.submittedTextContainer}>
                <h1 className={styles.submittedText}>
                    {edit ? 'Edit success ^^' : 'Thank you for your submission!'}
                </h1>
                <div className={styles.backContainer}>
                    <button
                        type='button'
                        onClick={() => navigate(-1)}
                        className={styles.back}
                    >
                        Back
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.review}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                    <span className={styles.titleSpan}>Rate: </span>
                    {courseFormatted} {courseTitleFormatted}
                </h1>
            </div>
            <div className={styles.reviewContainer}>
                <Form
                    handleSemesterChange={handleSemesterChange}
                    handleAdviceChange={handleAdviceChange}
                    handleFirstName={handleFirstName}
                    handleLastName={handleLastName}
                    handleCommentChange={handleCommentChange}
                    handleCommentProfChange={handleCommentProfChange}
                    handleSubmit={handleSubmit}
                    handleGradeChange={handleGradeChange}
					handleConfirm={handleConfirm}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    rate={rate}
                    setRate={setRate}
                    usefulness={usefulness}
                    setUsefulness={setUsefulness}
                    attendance={attendance}
                    setAttendance={setAttendance}
                    delivery={delivery}
                    setDelivery={setDelivery}
                    comment={comment}
                    commentProf={commentProf}
                    advice={advice}
                    error={error}
                    term={term}
                    first={first}
                    last={last}
					semester={semester}
					grade={grade}
                    edit={edit}
                />
            </div>
        </div>
    );
}
