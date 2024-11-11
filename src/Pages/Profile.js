import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Tab,
  Tabs,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [selectedTab, setSelectedTab] = useState("active");

  const handleEditToggle = () => setIsEditing(!isEditing);

  return (
    <div classname="profile">
      <Box
        className="profile-container"
        sx={{
          width: "90%",
          maxWidth: "800px",
          minHeight: "80vh",
          bgcolor: "#333",
          color: "#fff",
          p: 4,
          mx: "auto",
          mt: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>

        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="body1">Username: </Typography>
          {isEditing ? (
            <TextField
              variant="outlined"
              size="small"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ ml: 2 }}
            />
          ) : (
            <Typography variant="body1" sx={{ ml: 2 }}>
              {username}
            </Typography>
          )}
          <IconButton
            onClick={handleEditToggle}
            sx={{ color: "#90caf9", ml: 1 }}
          >
            <EditIcon />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="body1">Email: </Typography>
          {isEditing ? (
            <TextField
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ ml: 2 }}
            />
          ) : (
            <Typography variant="body1" sx={{ ml: 2 }}>
              {email}
            </Typography>
          )}
          <IconButton
            onClick={handleEditToggle}
            sx={{ color: "#90caf9", ml: 1 }}
          >
            <EditIcon />
          </IconButton>
        </Box>

        {/* Tabs for Bookings */}
        <Box mt={4}>
          <Tabs
            value={selectedTab}
            onChange={(e, newValue) => setSelectedTab(newValue)}
            textColor="inherit"
            indicatorColor="primary"
            variant="fullWidth"
          >
            <Tab label="Active Bookings" value="active" />
            <Tab label="Past Bookings" value="past" />
          </Tabs>

          <Box mt={3}>
            {selectedTab === "active" ? (
              <Grid container spacing={2}>
                {/* Active Booking Example */}
                <Grid item xs={12}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      bgcolor: "#424242",
                      color: "#fff",
                    }}
                  >
                    <Typography>Active Booking 1</Typography>
                    <IconButton sx={{ color: "#f44336" }}>
                      <DeleteIcon />
                    </IconButton>
                  </Paper>
                </Grid>
                {/* Add more active bookings as needed */}
              </Grid>
            ) : (
              <Grid container spacing={2}>
                {/* Past Booking Example */}
                <Grid item xs={12}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      bgcolor: "#424242",
                      color: "#fff",
                    }}
                  >
                    <Typography>Past Booking 1</Typography>
                  </Paper>
                </Grid>
                {/* Add more past bookings as needed */}
              </Grid>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
