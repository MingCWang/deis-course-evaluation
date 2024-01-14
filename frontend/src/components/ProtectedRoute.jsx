import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext.jsx';

export default function ProtectedRoute({ children }) {
    const { authState } = useContext(UserContext);
    const [validated, setValidated] = authState;
    const navigate = useNavigate();

    useEffect(() => {
        if (!validated) {
            navigate('/login', { replace: true });
        }
    }, [validated]);

    return children;
}
