import './caught.css';
import { useNavigate} from 'react-router-dom';
import { BanditCard } from "./BanditCard";
import { useDashboardNavigation } from './navigation';
import { useState, useEffect} from 'react';
import { AddBanditModal } from './AddBanditModal';
import type {Bandit} from "./Bandits";
import {getBandits} from "./banditService";
import {createBandit} from "./banditService";




export function Caught() {
    const navigate = useNavigate();
    const { goTo } = useDashboardNavigation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bandits, setBandits] = useState<Bandit[]>([]);
    const caughtBandits = bandits.filter((b) => b.Status === "Caught");

    useEffect(() => {
        (async () => {
            const data = await getBandits();
            setBandits(data);
        }) ();
    }, []);

    const handleAddBandit = async (banditData: {
        Name: string;
        threatLevel: number;
        Location: string;
        Description: string;
        Photo: string;
    }) => {
        await createBandit({
            ...banditData,
            Status: "Caught",
            createdAt: Date.now(),
        });
        const updated = await getBandits();
        setBandits(updated);
    };

    return (
      <div className='caught-container'>
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
                <div className='content-header'>
                    <h2>Caught Bandits</h2>
                    <button className='add-bandit-btn' onClick={() => setIsModalOpen(true)}>+ Add Bandit</button>
                </div>
                <div className='bandit-list'>
                    {caughtBandits.map((bandit: Bandit) => (
                        <BanditCard key={bandit.id} bandit={bandit} />
                    ))}
                </div>
            </div>
            
            <AddBanditModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddBandit}
            />
        </>
    )
}