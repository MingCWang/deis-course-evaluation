import { useEffect, useState } from 'react';
import styles from './contact.module.css';
import UseSendEmail from '../../services/UseSendEmail.jsx';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    function onSubmit(e) {
        // const message = {
        // 	from: 'deiseval26@gmail.com', // sender address
        // 	to: "deiseval26@gmail.com", // list of receivers
        // 	subject: "Deis Eval", // Subject line
        // 	text: "Hello world?", // plain text body
        // 	html: "<b>Hello world?</b>", // html body
        //   }

        const mes = {
            from: 'DeisEval: deiseval26@gmail.com', // sender address
            replyTo: email,
            to: 'deiseval26@gmail.com', // list of receivers
            subject, // Subject line
            text: message, // plain text body
            html: `<p>${message}</p>`, // html body
        };
        e.preventDefault();
        UseSendEmail(mes, setSent, setError, setLoading);
    }

    useEffect(() => {
        if (sent) {
            setEmail('');
            setSubject('');
            setMessage('');
        }
    }, [sent]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.contact}>
                <div className={styles.descContainer}>
                    <p className={styles.title}>
                        <i>CONTACT</i>
                    </p>
                    <p className={styles.desc}>
                        Want to add a course?
                        <br />
                        have suggestions for us?
                        <br />
                        Fill out the form!
                        <br />
                        <br />
                        <span className={styles.email}>
                            Or email us directly at: <i>deiseval26@gmail.com</i>
                        </span>
                    </p>
                    {error && <p>Something went wrong :(, try again later.</p>}
                    {sent && (
                        <p className={styles.thankyou}>
                            Thank you for your input :) We will get back to you
                            as soon as possible.
                        </p>
                    )}
                </div>

                <form onSubmit={onSubmit} className={styles.form}>
                    <label htmlFor='email' className={styles.label}>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        placeholder='optional, to get back to you'
                    />
                    <label htmlFor='subject' className={styles.label}>
                        Subject
                    </label>
                    <input
                        type='text'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className={styles.input}
                    />
                    <label htmlFor='message' className={styles.label}>
                        Message
                    </label>
                    <textarea
                        id='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={styles.inputMessage}
                        rows={10}
                        placeholder='If you are requesting a course, please include the course name and number. Ex: COSI 21A, Data Structures and Algorithms'
                    />
                    <div className={styles.buttonWrapper}>
                        <div className={styles.buttonborders}>
                            <button
                                type='submit'
                                className={styles.primarybutton}
                            >
                                {' '}
                                SEND
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {loading && (
                <div className={styles.loader}>
                    <div className={styles.jimuprimaryloading} />
                </div>
            )}
        </div>
    );
}
