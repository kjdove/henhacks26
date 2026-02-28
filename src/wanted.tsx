import './wanted.css';
import Bandits from './Bandits';
import {type Bandit} from "./App";
import { BanditCard } from "./BanditCard";
import { useDashboardNavigation } from './navigation';
import { useNavigate} from 'react-router-dom';



export function Wanted() {
    const { goTo } = useDashboardNavigation();
    const navigate = useNavigate();


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
            <div className='wanted-content'>
                <h2>Wanted Bandits</h2>
                <div className='bandit-list'>
                    {Bandits.filter((bandit: Bandit) => bandit.Status === "Wanted").map((bandit: Bandit) => (
                        <BanditCard key={bandit.Name} bandit={bandit} />
                    ))}
                </div>
                        
            </div>
        </>
    )
}