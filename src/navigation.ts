import {useLocation, useNavigate} from 'react-router-dom';

export function useDashboardNavigation() {
    const navigate = useNavigate();
    const location = useLocation();

    // Get first path segment
    const basePath = `/${location.pathname.split("/")[1]}`;

    const goTo = (subPath: string = "") => {
        navigate(`${basePath}${subPath}`);
    };

    return { goTo };
}