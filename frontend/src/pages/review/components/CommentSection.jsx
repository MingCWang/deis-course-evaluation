import styles from './CommentSection.module.css';
import TextBox from './TextBox.jsx';

export default function CommentSection({
    comment,
    commentProf,
    advice,
    handleCommentChange,
    handleCommentProfChange,
    handleAdviceChange,
}) {

    return (
        <>
            <div className={styles.commentWrapper}>
                <h2 className={styles.ratingDesc}>Your Comment:</h2>
                <div className={styles.textBoxContainer}>
                    <TextBox
                        comment={comment}
                        handleCommentChange={handleCommentChange}
                    />
                </div>
            </div>
            <div className={styles.commentWrapper}>
                <h2 className={styles.ratingDesc}>
                    Comment on Prof:{' '}
                    <span className={styles.optional}>
                        <i>optional</i>
                    </span>
                </h2>
                <div className={styles.textBoxContainer}>
                    <TextBox
                        comment={commentProf}
                        handleCommentChange={handleCommentProfChange}
                    />
                </div>
            </div>
            <div className={styles.commentWrapper}>
                <h2 className={styles.ratingDesc}>
                    Advice:{' '}
                    <span className={styles.optional}>
                        <i>optional</i>
                    </span>
                </h2>
                <div className={styles.textBoxContainer}>
                    <TextBox
                        comment={advice}
                        handleCommentChange={handleAdviceChange}
                    />
                </div>
            </div>
        </>
    );
}
