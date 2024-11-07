import React, { useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const selectedSport = "Badminton"; // Mock sport name; replace with a prop or state if dynamic

  // Calculate today's, tomorrow's, and the day after's dates in DD-MM-YYYY format
  const getDates = () => {
    const dates = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      dates.push(`${day}-${month}-${year}`); // Format: DD-MM-YYYY
    }
    return dates;
  };

  const availableDates = getDates();
  const timeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

  return (
    <div className="booking">
      <Box
        className="booking-container"
        sx={{
          maxWidth: "600px",
          mx: "auto",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "#333", // Dark background
          textAlign: "center",
          color: "#fff", // Light text color
        }}
      >
        {/* Display Selected Sport */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2 }}>
          Selected Sport: {selectedSport}
        </Typography>

        <Typography variant="h4" component="h1" gutterBottom>
          Choose Your Booking
        </Typography>

        {/* Date Selection */}
        <Box className="date-selector" mb={3}>
          <Typography variant="h6" component="h2">
            Select Date
          </Typography>
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
                    "&:hover": {
                      bgcolor:
                        selectedDate === date
                          ? "#64b5f6"
                          : "rgba(144, 202, 249, 0.1)",
                    },
                  }}
                >
                  {date}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Time Slot Selection */}
        {selectedDate && (
          <Box className="time-selector" mb={3}>
            <Typography variant="h6" component="h2">
              Available Time Slots
            </Typography>
            <Grid container spacing={2} justifyContent="center" mt={1}>
              {timeSlots.map((time) => (
                <Grid item key={time}>
                  <Button
                    variant={selectedTime === time ? "contained" : "outlined"}
                    onClick={() => setSelectedTime(time)}
                    sx={{
                      color: selectedTime === time ? "#fff" : "#f48fb1",
                      bgcolor:
                        selectedTime === time ? "#f48fb1" : "transparent",
                      borderColor: "#f48fb1",
                      "&:hover": {
                        bgcolor:
                          selectedTime === time
                            ? "#f06292"
                            : "rgba(244, 143, 177, 0.1)",
                      },
                    }}
                  >
                    {time}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Confirm Button */}
        {selectedDate && selectedTime && (
          <Button
            variant="contained"
            onClick={() =>
              alert(`Booking confirmed for ${selectedDate} at ${selectedTime}`)
            }
            sx={{
              mt: 2,
              py: 1,
              px: 4,
              bgcolor: "#66bb6a",
              color: "#fff",
              "&:hover": { bgcolor: "#43a047" },
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
