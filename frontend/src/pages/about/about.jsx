import styles from './about.module.css';


export default function About() {
	return (
		<div className={styles.about}>
			<h1 className={styles.title}>ABOUT</h1>
			<p className={styles.story}>
				DeisEval is a web application that allows students to review courses
				they have taken at Brandeis University. The goal of DeisEval is to
				provide students with a platform to share their experiences with
				courses and professors, and to help students make informed decisions
				when choosing courses. No more surprises!
			</p>
		</div>
	);
}