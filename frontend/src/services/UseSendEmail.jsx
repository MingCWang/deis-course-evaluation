export default function SendEmail(email, setSent, setError, setLoading) {
    const process = import.meta.env;
    setLoading(true);
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
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
}
