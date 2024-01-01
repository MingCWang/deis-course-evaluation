import { useState } from 'react';
import styles from './contact.module.css';
import UseSendEmail from '../../services/UseSendEmail.jsx';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
	const [sent, setSent] = useState(false);
	const [error, setError] = useState(false);

    function onSubmit(e) {
        // const message = {
        // 	from: 'deiseval26@gmail.com', // sender address
        // 	to: "deiseval26@gmail.com", // list of receivers
        // 	subject: "Deis Eval", // Subject line
        // 	text: "Hello world?", // plain text body
        // 	html: "<b>Hello world?</b>", // html body
        //   }

        const mes = {
            from: email, // sender address
            to: 'deiseval26@gmail.com', // list of receivers
            subject, // Subject line
            text: message, // plain text body
            html: message, // html body
        };
        e.preventDefault();
        UseSendEmail(mes, setSent, setError);
    }

    return (
        <div>
            <h1>Contact</h1>
			{sent && <p>Message sent!</p>}
			{error && <p>Message not sent!</p>}	
            <form onSubmit={onSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='subject'>Subject</label>
                <input
                    type='text'
                    id='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <label htmlFor='message'>Message</label>
                <textarea
                    id='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type='submit'>Send</button>
            </form>
        </div>
    );
}
