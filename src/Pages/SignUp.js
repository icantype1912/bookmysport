import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate,Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="Login">
      <div className="SignUp-Box flex flex-col justify-start">
        <div className="flex flex-row justify-center">
          <h1 className="text-white text-2xl">Sign Up</h1>
        </div>
        <div className="flex flex-col p-4 gap-5 mt-2">
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiInputLabel-root": {
                color: "lightgray", // Default label color
                "&.Mui-focused": { color: "white" }, // Label color on focus
              },
              "& .MuiOutlinedInput-root": {
                color: "white", // Input text color
                "& fieldset": { borderColor: "white" }, // Default border color
                "&:hover fieldset": { borderColor: "white" }, // Border color on hover
                "&.Mui-focused fieldset": { borderColor: "white" }, // Border color on focus
              },
            }}
          />
          <TextField
            label="Username"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiInputLabel-root": {
                color: "lightgray", // Default label color
                "&.Mui-focused": { color: "white" }, // Label color on focus
              },
              "& .MuiOutlinedInput-root": {
                color: "white", // Input text color
                "& fieldset": { borderColor: "white" }, // Default border color
                "&:hover fieldset": { borderColor: "white" }, // Border color on hover
                "&.Mui-focused fieldset": { borderColor: "white" }, // Border color on focus
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            size="small"
            variant="outlined"
            sx={{
              "& .MuiInputLabel-root": {
                color: "lightgray",
                "&.Mui-focused": { color: "white" },
              }, // Label color
              "& .MuiOutlinedInput-root": {
                color: "white", // Input text color
                "& fieldset": { borderColor: "white" }, // Default border color
                "&:hover fieldset": { borderColor: "white" }, // Border color on hover
                "&.Mui-focused fieldset": { borderColor: "white" }, // Border color on focus
              },
            }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            size="small"
            variant="outlined"
            sx={{
              "& .MuiInputLabel-root": {
                color: "lightgray",
                "&.Mui-focused": { color: "white" },
              }, // Label color
              "& .MuiOutlinedInput-root": {
                color: "white", // Input text color
                "& fieldset": { borderColor: "white" }, // Default border color
                "&:hover fieldset": { borderColor: "white" }, // Border color on hover
                "&.Mui-focused fieldset": { borderColor: "white" }, // Border color on focus
              },
            }}
          />
          <div className="flex justify-center">
            <h1 className="text-white">Already registered?</h1>
            <Link to = "/Login" className="underline ml-2 text-white">Login</Link>
          </div>
          <Button
            sx={{
              color: "#ffffff",
              textTransform: "none",
              borderColor: "#ffffff",
              background: "linear-gradient(45deg,#ff7a18, #af002d)", // Gradient background
              backgroundColor: "transparent", // Make sure the background is transparent
              border: "none", // Optional: removes border if needed
              "&:hover": {
                background: "linear-gradient(45deg, #af002d, #ff7a18)", // Adjust gradient on hover
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
  );
};

export default SignUp;
