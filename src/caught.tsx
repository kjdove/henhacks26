import './caught.css';
import {useNavigate} from 'react-router-dom';

export function Caught() {
    const navigate = useNavigate();
    const navigateDashboard = () => {
        if (window.location.pathname.includes("SheriffDashboard")) {
            navigate("/SheriffDashboard");
        } else {
            navigate("/PublicDashboard");
        }
    }
    const navigateWanted = () => {
        if (window.location.pathname.includes("SheriffDashboard")) {
            navigate("/SheriffDashboard/Wanted");
        } else {
            navigate("/PublicDashboard/Wanted");
        }
    }
    const navigateCaught = () => {
        if (window.location.pathname.includes("SheriffDashboard")) {
            navigate("/SheriffDashboard/Caught");
        } else {
            navigate("/PublicDashboard/Caught");
        }
    }
    const navigateMap = () => {
        if (window.location.pathname.includes("SheriffDashboard")) {
            navigate("/SheriffDashboard/Map");
        } else {
            navigate("/PublicDashboard/Map");
        }
    }

    return (
        <>
           <div className = "page-header">
                <div className='left'>
                    <h1 onClick={navigateDashboard}>Bandit Board</h1>
                </div>
                <div className='right'>
                    <h3 onClick={navigateWanted}>wanted</h3>
                    <h3 onClick={navigateCaught}>caught</h3>
                    <h3 onClick={navigateMap}>map</h3>
                </div>
                <p onClick={() => navigate(`/`)}>Logout</p>
           </div>
            <div className='caught-content'>
                <h2>Caught Bandits</h2>
            </div>
            
        </>
    )
}