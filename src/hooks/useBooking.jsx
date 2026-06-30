import { useState, useReducer } from "react";

export const timeOptions = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

export const useBooking = () => {
  const initializeTimes = () => timeOptions;
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { availableTimes: action.payload };
      case "REMOVE":
        return {
          availableTimes: state.availableTimes.filter(
            (time) => time !== action.payload,
          ),
        };
      case "RESET":
        return { availableTimes: initializeTimes() };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    availableTimes: initializeTimes(),
  });
  const [bookedSlots, setBookedSlots] = useState([]);

  return {
    availableTimes: state.availableTimes,
    setAvailableTimes: (time) => dispatch({ type: "ADD", payload: time }),
    removeAvailableTime: (time) => dispatch({ type: "REMOVE", payload: time }),
    resetAvailableTimes: () => dispatch({ type: "RESET" }),
    bookedSlots,
    setBookedSlots,
  };
};
