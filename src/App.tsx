
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Bandits from "./Bandits";
import { initializeBandits } from "./main";
import { PublicDashboard } from "./publicDashboard";
import { SheriffDashboard } from "./sheriffDashboard";

export interface Bandit {
	Name: string;
	Location: string;
	threatLevel: number;
	Description: string;
	Status: "Wanted" | "Caught";
	Photo: string;
}


export function App (){
    const [user, setUser]=useState<string>("");
    const [password, setPassword]=useState<string>("");
    const [isSheriff, setIsSheriff] = useState<number>(0);
    const [bandits, setBandits] = useState<Bandit[]>(() => {
    const saved = localStorage.getItem("bandits");
    return saved ? JSON.parse(saved) : Bandits;
  });

  // Initialize if first visit
  useEffect(() => {
    initializeBandits();
  }, []);

  // Persist any changes automatically
  useEffect(() => {
    localStorage.setItem("bandits", JSON.stringify(bandits));
  }, [bandits]);
    
    //updates isStudent to switch the view from student to teacher
    function updateUser(event: React.ChangeEvent<HTMLInputElement>) {
    
    setUser(event.target.value);

    
}

    function updatePassword(event: React.ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value);
    }
     const navigate = useNavigate();
        function handleLogin() {
    if (isSheriff) {
        navigate("/SheriffDashboard");
    } else {
        navigate("/PublicDashboard");
    }
}

    

if(isSheriff==0){
    return (
        <div className='login-page'>
           <div className="logo-header">
                <div className='logo'>
                    <h1>Bandit Board</h1>
                </div>
           </div>
           <div className="login-content">
                <h3>Howdy Partner!</h3>
                <h4> Login Below.</h4>
                    <Form.Group controlId="formUser">
                        <span><Form.Label style = {{fontWeight: "bold"}}>Username:</Form.Label>
                        <Form.Control value={user} onChange={updateUser} placeholder="Enter username" /></span>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <span>
                        <Form.Label style = {{fontWeight: "bold"}}>Password:</Form.Label>
                        <Form.Control type = "password" value={password} placeholder="Enter password" /></span>
                    </Form.Group>
                    <div>
                    <span>
                    {/* <div></div> */}
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
                        {/*<Form>
                            <Form.Check
                                type="switch"
                                id="is-student-check"
                                label={"Login as a: " + (isStudent? "Student": "Teacher")}
                                checked={isStudent}
                                onChange={updateIsStudent}
                                style = {{width: "200px", height: "50px"}}
                            /> 
                        </Form>*/}
                    </div>
                    </span>
                </div>
           </div>
           <Button onClick={login}>LogIn</Button>           
        </div>
    )
}else if(isSheriff==2){
    return(
        <PublicDashboard
        bandit={bandits}
        setList={setBandits}
        />
    )
}
else{
    return(
        <SheriffDashboard
        bandit = {bandits}
        setList = {setBandits}
        />
    )
}
    
}