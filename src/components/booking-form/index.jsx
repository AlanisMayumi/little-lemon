import React from "react";
import { timeOptions } from "../../hooks/useBooking";
import { Formik } from "formik";

const errorMessage = (field) => <div style={{ color: "red" }}>{field}</div>;

const BookingForm = ({ availableTimes, onSubmit }) => {
  const today = new Date();
  const handleSubmit = (values) => {
    onSubmit?.(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          date: today.toISOString().split("T")[0],
          time: timeOptions[0],
          guests: 1,
          occasion: "birthday",
        }}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};

          if (!values?.date) {
            errors.date = "Date is required";
          }

          if (values?.date && new Date(values.date) < today) {
            errors.date = "Date is invalid. Please select a future date.";
          }

          if (!values?.time) {
            errors.time = "Time is required";
          }

          if (values.guests < 1) {
            errors.guests = "Number of guests should be more than 1";
          }
          if (!values.occasion) {
            errors.occasion = "Occasion is required";
          }

          return errors;
        }}
      >
        {({ handleSubmit, errors, values, isSubmitting, handleChange }) => (
          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
          >
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              name="date"
              value={values.date}
              id="res-date"
              onChange={handleChange}
            />
            {errors.date && errorMessage(errors.date)}
            <label htmlFor="res-time">Choose time</label>
            <select
              name="time"
              id="res-time"
              onChange={handleChange}
              value={values.time}
            >
              {availableTimes.map((time) => (
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
              onChange={handleChange}
            />
            {errors.guests && errorMessage(errors.guests)}
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" onChange={handleChange}>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
            {errors.occasion && errorMessage(errors.occasion)}
            <input type="submit" value="Make Your reservation" />
          </form>
        )}
      </Formik>
    </>
  );
};

export default BookingForm;
