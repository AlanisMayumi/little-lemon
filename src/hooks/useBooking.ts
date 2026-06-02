import { useState } from "react";

const timeOptions = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export const useBooking = () => {
  const [availableTimes, setAvailableTimes] = useState(timeOptions);

  return {
    availableTimes,
    setAvailableTimes,
  };
};
