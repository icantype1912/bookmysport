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
        <h1 className="text-black text-2xl ml-3">BookMySport</h1>
      </div>
      <div className="mt-3 mr-3">
        {user === null ? (
          <Button
            onClick={() => {
            }}
            sx={{ color: "#001219", textTransform: "none" }}
          >
            Login
          </Button>
        ) : (
          <Button
            onClick={onLogout}
            sx={{ color: "#001219", textTransform: "none" }}
          >Logout</Button>
        )}
        <Button
          onClick={() => {
          }}
          sx={{ color: "#001219", textTransform: "none" }}
        >
          About us
        </Button>
      </div>
    </div>
  );
};
