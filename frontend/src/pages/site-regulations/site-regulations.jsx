import styles from './site-regulations.module.css';

export default function SiteRegulations() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Site Regulations</h1>
                <h2>Acceptance of our Terms</h2>
                <p>
                    By using this website, you agree to abide by these
                    regulations
                </p>

                <h2>User Access</h2>

             
                <p>
				Access to the course evaluation website is restricted to current students, faculty, and authorized administrative staff of the college.
Users are required to log in using their college-issued credentials.
                </p>
                <h2>User Conduct</h2>
                <p>
                    You are expected to communicate on this platform with
                    respect, honesty, and constructiveness. Your feedback should
                    be focused on the content and delivery of the course,
                    avoiding any personal comments or offensive language.
                </p>

                <h2>Content Guidelines</h2>

                <p>
                    Your evaluations should be relevant and specific to the
                    courses under review. Profanity, derogatory comments, or
                    discriminatory language are not permitted and will lead to
                    the removal of content.
                </p>

                <h2>Privacy</h2>

                <p>
                    While submissions are designed to be anonymous, you should
                    refrain from including any personal information in your
                    evaluations to protect your identity. We strive to protect
                    your anonymity, but complete anonymity cannot be guaranteed
                    if personal details are disclosed in your evaluations.
                </p>
                <h2>Data Integrity</h2>
                <p>
                    The integrity of your evaluations is paramount. You are
                    urged to provide authentic feedback based on your personal
                    experiences. The data you provide may be utilized for
                    analytical and reporting purposes to enhance course quality
                    and insights.
                </p>
                <h2>Moderation</h2>
                <p>
                    Your submitted evaluations will be moderated to ensure they
                    adhere to these regulations. We reserve the right to edit,
                    remove, or restrict access based on non-compliance with
                    these guidelines.
                </p>
                <h2>Changes to Regulations</h2>
                <p>
                    Regulations may be updated periodically. You are advised to
                    review them regularly to stay informed of any changes.
                </p>
                <h2>Your Feedback</h2>
                <p>
                    Your questions, concerns, or suggestions regarding the site
                    or regulations are important to us. If you disagree with any
                    action taken under these regulations. Please contact us:
                </p>
                <ul>
                    <li>
                        By visiting this page on our website:{' '}
                        <a
                            href='https://www.deiseval.com/contact'
                            rel='external nofollow noopener noreferrer'
                            target='_blank'
                        >
                            https://www.deiseval.com/contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
