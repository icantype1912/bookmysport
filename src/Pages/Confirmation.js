import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";

const Confirmation = () => {
  const location = useLocation();
  const { selectedSport, selectedDate, selectedTime } = location.state || {};

  return (
    <div className="confirm flex flex row justify-center">
      <div className="con-table flex flex-col gap-5 justify-center">
        <div className="flex flex-row justify-center">
          <h1 className="text-white text-4xl">Confirmation</h1>
        </div>
        <div className="flex flex-col justify-center items-center p-6 gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-xl">Selected Sport: {selectedSport}</h1>
            <h1 className="text-white text-xl">Selected Date: {selectedDate}</h1>
            <h1 className="text-white text-xl">Selected Time: {selectedTime}</h1>
          </div>
          <Button
            sx={{
              color: "#ffffff",
              textTransform: "none",
              borderColor: "#ffffff",
              marginLeft: "16px",
            }}
            size="medium"
            variant="outlined"
            onClick={() => window.location.href = "/main"}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
