import React , {useState, useContext} from "react";
import UserContext from "../context/UserContext";


export default function Login(){
        const {setUser} = useContext(UserContext)

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        setUser({userName, password})
    }



    return(
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={userName} onChange={(e) => {
                setUsername(e.target.value) 
            }} />
            {" "}
            <input type="text" placeholder="password" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <button onClick={handleSubmit} style={{backgroundColor: "black", padding: "15px", color: "white", border: "none"
            }}> Enter Data</button>
        </div>
    )
}