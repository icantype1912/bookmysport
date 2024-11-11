import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async () => {
    const { email, username, password, confirmPassword } = fields;

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/user/register", {
        username,
        password,
        email,
        role: "user"  // Optional, assuming default role is 'user'
      });

      // Redirect to login on successful registration
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setError(error.response?.data?.error || "Sign up failed");
    }
  };

  return (
    <div className="Login">
      <div className="SignUp-Box flex flex-col justify-start">
        <div className="flex flex-row justify-center">
          <h1 className="text-white text-2xl">Sign Up</h1>
        </div>
        <div className="flex flex-col p-4 gap-5 mt-2">
          {/* Display Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          <TextField
            label="Email"
            variant="outlined"
            size="small"
            name="email"
            value={fields.email}
            onChange={handleChange}
            sx={{
              "& .MuiInputLabel-root": {
                color: "lightgray",
                "&.Mui-focused": { color: "white" },
              },
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />

          <TextField
            label="Username"
            variant="outlined"
            size="small"
            name="username"
            value={fields.username}
            onChange={handleChange}
            sx={{
              "& .MuiInputLabel-root": {
                color: "lightgray",
                "&.Mui-focused": { color: "white" },
              },
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />

          <TextField
            label="Password"
            type="password"
            size="small"
            variant="outlined"
            name="password"
            value={fields.password}
            onChange={handleChange}
            sx={{
              "& .MuiInputLabel-root": {
                color: "lightgray",
                "&.Mui-focused": { color: "white" },
              },
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />

          <TextField
            label="Confirm Password"
            type="password"
            size="small"
            variant="outlined"
            name="confirmPassword"
            value={fields.confirmPassword}
            onChange={handleChange}
            sx={{
              "& .MuiInputLabel-root": {
                color: "lightgray",
                "&.Mui-focused": { color: "white" },
              },
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />

          <div className="flex justify-center">
            <h1 className="text-white">Already registered?</h1>
            <Link to="/login" className="underline ml-2 text-white">
              Login
            </Link>
          </div>

          <Button
            sx={{
              color: "#ffffff",
              textTransform: "none",
              borderColor: "#ffffff",
              background: "linear-gradient(45deg,#ff7a18, #af002d)",
              backgroundColor: "transparent",
              border: "none",
              "&:hover": {
                background: "linear-gradient(45deg, #af002d, #ff7a18)",
                opacity: 0.9,
              },
            }}
            size="large"
            variant="contained"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
