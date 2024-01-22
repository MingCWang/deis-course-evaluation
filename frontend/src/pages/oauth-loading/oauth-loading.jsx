/* eslint-disable no-unused-vars */
import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import setJWT from '../../services/auth.js';
// import { UserContext } from '../../contexts/UserContext.jsx';
import styles from './oauth-loading.module.css';

export default function OauthLoading() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setJWT().then((success) => {
            if (success === false) {
                setError(true);
            }
            setTimeout(() => {
                navigate('/');
            }, 1000);
        });
    }, [loading]);

    if (error) {
        return (
            <div style={{ width: '100%', height: '100vh' }}>
                <p style={{ marginTop: '100px', textAlign: 'center' }}>
                    Oops login request unsuccessful :( check console for more
                    info
                </p>
            </div>
        );
    }

    return (
        <div className={styles.loader}>
            <div className={styles.jimuprimaryloading} />
        </div>
    );
}
