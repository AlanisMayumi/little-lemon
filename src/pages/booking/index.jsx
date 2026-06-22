import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";
import { BookedTable } from "../../components/booked-table/index.jsx";
import BookingForm from "../../components/booking-form";
import { useBooking } from "../../hooks/useBooking";

const BookingPage = () => {
  const { bookedSlots, setBookedSlots, setAvailableTimes, availableTimes } =
    useBooking();

  const submitForm = (formData) => {
    if (window?.submitAPI) {
      window.submitAPI(formData);
    }

    updateTimes({ date: formData.date, time: formData.time });
  };

  const updateTimes = ({ date, time }) => {
    let results = [];
    if (window?.fetchAPI) {
      results = window.fetchAPI(new Date(date));
    }
    setAvailableTimes(results);
    setBookedSlots((prev) => [...prev, { date, time }]);
  };
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
      <BookingForm onSubmit={submitForm} />
      <Footer />
    </>
  );
};

export default BookingPage;
