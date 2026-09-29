import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../config/routes';
import { setToken } from '../../lib/auth';

// Store the JWT, go home, and reload so the Navbar picks up the new login state
export default function useCompleteLogin() {
    const navigate = useNavigate();
    return (token) => {
        if (token) setToken(token);
        navigate(PATHS.HOME);
        window.location.reload();
    };
}
