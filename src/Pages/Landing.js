import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Landing = ()=>{
    const navigate = useNavigate()
    return(
        <div className="Landing">
            <div className="Landing-Texts">
                <h1 className="gradient text-7xl h-20 ml-4">Athletix</h1>
                <h1 className="gradient text-5xl h-16 ml-4">Maximize Your Playtime Efficiency</h1>
                <h1 className="gradient text-5xl h-16 ml-4">Manage your sports gear and reservations effortlessly</h1>
            </div>
            <div className="Landing-Buttons">
                <Button  onClick = {()=>{navigate("/signup")}} sx={{color:"#ffffff",textTransform:"none", borderColor:"#ffffff",marginLeft:"16px"}} size="medium" variant="outlined">Sign Up</Button>
                <Button sx={{color:"#ffffff",textTransform:"none", borderColor:"#ffffff",marginLeft:"16px"}} size="medium" variant="outlined">Learn More</Button>
            </div>
        </div>
    )
}


export default Landing