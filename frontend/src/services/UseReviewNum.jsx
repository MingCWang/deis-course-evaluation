import { useState, useEffect } from 'react';

const process = import.meta.env;

export default function UseReviewNum() {
    const [error, setError] = useState(false);
    const [totalReviews, setTotalReviews] = useState(0);

    useEffect(() => {
        fetch(`${process.VITE_BASE_URL}api/evaluations/totalReviews`)
            .then((res) => res.json())
            .then((res) => {
                if (!res.error) {
                    setTotalReviews(res.total);
                }
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            });
    }, []);

    return { totalReviews, error };
}
