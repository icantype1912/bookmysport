import React, { useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Booking = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [error, setError] = useState(null);
  
  const selectedSport = "Badminton"; // Mock sport name; replace with actual sport selection
  const equipmentId = 1; // Replace with actual equipment ID based on your sport selection logic
  const userId = 3; // Replace with actual logged-in user ID, typically fetched from auth state
  
  // Calculate available dates
  const getDates = () => {
    const dates = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      dates.push(`${day}-${month}-${year}`);
    }
    return dates;
  };

  const availableDates = getDates();
  const timeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

  // Convert selected date and time to a suitable format for the backend
  const formatDateTime = (date, time) => {
    const [day, month, year] = date.split("-");
    const [hour, minute] = time.split(" ")[0].split(":");
    const ampm = time.split(" ")[1];
    let formattedHour = parseInt(hour, 10);
    if (ampm === "PM" && formattedHour !== 12) formattedHour += 12;
    if (ampm === "AM" && formattedHour === 12) formattedHour = 0;

    return `${year}-${month}-${day}T${String(formattedHour).padStart(2, "0")}:${minute}:00`;
  };

  const handleConfirmBooking = async () => {
    const startTime = formatDateTime(selectedDate, selectedTime);
    const endTime = formatDateTime(selectedDate, `${parseInt(selectedTime.split(":")[0]) + 1}:00 ${selectedTime.split(" ")[1]}`);
    
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:3000/reservation/reserve',
        { equipmentId, userId, startTime, endTime },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Navigate to confirmation with booking details
      navigate('/confirm', { state: { selectedSport, selectedDate, selectedTime } });
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to create reservation');
    }
  };

  return (
    <div className="booking">
      <Box className="booking-container" sx={{
        maxWidth: "600px", mx: "auto", p: 4, borderRadius: 2, boxShadow: 3,
        bgcolor: "#333", textAlign: "center", color: "#fff"
      }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2 }}>
          Selected Sport: {selectedSport}
        </Typography>

        <Typography variant="h4" component="h1" gutterBottom>
          Choose Your Booking
        </Typography>

        {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}

        <Box className="date-selector" mb={3}>
          <Typography variant="h6" component="h2">Select Date</Typography>
          <Grid container spacing={2} justifyContent="center" mt={1}>
            {availableDates.map((date) => (
              <Grid item key={date}>
                <Button
                  variant={selectedDate === date ? "contained" : "outlined"}
                  onClick={() => setSelectedDate(date)}
                  sx={{
                    color: selectedDate === date ? "#fff" : "#90caf9",
                    bgcolor: selectedDate === date ? "#90caf9" : "transparent",
                    borderColor: "#90caf9",
                    "&:hover": { bgcolor: selectedDate === date ? "#64b5f6" : "rgba(144, 202, 249, 0.1)" }
                  }}
                >
                  {date}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {selectedDate && (
          <Box className="time-selector" mb={3}>
            <Typography variant="h6" component="h2">Available Time Slots</Typography>
            <Grid container spacing={2} justifyContent="center" mt={1}>
              {timeSlots.map((time) => (
                <Grid item key={time}>
                  <Button
                    variant={selectedTime === time ? "contained" : "outlined"}
                    onClick={() => setSelectedTime(time)}
                    sx={{
                      color: selectedTime === time ? "#fff" : "#f48fb1",
                      bgcolor: selectedTime === time ? "#f48fb1" : "transparent",
                      borderColor: "#f48fb1",
                      "&:hover": { bgcolor: selectedTime === time ? "#f06292" : "rgba(244, 143, 177, 0.1)" }
                    }}
                  >
                    {time}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {selectedDate && selectedTime && (
          <Button
            variant="contained"
            onClick={handleConfirmBooking}
            sx={{
              mt: 2, py: 1, px: 4, bgcolor: "#66bb6a", color: "#fff",
              "&:hover": { bgcolor: "#43a047" }
            }}
          >
            Confirm Booking
          </Button>
        )}
      </Box>
    </div>
  );
};

export default Booking;
