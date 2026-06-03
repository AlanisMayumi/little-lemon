import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import { BookedTable } from "../components/booked-table/index.jsx";
import BookingForm from "../components/booking-form";

const BookingPage = () => {
  return (
    <>
      <Header />
      <BookedTable />
      <BookingForm />
      <Footer />
    </>
  );
};

export default BookingPage;
