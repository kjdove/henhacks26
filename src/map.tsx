import {useNavigate} from 'react-router-dom';

export function Map () {
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
            <h1>Map Page</h1>
            <p>Here you can view the map of the area and track the locations of bandits and law enforcement.</p>
        </>
    )
}