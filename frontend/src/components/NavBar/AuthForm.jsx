/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import { useState, useContext } from "react";
import { UserContext } from "../../contexts/userContext.jsx";
import styles from './AuthForm.module.css'



export default function AuthForm({ loggingIn, handleClosePopup }) {

	const [formEmail, setFormEmail] = useState("");
	const [formPassword, setFormPassword] = useState("");
	const { nameState, idState, authState, emailState } = useContext(UserContext);
	const [name, setName] = nameState;
	const [id, setId] = idState;
	const [authenticated, setAuthenticated] = authState;
	const [email, setEmail] = emailState


	// const [error, setError] = useState(false);

	// form handlers
	function handleFormSubmit(event) {
		event.preventDefault();
		let URL = "http://localhost:3000/auth/"

		console.log({ formEmail, formPassword });
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email: formEmail, password: formPassword })
		}

		loggingIn ? URL += "login" : URL += "register";


		// use userContext to store usename and id and email 
		fetch(URL, options)
			.then(res => res.json())
			.then(data => {
				const { username, id, email, token } = data.userJSON;
				// set context variable here for global access 
				if (username) setName(username);
				if (token) {
					setId(id);
					setEmail(email)
					setAuthenticated(true);
					const userInfo = {
						username: username,
						id: id,
						email: email
					}
					// then store in localStorage to persist data accross page refresh
					localStorage.setItem('userInfo', userInfo)
					localStorage.setItem('jwt', token);
					handleClosePopup();
				} else {
					console.log("error", data);
					// setError(true); 		// TODO: display error message and proper error handling 
				}
			})
			.catch(error => {
				console.log({ error });
			})
	}

	function handleEmailChange(e) {
		setFormEmail(e.target.value);
	}

	function handlePasswordChange(e) {
		setFormPassword(e.target.value);
	}

	return (
		<>
			<form className={styles.form} onSubmit={handleFormSubmit}>
				<div className={styles.inputContainer}>
					<label>Email</label>
					<input type="text" className={styles.loginInput} placeholder="Email" value={formEmail} onChange={handleEmailChange} />
				</div>
				<div className={styles.inputContainer}>
					<label>Password</label>
					<input type="password" className={styles.loginInput} placeholder="Password" value={formPassword} onChange={handlePasswordChange} />
				</div>
				<button type="submit" className={styles.loginButton}>Continue</button>
			</form>
		</>
	)
}