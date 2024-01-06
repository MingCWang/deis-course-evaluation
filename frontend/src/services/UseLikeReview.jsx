import { useState, useEffect } from 'react';

const process = import.meta.env;

export default function UseLikeReview({ isChecked, reviewId }) {
    const [error, setError] = useState(false);
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        fetch(`${process.VITE_BASE_URL}api/evaluations/likes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ evalId: reviewId, isLike: isChecked }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (!res.error) {
                    setLikes(res.likes);
                }
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            });
    }, [isChecked]);

    return { likes, error };
}
