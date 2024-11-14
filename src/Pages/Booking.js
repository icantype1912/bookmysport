import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = "dog"; // Replace with actual username, e.g., from localStorage or auth context

  const selectedSport = location.state?.sport || "Unknown Sport";
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const getDates = () => {
    const dates = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date.toISOString().split("T")[0]);
    }
    return dates;
  };

  const availableDates = getDates();
  const timeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

  // Formats the date to "YYYY-MM-DD HH:MM:SS" format without timezone
const formatDateTime = (date, time) => {
  const [hour, minute] = time.split(" ")[0].split(":");
  const ampm = time.split(" ")[1];
  let formattedHour = parseInt(hour, 10);
  if (ampm === "PM" && formattedHour !== 12) formattedHour += 12;
  if (ampm === "AM" && formattedHour === 12) formattedHour = 0;

  const dateTime = new Date(`${date}T${String(formattedHour).padStart(2, "0")}:${minute}:00`);

  // Format to "YYYY-MM-DD HH:MM:SS"
  const formattedDate = dateTime.toISOString().slice(0, 19).replace("T", " ");
  return formattedDate;
};

const handleConfirmBooking = async () => {
  if (!selectedDate || !selectedTime) {
    setError("Please select both a date and a time for the booking.");
    return;
  }

  const startTime = formatDateTime(selectedDate, selectedTime);
  const endTime = formatDateTime(selectedDate, `${parseInt(selectedTime.split(":")[0]) + 2}:00 ${selectedTime.split(" ")[1]}`);

  try {
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:3000/reservation/confirm-booking",
      { equipmentType: selectedSport, username, startTime, endTime },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setSuccessMessage("Booking confirmed successfully!");
    navigate("/confirm", { state: { selectedSport, selectedDate, selectedTime } });
  } catch (error) {
    setError(error.response?.data?.error || "Failed to confirm booking");
  }
};


  return (
    <div className="booking">
      <Box className="booking-container" sx={{ maxWidth: "600px", mx: "auto", p: 4, borderRadius: 2, boxShadow: 3, bgcolor: "#333", textAlign: "center", color: "#fff" }}>
        <Typography variant="h5" component="h2" gutterBottom>Selected Sport: {selectedSport}</Typography>
        <Typography variant="h4" component="h1" gutterBottom>Choose Your Booking</Typography>

        {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
        {successMessage && <Typography color="success" sx={{ mb: 2 }}>{successMessage}</Typography>}

        <Box className="date-selector" mb={3}>
          <Typography variant="h6" component="h2">Select Date</Typography>
          <Grid container spacing={2} justifyContent="center" mt={1}>
            {availableDates.map((date) => (
              <Grid item key={date}>
                <Button variant={selectedDate === date ? "contained" : "outlined"} onClick={() => setSelectedDate(date)}>{date}</Button>
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
                  <Button variant={selectedTime === time ? "contained" : "outlined"} onClick={() => setSelectedTime(time)}>{time}</Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {selectedDate && selectedTime && (
          <Button variant="contained" onClick={handleConfirmBooking} sx={{ mt: 2, py: 1, px: 4, bgcolor: "#66bb6a", color: "#fff", "&:hover": { bgcolor: "#43a047" } }}>
            Confirm Booking
          </Button>
        )}
      </Box>
    </div>
  );
};

export default Booking;
