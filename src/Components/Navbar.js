import React from "react";
import "../App.css";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

// Reused
export const NavBar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    console.log("LoggedOut");
  };
  const user = null;

  return (
    <div className="Navlink">
      <div className="mt-3">
        <h1
          className="nav-gradient text-purple text-2xl ml-3 cursor-pointer"
          onClick={() => {
            navigate("/"); // Navigate to the home page
          }}
        >
          Athletix
        </h1>
      </div>
      <div className="mt-3 mr-3">
        {user === null ? (
          <Button
            onClick={() => {
              navigate("/login");
            }}
            sx={{ color: "#ffffff", textTransform: "none", borderColor: "#ffffff" }}
          >
            Login
          </Button>
        ) : (
          <Button
            onClick={onLogout}
            sx={{ color: "#ffffff", textTransform: "none", borderColor: "#ffffff" }}
          >
            Logout
          </Button>
        )}
        <Button
          onClick={() => {
            navigate("/aboutus"); // Navigate to the About Us page
          }}
          sx={{ color: "#ffffff", textTransform: "none", borderColor: "#ffffff" }}
        >
          About us
        </Button>
      </div>
    </div>
  );
};