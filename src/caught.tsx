import './caught.css';
import {useNavigate} from 'react-router-dom';
import Bandits from './Bandits';
import {type Bandit} from "./App";
import { BanditCard } from "./BanditCard";
import { useDashboardNavigation } from './navigation';


export function Caught() {
    const navigate = useNavigate();
    const { goTo } = useDashboardNavigation();

    return (
        <>
           <div className = "page-header">
                <div className='left'>
                    <h1 onClick={()=>goTo()}>Bandit Board</h1>
                </div>
                <div className='right'>
                    <h3 onClick={()=>goTo("/Wanted")}>wanted</h3>
                    <h3 onClick={()=>goTo("/Caught")}>caught</h3>
                    <h3 onClick={()=>goTo("/Map")}>map</h3>
                </div>
                <p onClick={() => navigate(`/`)}>Logout</p>
           </div>
            <div className='caught-content'>
                <h2>Caught Bandits</h2>
                <div className='bandit-list'>
                    {Bandits.filter((bandit: Bandit) => bandit.Status === "Caught").map((bandit: Bandit) => (
                        <BanditCard key={bandit.Name} bandit={bandit} />
                    ))}
                </div>
            </div>
            
        </>
    )
}