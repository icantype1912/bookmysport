import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/login", fields);

      // Extract and store token
      const token = response.data.token;
      localStorage.setItem("token", token);

      // Decode token to get user info
      const decodedToken = jwtDecode(token);
      const { id: userId, role } = decodedToken;

      // Store userId in localStorage
      localStorage.setItem("userId", fields.username);

      // Redirect based on user role
      if (role === "admin") {
        navigate("/adminMain", { state: { userId, role } });
      } else {
        navigate("/main", { state: { userId, role } });
      }
    } catch (error) {
      setError(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="Login">
      <div className="Login-Box flex flex-col justify-start">
        <div className="flex flex-row justify-center">
          <h1 className="text-white text-2xl">Login</h1>
        </div>
        <div className="flex flex-col p-8 gap-5 mt-4">
          {error && <p className="text-red-500">{error}</p>}
          <TextField
            label="Username"
            variant="outlined"
            name="username"
            onChange={handleChange}
            value={fields.username}
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
            name="password"
            variant="outlined"
            onChange={handleChange}
            value={fields.password}
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
            <h1 className="text-white">Don't have an account?</h1>
            <Link className="underline ml-2 text-white" to={"/signup"}>
              SignUp
            </Link>
          </div>
          <Button
            sx={{
              color: "#ffffff",
              textTransform: "none",
              borderColor: "#ffffff",
              background: "linear-gradient(45deg,#fd3c98 ,#6829e5)",
              backgroundColor: "transparent",
              border: "none",
              "&:hover": {
                background: "linear-gradient(45deg, #6829e5,#fd3c98)",
                opacity: 0.9,
              },
            }}
            size="large"
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
