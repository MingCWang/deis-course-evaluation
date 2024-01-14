/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
// import UseValidateJWT from '../services/UseValidateJWT.jsx';
const process = import.meta.env;

export const UserContext = createContext(null);
/**
 * This sets thhe global state for user info
 * TO DO: split up api calls and context into separate files
 * @param {*} param0
 * @returns UserContext.Provider component
 */
export default function UserProvider({ children }) {
    // const {validated, setValidated}= UseValidateJWT();
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            // To Do: add a try catch block here
            fetch(`${process.BASE_URL}auth/validate`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
                .then((response) => {
                    if (response.ok) {
                        setValidated(true);
                    } else {
                        localStorage.removeItem('userInfo');
                        localStorage.removeItem('authenticated');
                        localStorage.removeItem('jwt');
                        localStorage.removeItem('likedCourses');
                        setValidated(false);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setValidated(false);
                });
        } else setValidated(false);
    }, [validated, localStorage.getItem('jwt')]);

    // return { validated, setValidated };

    return (
        <UserContext.Provider
            value={{
                authState: [validated, setValidated],
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
