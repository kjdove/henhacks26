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
                    {/* <h1 onClick={() => goTo()}>Bandit Board</h1> */}
                    <img onClick={() => goTo()} src="./bblogo.png" alt="BanditBoradLogo" height="150px" width="250px"/>
                </div>
                <div className='right'>
                    <h2 onClick={() => goTo("/Wanted")}>WANTED</h2>
                    <h2 onClick={() => goTo("/Caught")}>CAUGHT</h2>
                    <h2 onClick={() => goTo("/Map")}>MAP</h2>
                </div>
                <p className= 'logout' onClick={() => navigate(`/`)}>Logout</p>
           </div>
           <div className='sd-content'>
                <h1>Welcome!</h1>
                <p>Here you can manage your wanted and caught bandits, as well as view the map of the area.</p>
                <div className='bandits'>
                    <figure className="marquee">
                        <div className='marquee-track'>
                        <img className='marquee_item' src="./bart_bandit.png" width="200" height="200" alt="BartBandit"/>
                        <img className='marquee_item' src="./kat_bandit.JPEG" width="200" height="200" alt="KatBandit"/>
                        <img className='marquee_item' src="./liao_bandit.JPEG" width="200" height="200" alt="LiaoBandit"/>
                        <img className='marquee_item' src="./mattsap_bandit.JPEG" width="200" height="200" alt="MattBandit"/>
                        <img className='marquee_item' src= "./nazim_bandit.JPEG" width="200" height="200" alt= "NazimBandit"/>
                        <img className='marquee_item' src="./roosen_bandit.JPEG" width="200" height="200" alt="RoosenBandit"/>
                        <img className='marquee_item' src="./silber_bandit.JPEG" width="200" height="200" alt="SilberBandit"/>
                        <img className='marquee_item' src="./yarrington_bandit.JPEG" width="200" height="200" alt="YarringtonBandit"/>
                        <img className='marquee_item' src="./bart_bandit.png" width="200" height="200" alt="BartBandit"/>
                        <img className='marquee_item' src="./kat_bandit.JPEG" width="200" height="200" alt="KatBandit"/>
                        <img className='marquee_item' src="./liao_bandit.JPEG" width="200" height="200" alt="LiaoBandit"/>
                        <img className='marquee_item' src="./mattsap_bandit.JPEG" width="200" height="200" alt="MattBandit"/>
                        <img className='marquee_item' src= "./nazim_bandit.JPEG" width="200" height="200" alt= "NazimBandit"/>
                        <img className='marquee_item' src="./roosen_bandit.JPEG" width="200" height="200" alt="RoosenBandit"/>
                        <img className='marquee_item' src="./silber_bandit.JPEG" width="200" height="200" alt="SilberBandit"/>
                        <img className='marquee_item' src="./yarrington_bandit.JPEG" width="200" height="200" alt="YarringtonBandit"/>
                        </div>
                    </figure>  
                </div>
           </div>
        </div>
    )
}