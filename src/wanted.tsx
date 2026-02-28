import {useNavigate} from 'react-router-dom';
import './wanted.css';
import Bandits from './Bandits';
import {type Bandit} from "./App";

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
                <div className='bandit-list'>
                    {Bandits.map((bandit: Bandit, index: number) => (
                        <div key={index} className='bandit-card'>
                            <img src={bandit.Photo} alt={bandit.Name} className='bandit-photo'/>
                            <h3>{bandit.Name}</h3>
                            <p><strong>Location:</strong> {bandit.Location}</p>
                            <p><strong>Threat Level:</strong> {bandit.threatLevel}</p>
                            <p><strong>Description:</strong> {bandit.Description}</p>
                        </div>
                    ))}
                </div>
                        
            </div>
        </>
    )
}