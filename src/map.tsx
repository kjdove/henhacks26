import {useNavigate} from 'react-router-dom';
import "./map.css"
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDashboardNavigation } from './navigation';
import { ModalForm } from './ModalForm';

export function Map () {
    const navigate = useNavigate();
    const [Distances, setDistances] = useState<number[]>([]);

    function getDistanceFromLatLonInM(lat1:number,lon1:number,lat2:number,lon2:number) {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2-lat1);  // deg2rad below
        const dLon = deg2rad(lon2-lon1); 
        const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2)
            ; 
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        const d = R * c; // Distance in km
        const miles = (d * 0.621371)
        setDistances(prev => [...prev, miles]);
    }

    function deg2rad(deg:number) {
        return deg * (Math.PI/180)
    }

    const [isOpen, setIsOpen] =  useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => {setIsOpen(false); setDistances([]);}
    
    function GetLocation(){
        openModal();
        navigator.geolocation.getCurrentPosition((position) => {
            //Silber
            getDistanceFromLatLonInM(position.coords.latitude, position.coords.longitude, 39.67965027421347, -75.75219651288579);
            //Yarrington
            getDistanceFromLatLonInM(position.coords.latitude, position.coords.longitude, 39.680598580340494, -75.75312460543964);
            //Nazim
            getDistanceFromLatLonInM(position.coords.latitude, position.coords.longitude, 39.683225631916144, -75.75432086681847)
            //Roosen
            getDistanceFromLatLonInM(position.coords.latitude, position.coords.longitude, 39.67872793208491, -75.75058534787834)
            //Mattsap
            getDistanceFromLatLonInM(position.coords.latitude, position.coords.longitude, 39.68426511539312, -75.75139766743624)
            //Liao
            getDistanceFromLatLonInM(position.coords.latitude, position.coords.longitude, 39.67963156345538, -75.75131575286129)
            //Kat
            getDistanceFromLatLonInM(position.coords.latitude, position.coords.longitude, 39.678603684544036, -75.74246935208797)
            //Bart
            getDistanceFromLatLonInM(position.coords.latitude, position.coords.longitude, 39.68061350664367, -75.75399160292278)
        });
    }

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
            <div className="map-container">
                <div className="map-text">
                    <p>
                    Here you can view the map of the area and track the locations of bandit.
                    </p>
                    <p>
                    How close are these bandits to you?
                    </p>

                    <div>
                    
                    <Button className="outline-btn" onClick={() => GetLocation()}>Find out now!</Button>
                    {isOpen && 
                        <ModalForm onClose={closeModal} Distances={Distances}/>
                    }
                    </div>
                </div>

                <img src="Map.jpg" alt="banditmap" />
            </div>
        </>
    )
}