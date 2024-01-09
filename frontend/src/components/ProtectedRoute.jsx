import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import UseValidateJWT from '../services/UseValidateJWT.jsx';

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const validated = UseValidateJWT();

    useEffect(() => {
        if (!validated) {
            navigate('/login');
        }
    }, [validated]);

    return children;
}
