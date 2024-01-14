import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import styles from './manage-account.module.css';
import { UserContext } from '../../context/UserContext.jsx';


const process = import.meta.env;


export default function ManageAccount() {
	const navigate = useNavigate();
    const { authState } = useContext(UserContext);
	const [validated, setValidated] = authState;


	const handleDelete = () => {
		const {id} = JSON.parse(localStorage.getItem('userInfo'));
		fetch(`${process.VITE_BASE_URL}auth/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((res) => {
			if (res.ok) {
				localStorage.removeItem('jwt');
				localStorage.removeItem('userInfo');
				localStorage.removeItem('authenticated');
				setValidated(false);
				navigate('/');
			} else {
				throw new Error('Something went wrong');
			}
		})
		.catch((err) => {
			console.log(err);
		});
	}	

	const handleConfirm = () => {
		const confirmation = window.confirm('Are you sure you want to delete your account?');
		if (confirmation) {
			handleDelete();
		}
	}

	return (
		<>
			   <h1 className={styles.title}>ACCOUNT SETTINGS</h1>
			   <div className={styles.dividerContainer}>
                <div className={styles.divider} />
            </div>
			<div className={styles.container}>
		
				<div className={styles.content}>
					<div className={styles.category}>Delete Account </div>
						<div className={styles.buttonContainer}>
							<button
								to='/'
								type='button'
								className={styles.delete}
								onClick={handleConfirm}
							>
								<span className={styles.text}>Delete</span>
							</button>
						</div>
						
				</div>
			
			</div>
		</>
	)
	}