

export default function SendEmail(email, setSent, setError) {



	const process = import.meta.env;
	
	
	
	fetch(`${process.VITE_BASE_URL}api/sendemail`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email }),
	})
		.then((res) => res.json())
		.then((res) => {
			if (!res.error) {
				setSent(true);
			} else {
				setError(true);
			}
		})
		.catch((err) => {
			console.log(err);
		});


}