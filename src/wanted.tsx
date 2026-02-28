import {useNavigate} from 'react-router-dom';

export function Wanted() {
    const navigate = useNavigate();

    return (
        <>
           <div className = "page-header">
                <div className='left'>
                <h1 onClick={() => navigate(`/SheriffDashboard`)}>Bandit Board</h1>
                </div>
                <div className='right'>
                    <h3 onClick={() => {}}>wanted</h3>
                    <h3>caught</h3>
                    <h3>map</h3>
                </div>
           </div>
            <h1>Wanted Page</h1>
            <p>Here you can view the list of wanted bandits and their details.</p>
        </>
    )
}