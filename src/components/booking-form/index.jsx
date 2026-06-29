import React, { useState } from "react";
import { timeOptions } from "../../hooks/useBooking";
import { Formik } from "formik";

const errorMessage = (field) => <div style={{ color: "red" }}>{field}</div>;

const BookingForm = ({ onSubmit }) => {
  const today = new Date();
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    onSubmit?.(values);
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};

          if (!values.date) {
            errors.date = "Date is required";
          }

          return errors;
        }}
      >
        {({ handleSubmit, errors, values, isSubmitting }) => (
          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
          >
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              name="date"
              id="res-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && errorMessage(errors.date)}
            <label htmlFor="res-time">Choose time</label>
            <select
              name="time"
              id="res-time"
              value={time}
              onChange={(e) => {
                console.log("Selected time:", e.target.value);
                setTime(e.target.value);
              }}
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.time && errorMessage(errors.time)}
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              defaultValue="1"
              max="10"
              id="guests"
              name="guests"
            />
            {errors.guests && errorMessage(errors.guests)}
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion">
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
            {errors.occasion && errorMessage(errors.occasion)}
            <input
              type="submit"
              value="Make Your reservation"
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </>
  );
};

export default BookingForm;
