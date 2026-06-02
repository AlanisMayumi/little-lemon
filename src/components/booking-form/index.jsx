import React, { useState } from "react";
import { timeOptions } from "../../hooks/useBooking";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState(timeOptions);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Form submitted with date:",
      date,
      "and time:",
      availableTimes[0],
    );
  };
  return (
    <>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onChange={(e) => setAvailableTimes([e.target.value])}
        >
          {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
