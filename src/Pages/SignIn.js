import React from "react";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";

const Login = () =>{
    return (
        <div className="Login">
            <div className="Login-Box flex flex-col justify-start">
                <div className="flex flex-row justify-center">                    
                    <h1 className="text-white text-2xl">Login</h1>
                </div>
                <div className="flex flex-col p-8 gap-9 mt-4">
                <TextField
                    label="Username"
                    variant="outlined"
                    sx={{
                        '& .MuiInputLabel-root': { color: 'lightgray' }, // Label color
                        '& .MuiOutlinedInput-root': {
                            color: 'white', // Input text color
                            '& fieldset': { borderColor: 'white' }, // Default border color
                            '&:hover fieldset': { borderColor: 'white' }, // Border color on hover
                         '&.Mui-focused fieldset': { borderColor: 'white' }, // Border color on focus
                        },
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    sx={{
                        '& .MuiInputLabel-root': { color: 'lightgray' }, // Label color
                        '& .MuiOutlinedInput-root': {
                            color: 'white', // Input text color
                            '& fieldset': { borderColor: 'white' }, // Default border color
                            '&:hover fieldset': { borderColor: 'white' }, // Border color on hover
                         '&.Mui-focused fieldset': { borderColor: 'white' }, // Border color on focus
                        },
                    }}
                />
                <Button
                 sx={{
                       color: "#ffffff",
                       textTransform: "none",
                      borderColor: "#ffffff",
                      background: "linear-gradient(45deg,#fd3c98 ,#6829e5)", // Gradient background
                      backgroundColor: "transparent", // Make sure the background is transparent
                      border: "none", // Optional: removes border if needed
                      '&:hover': {
                          background: "linear-gradient(45deg, #6829e5,#fd3c98)", // Adjust gradient on hover
                           opacity: 0.9,
                      },
                 }}
                  size="large"
                 variant="contained"
                >
                 Sign Up
                </Button>
                
                </div>
            </div>
        </div>
    )
}

export default Login