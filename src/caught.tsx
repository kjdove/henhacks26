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
                    {/* <h1 onClick={()=>goTo()}>Bandit Board</h1> */}
                    <img onClick={() => goTo()} src="./bblogo.png" alt="BanditBoradLogo" height="150px" width="250px"/>

                </div>
                <div className='right'>
                    <h2 onClick={()=>goTo("/Wanted")}>WANTED</h2>
                    <h2 onClick={()=>goTo("/Caught")}>CAUGHT</h2>
                    <h2 onClick={()=>goTo("/Map")}>MAP</h2>
                </div>
                <p onClick={() => navigate(`/`)}>LOGOUT</p>
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