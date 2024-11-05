import React from "react";
import { TextField } from "@mui/material";

const Login = () =>{
    return (
        <div className="Login">
            <div className="Login-Box flex flex-col justify-start">
                <div className="flex flex-row justify-center">                    
                    <h1 className="text-white text-2xl">Login</h1>
                </div>
                <div className="flex flex-col p-5 gap-5">
                    <TextField label="username"></TextField>
                    <TextField label="password"></TextField>
                </div>
            </div>
        </div>
    )
}

export default Login