import {useNavigate} from 'react-router-dom';
import { useDashboardNavigation } from './navigation';

export function Map () {
    const navigate = useNavigate();
    const { goTo } = useDashboardNavigation();


    return (
        <>
           <div className = "page-header">
                <div className='left'>
                    <h1 onClick={() => goTo()}>Bandit Board</h1>
                </div>
                <div className='right'>
                    <h3 onClick={() => goTo("/Wanted")}>wanted</h3>
                    <h3 onClick={() => goTo("/Caught")}>caught</h3>
                    <h3 onClick={() => goTo("/Map")}>map</h3>
                </div>
                <p onClick={() => navigate(`/`)}>Logout</p>
           </div>
            <h1>Map Page</h1>
            <p>Here you can view the map of the area and track the locations of bandits and law enforcement.</p>
        </>
    )
}