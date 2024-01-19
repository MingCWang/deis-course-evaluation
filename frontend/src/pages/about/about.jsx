import { PiLinkedinLogoThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import styles from './about.module.css';

export default function About() {
    return (
        <div className={styles.about}>
            <h1 className={styles.title}>ABOUT</h1>
            <p className={styles.story}>
                DeisEval is a student-run web application that allows students
                to review courses they have taken at Brandeis University <b><em>anonymously</em></b>. The
                goal of DeisEval is to <b>provide students with a platform to share their experiences with courses 
				and professors and help others make informed decisions when choosing courses.</b>
				<br />
                <br /> Not sure if the class is right for you or if the
                professor is a good fit? DeisEval got you. <br />
                <br /> More features coming, stay tuned!
            </p>
			<Link to='https://www.linkedin.com/in/mingshih-wang/'>
				<PiLinkedinLogoThin className={styles.linkedin}/>
			</Link>
        </div>
    );
}
