import styles from './about.module.css';

export default function About() {
    return (
        <div className={styles.about}>
            <h1 className={styles.title}>ABOUT</h1>
            <p className={styles.story}>
                DeisEval is a student-run web application that allows students
                to review courses they have taken at Brandeis University. The
                goal of DeisEval is to provide students with a platform to share
                their experiences with courses and professors, and to help
                others make informed decisions when choosing courses. <br />
                <br /> Not sure if the class is right for you or if the
                professor is a red flag? DeisEval got you. <br />
                <br /> More features coming, stay tuned.
            </p>
        </div>
    );
}
