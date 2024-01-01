import styles from './Form.module.css';
import DropdownSelection from './DropdownSelection.jsx';
import RatingButtons from './RatingButtons.jsx';
import AttendanceButtons from './AttendanceButtons.jsx';
import DeliveryButtons from './DeliveryButtons.jsx';
import LetterGradeDropdown from './LetterGradeDropdown.jsx';
import CommentSection from './CommentSection.jsx';

const letterGrades = [
    { label: 'A+', value: 13 },
    { label: 'A', value: 12 },
    { label: 'A-', value: 11 },
    { label: 'B+', value: 10 },
    { label: 'B', value: 9 },
    { label: 'B-', value: 8 },
    { label: 'C+', value: 7 },
    { label: 'C', value: 6 },
    { label: 'C-', value: 5 },
    { label: 'D+', value: 4 },
    { label: 'D', value: 3 },
    { label: 'D-', value: 2 },
    { label: 'F', value: 1 },
    { label: 'Prefer not to say', value: 0 },
];

export default function Form({
    handleSemesterChange,
    handleFirstName,
    handleLastName,
    handleGradeChange,
    handleCommentChange,
    handleCommentProfChange,
    handleAdviceChange,
    handleSubmit,
    difficulty,
    setDifficulty,
    rate,
    setRate,
    usefulness,
    setUsefulness,
    attendance,
    setAttendance,
    delivery,
    setDelivery,
    comment,
    commentProf,
    advice,
    error,
    term,
    first,
    last,
}) {
    return (
        <form className={styles.form}>
            <div className={styles.dropdownWrapper}>
                <div className={styles.termWrapper}>
                    <p className={styles.prof}>Term:</p>
                    <DropdownSelection
                        options={term}
                        label='Select Term'
                        handleChange={handleSemesterChange}
                    />
                </div>

                {/* <DropdownSelection
                            options={professorsArray}
                            label='Select Professor'
                            handleChange={handleProfessorChange}
                        /> */}
                {/* <TextBox
							comment={professor}
							handleCommentChange={handleProfessorChange}
							row={1}
							placeholder='Professor'
					
						/> */}
                <div className={styles.profWrapper}>
                    <p className={styles.prof}>Instructor:</p>
                    <input
                        className={styles.professorInput}
                        value={first}
                        onChange={(e) => handleFirstName(e.target.value)}
                        placeholder='First Name'
                    />
                    <input
                        className={styles.professorInput}
                        value={last}
                        onChange={(e) => handleLastName(e.target.value)}
                        placeholder='Last Name'
                    />
                </div>
            </div>
            <div className={styles.ratingWrapper}>
                <h2 className={styles.ratingDesc}>Difficulty of this course</h2>
                <RatingButtons state={difficulty} setState={setDifficulty} />
            </div>
            <div className={styles.ratingWrapper}>
                <h2 className={styles.ratingDesc}>Usefulness of this course</h2>
                <RatingButtons state={usefulness} setState={setUsefulness} />
            </div>
            <div className={styles.ratingWrapper}>
                <h2 className={styles.ratingDesc}>
                    Overall quality of the course
                </h2>
                <RatingButtons state={rate} setState={setRate} />
            </div>
            <div className={styles.ratingWrapper}>
                <h2 className={styles.ratingDesc}>Attendance is requried</h2>
                <AttendanceButtons
                    state={attendance}
                    setState={setAttendance}
                />
            </div>

            <div className={styles.ratingWrapper}>
                <h2 className={styles.ratingDesc}>Delivery mode</h2>
                <DeliveryButtons state={delivery} setState={setDelivery} />
            </div>
            <div className={styles.ratingWrapper}>
                <h2 className={styles.ratingDesc}>Your grade (optional)</h2>
                <LetterGradeDropdown
                    options={letterGrades}
                    label='grade'
                    handleGradeChange={handleGradeChange}
                />
            </div>
            <div className={styles.dividerContainer}>
                <div className={styles.divider} />
            </div>

            <CommentSection
                comment={comment}
                commentProf={commentProf}
                advice={advice}
                handleCommentChange={handleCommentChange}
                handleCommentProfChange={handleCommentProfChange}
                handleAdviceChange={handleAdviceChange}
            />

            {error && (
                <div className={styles.error}>Please answer all questions*</div>
            )}
            <div className={styles.submit}>
                <button
                    className={styles.submitButton}
                    type='submit'
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
