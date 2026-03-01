import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./App.css";

export interface Bandit {
	Name: string;
	Location: string;
	threatLevel: number;
	Description: string;
	Status: "Wanted"  | "Caught" ;
	Photo: string;
}

export function App (){
    const [user, setUser]=useState<string>("");
    const [password, setPassword]=useState<string>("");
    const [isSheriff, setIsSheriff] = useState<boolean>(false);
    
    //updates isStudent to switch the view from student to teacher
    function updateUser(event: React.ChangeEvent<HTMLInputElement>) {
    
    setUser(event.target.value);

    if (user.startsWith("Sheriff")) {
        setIsSheriff(true);
    } else {
        setIsSheriff(false);
    }
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


    return (
        <div className='login-page'>
           <div className="logo-header">
                <div className='logo'>
                    <img src="./bblogo.png" alt="BanditBoardLogo"/>
                </div>
           </div>
           <div className="login-content">
                <h3>Howdy Partner!</h3>
                    <Form.Group controlId="formUser">
                        <span><Form.Label style = {{fontWeight: "bold"}}>Username:</Form.Label>
                        <Form.Control value={user} onChange={updateUser} placeholder="Enter username" /></span>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <span>
                        <Form.Label style = {{fontWeight: "bold"}}>Password:</Form.Label>
                        <Form.Control type = "password" value={password} onChange={updatePassword} placeholder="Enter password" /></span>
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
                <Button variant="success" onClick={handleLogin}>
                    Login
                </Button>
           </div>
        </div>
    )
}
