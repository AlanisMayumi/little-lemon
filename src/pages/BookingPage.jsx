import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import { BookedTable } from "../components/booked-table/index.jsx";
import BookingForm from "../components/booking-form";
import { useBooking } from "../hooks/useBooking";

const BookingPage = () => {
  const { bookedSlots, setBookedSlots, removeAvailableTime, availableTimes } =
    useBooking();

  const updateTimes = ({ date, time }) => {
    removeAvailableTime(time);
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
      <BookingForm onSubmit={updateTimes} />
      <Footer />
    </>
  );
};

export default BookingPage;
