// import { useState } from "react";
import "./ModalForm.css";

interface ModalFormProps {
    onClose: () => void;
    Distances: number[];
}

export function ModalForm({onClose, Distances}: ModalFormProps) {

    const exitModal = () => {
        onClose();
    }

    const names: string[] = ["Slick Silber", "Yeehaw Yarrington", "Nasty Nazim", "Ride 'em Roosen", "Macho Mattsap", "Lucky Liao", "Killer Kat", "Bandit Bart"]

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Threat Radius Detected</h3>
                    <button onClick={exitModal}>x</button>
                </div>
                <div className="modal-body">
                    <ul>
                        {Distances.map((num: number, index: number) => (
                            <li key={index}>{names[index]} <strong>{num.toFixed(2)}</strong> miles away from you.</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );


}