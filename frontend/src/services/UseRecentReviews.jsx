import { useState, useEffect } from 'react';

const process = import.meta.env;

export default function UseRecentReviews() {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${process.VITE_BASE_URL}api/evaluations/recent`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (!res.error) {
                    console.log(`retrieved recent reviews`);
                    setReviews(res);
                }
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            });
    }, []);

    return { reviews, error };
}
