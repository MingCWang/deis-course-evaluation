const process = import.meta.env;

export default async function fetchUserReviews(id, setReviews) {
    fetch(`${process.VITE_BASE_URL}api/evaluations/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: id,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (!data.error) {
                setReviews(data);
            }
        })
        .catch((err) => console.log(err));
}
