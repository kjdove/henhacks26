import {useNavigate} from 'react-router-dom';
import { useDashboardNavigation } from './navigation';

export function Map () {
    const navigate = useNavigate();
    const { goTo } = useDashboardNavigation();


    return (
        <>
           <div className = "page-header">
                <div className='left'>
                    {/* <h1 onClick={() => goTo()}>Bandit Board</h1> */}
                    <img onClick={() => goTo()} src="./bblogo.png" alt="BanditBoradLogo" height="150px" width="250px"/>

                </div>
                <div className='right'>
                    <h2 onClick={() => goTo("/Wanted")}>WANTED</h2>
                    <h2 onClick={() => goTo("/Caught")}>CAUGHT</h2>
                    <h2 onClick={() => goTo("/Map")}>MAP</h2>
                </div>
                <p onClick={() => navigate(`/`)}>LOGOUT</p>
           </div>
            <h1>Map Page</h1>
            <p>Here you can view the map of the area and track the locations of bandits and law enforcement.</p>
        </>
    )
}