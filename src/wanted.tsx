import {useNavigate} from 'react-router-dom';
import './wanted.css';

export function Wanted() {
    const navigate = useNavigate();

    return (
        <>
           <div className = "page-header">
                <div className='left'>
                <h1 onClick={() => navigate(`/SheriffDashboard`)}>Bandit Board</h1>
                </div>
                <div className='right'>
                    <h3 onClick={() => navigate(`/SheriffDashboard/Wanted`)}>wanted</h3>
                    <h3 onClick={() => navigate(`/SheriffDashboard/Caught`)}>caught</h3>
                    <h3 onClick={() => navigate(`/SheriffDashboard/Map`)}>map</h3>
                </div>
                <p onClick={() => navigate(`/`)}>Logout</p>
           </div>
            <div className='wanted-content'>
                <h2>Wanted Bandits</h2>
            </div>
        </>
    )
}