/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext.jsx';
import format from '../../utils/formatSentence.js';
import styles from './review.module.css';
import fetchCourse from '../../services/fetchCourse.js';
import Loading from '../loading/loading.jsx';
import Form from './components/Form.jsx';
/**
 * TO DO: write api request to submit form data to backend
 * @returns {JSX.Element} Review page
 */
export default function Review() {
    const { id: courseId } = useParams();
    const { idState } = useContext(UserContext);
    const [id, setId] = idState;
    const [submit, setSubmit] = useState(false);
    const [difficulty, setDifficulty] = useState(1);
    const [rate, setRate] = useState(1);
    const [usefulness, setUsefulness] = useState(1);
    const [attendance, setAttendance] = useState(true);
    const [delivery, setDelivery] = useState('In Person');
    const [grade, setGrade] = useState(0);
    // const [professor, setProfessor] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [semester, setSemester] = useState('');
    const [comment, setComment] = useState('');
    const [commentProf, setCommentProf] = useState('');
    const [advice, setAdvice] = useState('');
    const [error, setError] = useState(false);
    const [courseInfo, setCourseInfo] = useState({});
    const [loadingCourse, setLoadingCourse] = useState(true);

    useEffect(() => {
        fetchCourse(setCourseInfo, setLoadingCourse, courseId);
    }, []);

    if (loadingCourse) {
        return <Loading />;
    }

    const { course, courseTitle, professors } = courseInfo;
    const { courseFormatted, courseTitleFormatted } = format(
        `${course} ${courseTitle}`,
    );
    // const professorsArray = [];

    // Object.keys(professors).forEach((key) => {
    //     professorsArray[key] = {
    //         label: professors[key].name,
    //         value: professors[key].name,
    //     };
    // });
    // TO DO: should i use these default values or fetch them dynamically from the backend?

    const term = [
        { label: 'SPRING 2024', value: 'SPRING 2024' },
        { label: 'FALL 2023', value: 'FALL 2023' },
        { label: 'SPRING 2023', value: 'SPRING 2023' },
        { label: 'FALL 2022', value: 'FALL 2022' },
        { label: 'SPRING 2022', value: 'SPRING 2022' },
        { label: 'FALL 2021', value: 'FALL 2021' },
        { label: 'SPRING 2021', value: 'SPRING 2021' },
        { label: 'FALL 2020', value: 'FALL 2020' },
        { label: 'SPRING 2020', value: 'SPRING 2020' },
        { label: 'FALL 2019', value: 'FALL 2019' },
        { label: 'SPRING 2019', value: 'SPRING 2019' },
    ];

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submitting form');
        const process = import.meta.env;
        const commentString = comment.comment;
        const commentProfString = commentProf.commentProf;
        const adviceString = advice.advice;
        const courseIdName = {
            id: courseId,
            name: courseFormatted,
        };

        const professor = `${first} ${last}`;

        fetch(`${process.VITE_BASE_URL}api/evaluations/forms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: id || 'anonymous',
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
                    Thank you for your submission!
                </h1>
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
                />
            </div>
        </div>
    );
}
