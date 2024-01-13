/**
 * Transferred to UserContext.jsx
 */

// import { useEffect, useState } from 'react';

// const process = import.meta.env;

// export default function validateJWT() {
// 	const [validated, setValidated] = useState(false);


//     useEffect(() => {
//         const jwt = localStorage.getItem('jwt');
//         if (jwt) {
//             // To Do: add a try catch block here
//             fetch(`${process.BASE_URL}auth/validate`, {
//                 method: 'GET',
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             }).then((response) => {
//                 if (response.ok) {
//                     setValidated(true);
//                 }else{
// 					localStorage.removeItem('userInfo');
// 					localStorage.removeItem('authenticated');
// 					localStorage.removeItem('jwt');
// 					localStorage.removeItem('likedCourses');
// 					setValidated(false);
// 				}
//             }).catch((error) => {
// 				console.log(error);
// 				setValidated(false);
// 			});
//         }else setValidated(false)
//     }, [validated, localStorage.getItem('jwt')]);

// 	return { validated, setValidated };
// }
