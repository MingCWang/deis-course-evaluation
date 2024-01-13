import { useState, useEffect , useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';

const process = import.meta.env;

export default function UseLikeReview({ reviewId, setClicked, clicked}) {
    const [error, setError] = useState(false);
    const [likes, setLikes] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
	const { authState } = useContext(UserContext);
	const [validated, setValidated] = authState;

	let id;

	// query the databse for the upvote status of the review card
	useEffect(() => {
		try{
			id = JSON.parse(localStorage.getItem('userInfo')).id;
		}catch{
			id = null;
		}

		if(!validated) id = null; // if the local storage is not cleared before this part renders, the user will still see the likes being marked

	
		fetch(`${process.VITE_BASE_URL}api/evaluations/likes`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ evalId: reviewId, isLike: null, userId: id }),
		})
			.then((res) => res.json())
			.then((res) => {
				if (!res.error) {
					// console.log(res);
					setLikes(res.likes);
					setIsChecked(res.isLiked);
				}
			})
			.catch((err) => {
				console.log(err);
				setError(true);
			});
	}, [validated]);

	// update the database with the new upvote status of the review card
    useEffect(() => {
		try{
			id = JSON.parse(localStorage.getItem('userInfo')).id;
		}catch{
			id = null;
		}
	
		if(clicked){
			fetch(`${process.VITE_BASE_URL}api/evaluations/likes`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ evalId: reviewId, isLike: isChecked, userId: id}),
			})
				.then((res) => res.json())
				.then((res) => {
					if (!res.error) {
						console.log(res);
						setLikes(res.likes);
						setIsChecked(res.isLiked);
						setClicked(false)
					}
				})
				.catch((err) => {
					console.log(err);
					setError(true);
				});
		}
    }, [clicked]);



    return { likes, error, isChecked };
}
