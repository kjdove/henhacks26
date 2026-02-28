
import React from 'react';
import {useNavigate} from 'react-router-dom';
import './publicDashboard.css';

export function PublicDashboard(): React.JSX.Element {
    const navigate = useNavigate();

    return (
        <div className='sd-container'>
        <div className = "page-header">
             <div className='left'>
                 <h1 onClick={() => navigate(`/PublicDashboard`)}>Bandit Board</h1>
             </div>
             <div className='right'>
                 <h3 onClick={() => navigate(`/PublicDashboard/Wanted`)}>wanted</h3>
                 <h3 onClick={() => navigate(`/PublicDashboard/Caught`)}>caught</h3>
                 <h3 onClick={() => navigate(`/PublicDashboard/Map`)}>map</h3>
             </div>
             <p className= 'logout' onClick={() => navigate(`/`)}>Logout</p>
        </div>
        <div className='pd-content'>
             <h1>Welcome Public!</h1>
             <p>Here you can view wanted and caught bandits in your area, as well as view a map of where they were last seen.</p>
             <div className='bandits'>
                <figure className="marquee">
                    <img className='marquee_item' src="src/assets/bart_bandit.png" width="200" height="200" alt="BartBandit"/>
                    <img className='marquee_item' src="src/assets/kat_bandit.JPEG" width="200" height="200" alt="KatBandit"/>
                    <img className='marquee_item' src="src/assets/liao_bandit.JPEG" width="200" height="200" alt="LiaoBandit"/>
                    <img className='marquee_item' src="src/assets/mattsap_bandit.JPEG" width="200" height="200" alt="MattBandit"/>
                    <img className='marquee_item' src= "src/assets/nazim_bandit.JPEG" width="200" height="200" alt= "NazimBandit"/>
                    <img className='marquee_item' src="src/assets/roosen_bandit.JPEG" width="200" height="200" alt="RoosenBandit"/>
                    <img className='marquee_item' src="src/assets/silber_bandit.JPEG" width="200" height="200" alt="SilberBandit"/>
                    <img className='marquee_item' src="src/assets/yarrington_bandit.JPEG" width="200" height="200" alt="YarringtonBandit"/>
                </figure>  
             </div>
        </div>
     </div>
    )
}