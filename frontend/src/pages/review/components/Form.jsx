import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import styles from './Form.module.css';
import DropdownSelection from './TermDropDown.jsx';
import RatingButtons from './buttons/RatingButtons.jsx';
import AttendanceButtons from './buttons/AttendanceButtons.jsx';
import DeliveryButtons from './buttons/DeliveryButtons.jsx';
import LetterGradeDropdown from './LetterGradeDropdown.jsx';
import CommentSection from './CommentSection.jsx';
import customTheme from '../../../utils/ColorTheme.jsx';

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
    handleConfirm,
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
    // first,
    // last,
    semester,
    grade,
    edit,
}) {
    return (
        <form className={styles.form}>
            <div className={styles.dropdownWrapper}>
                <div className={styles.termWrapper}>
                    <h2 className={styles.term}>Term:</h2>
                    <DropdownSelection
                        value={semester}
                        options={term}
                        label='Select Term'
                        handleChange={handleSemesterChange}
                    />
                </div>
                <div className={styles.profWrapper}>
                    <h2 className={styles.prof}>Professor:</h2>
                    <ThemeProvider theme={customTheme}>
                        <Box
                            component='form'
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                '& .MuiTextField-root': {
                                    marginLeft: '20px',
                                    width: 280,
                                },
                            }}
                            noValidate
                            autoComplete='off'
                        >
                            <TextField
                                id='outlined-required'
                                label='First Name'
                                onChange={(e) =>
                                    handleFirstName(e.target.value)
                                }
                            />
                            <TextField
                                id='outlined-required'
                                label='Last Name'
                                onChange={(e) => handleLastName(e.target.value)}
                            />
                        </Box>
                    </ThemeProvider>

                    {/* <input
                        className={styles.professorInput}
                        value={first}
                        onChange={(e) => handleFirstName(e.target.value)}
                        placeholder='First Name'
                    /> */}
                    {/* <input
                        className={styles.professorInput}
                        value={last}
                        onChange={(e) => handleLastName(e.target.value)}
                        placeholder='Last Name'
                    /> */}
                </div>
            </div>
            <div className={styles.ratingWrapper}>
                <h2 className={styles.ratingDesc}>Rate the quality</h2>
                <RatingButtons state={rate} setState={setRate} />
            </div>
            <div className={styles.ratingWrapper}>
                <h2 className={styles.ratingDesc}>Rate the difficulty</h2>
                <RatingButtons state={difficulty} setState={setDifficulty} />
            </div>
            <div className={styles.ratingWrapper}>
                <h2 className={styles.ratingDesc}>Rate the usefulness</h2>
                <RatingButtons state={usefulness} setState={setUsefulness} />
            </div>

            <div className={styles.ratingWrapper}>
                <h2 className={styles.ratingDesc}>Attendance is required</h2>
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
                <h2 className={styles.ratingDesc}>Your grade</h2>
                <LetterGradeDropdown
                    value={grade}
                    options={letterGrades}
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
            {!edit && (
                <div className={styles.submit}>
                    <button
                        className={styles.submitButton}
                        type='submit'
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            )}
            {edit && (
                <div className={styles.editoptions}>
                    <div className={styles.submit}>
                        <button
                            className={styles.submitButton}
                            type='submit'
                            onClick={(e) => handleSubmit(e, true)}
                        >
                            Update
                        </button>
                    </div>
                    or
                    <div className={styles.submit}>
                        <button
                            className={styles.deleteButton}
                            type='submit'
                            onClick={handleConfirm}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
}
