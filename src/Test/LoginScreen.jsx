import React,{useState} from "react";
import { users } from "./credential";
const Login=({onLoginSuccess})=>{
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const handleChange=()=>{
        const userFound=users.find(
            (user)=>user.username===username && user.password===password
        )
        if(userFound){
            onLoginSuccess();
        }
        else{
            console.log("Invalid Account");
        }
    };

    return(
        
        <div>
            <h3>Login</h3>
            <label>UserName</label>  <input type="text" placeholder="enter username" value={username} onChange={(e)=>setUserName(e.target.value)}></input><br/><br />
            <label>Password </label>    <input type="password" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/><br/>
            <button type="submit" onClick={handleChange}>Sign in</button>
        </div>
        
    );
};
export default Login;
