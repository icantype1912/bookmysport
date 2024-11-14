import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const AdminMain = () => {
  const [users, setUsers] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [newEquipmentType, setNewEquipmentType] = useState("");
  const [error, setError] = useState(null);
  const [total_users,setTotalusers] = useState(0);

  const predefinedEquipmentTypes = [
    "Badminton",
    "Table-Tennis",
    "Squash",
    "Chess",
    "Darts",
    "Pool",
    "Pickleball",
  ];

  const err = 5

  // Fetch users and equipment on component mount
  useEffect(() => {
    fetchUsers();
    fetchEquipment();
    fetchUserCount();
  }, []);

  // Fetch all users
  const fetchUserCount = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/count", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setTotalusers(response.data.totalUsers);  // Access 'totalUsers' from the backend response
    } catch (error) {
      setTotalusers(err);
    } 
  };
  

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/all", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsers(response.data);
    } catch (error) {
      setError("Failed to fetch users.");
    }
  };

  // Fetch all equipment
  const fetchEquipment = async () => {
    try {
      const response = await axios.get("http://localhost:3000/equipment/all", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setEquipment(response.data);
    } catch (error) {
      setError("Failed to fetch equipment.");
    }
  };

  // Handle adding new equipment instance
  const handleAddEquipment = async () => {
    if (!newEquipmentType) return;
  
    try {
      const response = await axios.post(
        "http://localhost:3000/equipment/add",
        { equipment_type: newEquipmentType },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setEquipment((prev) => [...prev, response.data]); // Add the new equipment to the local state
      setNewEquipmentType(""); // Clear the selection
    } catch (error) {
      setError("Failed to add equipment.");
    }
  };

  // Handle deleting equipment instance
  const handleDeleteEquipment = async (equipmentId) => {
    try {
      await axios.delete(`http://localhost:3000/equipment/${equipmentId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setEquipment((prev) => prev.filter((item) => item.id !== equipmentId));
    } catch (error) {
      setError("Failed to delete equipment.");
    }
  };

  // Handle deleting a user
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/user/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsers((prev) => prev.filter((user) => user.id !== userId));
    } catch (error) {
      setError("Failed to delete user.");
    }
  };

  return (
    <Box className="admin-main" sx={{ p: 4, color: "#fff" }}>
      <h1 className="text-black text-4xl">
        Admin Dashboard
      </h1>

      <h1 className="text-black mt-4">Total Users = {total_users}</h1>

      {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}

      {/* Users Table */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Users</Typography>
        <TableContainer component={Paper} sx={{ backgroundColor: "#333" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Username</TableCell>
                <TableCell sx={{ color: "#fff" }}>Role</TableCell>
                <TableCell sx={{ color: "#fff" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell sx={{ color: "#fff" }}>{user.username}</TableCell>
                  <TableCell sx={{ color: "#fff" }}>{user.role}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleDeleteUser(user.id)}
                      sx={{ color: "#f44336" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Equipment Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Equipment</Typography>

        {/* Add Equipment */}
        <Box sx={{ display: "flex", gap: 2, mb: 2, alignItems: "center" }}>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Equipment Type</InputLabel>
            <Select
              value={newEquipmentType}
              onChange={(e) => setNewEquipmentType(e.target.value)}
              label="Equipment Type"
              sx={{
                backgroundColor: "#424242",
                color: "white",
              }}
            >
              {predefinedEquipmentTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={handleAddEquipment}
            sx={{
              background: "linear-gradient(45deg, #66bb6a, #43a047)",
              color: "#fff",
              "&:hover": { background: "linear-gradient(45deg, #43a047, #66bb6a)" },
            }}
          >
            Add Equipment
          </Button>
        </Box>

        {/* Equipment Table */}
        <TableContainer component={Paper} sx={{ backgroundColor: "#333" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Equipment ID</TableCell>
                <TableCell sx={{ color: "#fff" }}>Equipment Type</TableCell>
                <TableCell sx={{ color: "#fff" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {equipment.map((item) => (
                <TableRow key={item.id}>
                  <TableCell sx={{ color: "#fff" }}>{item.id}</TableCell>
                  <TableCell sx={{ color: "#fff" }}>{item.equipment_type}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleDeleteEquipment(item.id)}
                      sx={{ color: "#f44336" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default AdminMain;
