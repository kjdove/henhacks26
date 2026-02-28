import { useDashboardNavigation } from './navigation';
import './sheriffDashboard.css';
import { useNavigate} from 'react-router-dom';
// import type { Bandit } from './App';

// interface BanditProps {
//     bandit:Bandit[]
//     setList:React.Dispatch<React.SetStateAction<Bandit[]>>;
// }


export function SheriffDashboard():React.JSX.Element{
    const navigate = useNavigate();
    
    const { goTo } = useDashboardNavigation();
    return (
        <div className='sd-container'>
           <div className = "page-header">
                <div className='left'>
                    <h1 onClick={() => goTo()}>Bandit Board</h1>
                </div>
                <div className='right'>
                    <h3 onClick={() => goTo("/Wanted")}>wanted</h3>
                    <h3 onClick={() => goTo("/Caught")}>caught</h3>
                    <h3 onClick={() => goTo("/Map")}>map</h3>
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