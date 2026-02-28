import './sheriffDashboard.css';
import {useNavigate} from 'react-router-dom';

export function SheriffDashboard() {
    const navigate = useNavigate();

    return (
        <div className='sd-container'>
           <div className = "page-header">
                <div className='left'>
                    <h1 onClick={() => navigate(`/SheriffDashboard`)}>Bandit Board</h1>
                </div>
                <div className='right'>
                    <h3 onClick={() => navigate(`/SheriffDashboard/Wanted`)}>wanted</h3>
                    <h3 onClick={() => navigate(`/SheriffDashboard/Caught`)}>caught</h3>
                    <h3 onClick={() => navigate(`/SheriffDashboard/Map`)}>map</h3>
                </div>
                <p className= 'logout' onClick={() => navigate(`/`)}>Logout</p>
           </div>
           <div className='sd-content'>
                <h1>Welcome!</h1>
                <p>Here you can manage your wanted and caught bandits, as well as view the map of the area.</p>
           </div>
        </div>
    )
}