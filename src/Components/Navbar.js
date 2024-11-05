import React from "react";
import "../App.css";
import Button from '@mui/material/Button';
//reused
export const NavBar = (props) => {
  const { user, setUser,auth } = props;
  const onLogout = ()=>{
    console.log("LoggedOut")
  }
  return (
    <div className="Navlink">
      <div className="mt-3">
        <h1 className="nav-gradient text-purple text-2xl ml-3">Athletix</h1>
      </div>
      <div className="mt-3 mr-3">
        {user === null ? (
          <Button
            onClick={() => {
            }}
            sx={{ color: "#ffffff", textTransform: "none",borderColor:"#ffffff" }}
          >
            Login
          </Button>
        ) : (
          <Button
            onClick={onLogout}
            sx={{ color: "#ffffff", textTransform: "none",borderColor:"#ffffff"}}
          >Logout</Button>
        )}
        <Button
          onClick={() => {
          }}
          sx={{ color: "#ffffff", textTransform: "none",borderColor:"#ffffff"}}
        >
          About us
        </Button>
      </div>
    </div>
  );
};
