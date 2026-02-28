import { Card } from 'react-bootstrap';
import './caught.css';
import {useNavigate} from 'react-router-dom';

export function Caught() {
    const navigate = useNavigate();

    return (
        <>
           <div className = "page-header">
                <div className='left'>
                    <h1 onClick={() => navigate(`/SheriffDashboard`)}>Bandit Board</h1>
                </div>
                <div className='right'>
                    <h3 onClick={() => navigate(`/SheriffDashboard/Wanted`)}>wanted</h3>
                    <h3 onClick={() => navigate(`/SheriffDashboard/Caught`)}>caught</h3>
                    <h3 onClick={() => navigate(`/SheriffDashboard/Map`)}>map</h3>
                </div>
                <p onClick={() => navigate(`/`)}>Logout</p>
           </div>
            <div className='caught-content'>
                <h2>Caught Bandits</h2>
                {list.map((q: QuestionObject, index:number) => {
                const feedback = submitted ? getFeedback(q) : null;
                
                return (
                    <Card
                        key={q.Question + index}
                        className="shadow-sm my-4 border-0"
                        style={{
                            borderRadius: "12px",
                            backgroundColor: "orange"
                                ? feedback?.text === "Correct!"
                                ? "#e9fbe9"
                                : q.Answer.length > 0
                                    ? "#fdeaea"
                                    : "#f0f7ff"
                                : "#f0f7ff",
                            transition: "background-color 0.3s ease",

                        }}
                    >
                        <Card.Body>
                            
                            
                        </Card.Body>
                    </Card>
                );
            })}


            
        </>
    )
}