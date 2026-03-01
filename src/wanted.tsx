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