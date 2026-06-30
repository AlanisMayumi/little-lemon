import { useNavigate } from "react-router";

import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";
import { BookedTable } from "../../components/booked-table/index.jsx";
import BookingForm from "../../components/booking-form";
import { useBooking } from "../../hooks/useBooking";

const BookingPage = () => {
  const { bookedSlots, setBookedSlots, setAvailableTimes, availableTimes } =
    useBooking();
  const navigate = useNavigate();

  const submitForm = (formData) => {
    console.log("Form submitted with data:", formData);
    updateTimes({ date: formData.date, time: formData.time });
    if (window?.submitAPI) {
      const response = window.submitAPI(formData);
      if (response) {
        // navigate("/booking-confirmation");
      }
      console.log("Form submission response:", response);
    }
  };

  const updateTimes = ({ date, time }) => {
    let results = [];
    if (window?.fetchAPI) {
      console.log("existe fetchAPI");
      const resultsFromApi = window.fetchAPI(new Date(date));
      results = resultsFromApi.filter(
        (availableTime) =>
          !bookedSlots.some((slot) => slot.time === availableTime),
      );
    }
    console.log("Available times fetched:", results);
    setAvailableTimes(results);
    setBookedSlots((prev) => [...prev, { date, time }]);
  };
  console.log("Available times:", availableTimes);
  return (
    <>
      <Header />
      <BookedTable bookedSlots={bookedSlots} />
      <div>
        <h1>Available Times</h1>
        <ul>
          {availableTimes.map((time) => (
            <li key={time}>{time}</li>
          ))}
        </ul>
      </div>
      <BookingForm availableTimes={availableTimes} onSubmit={submitForm} />
      <Footer />
    </>
  );
};

export default BookingPage;
