import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import { BookedTable } from "../components/booked-table/index.jsx";
import BookingForm from "../components/booking-form";
import { useBooking } from "../hooks/useBooking";

const BookingPage = () => {
  const { bookedSlots } = useBooking();
  return (
    <>
      <Header />
      <BookedTable bookedSlots={bookedSlots} />
      <BookingForm />
      <Footer />
    </>
  );
};

export default BookingPage;
