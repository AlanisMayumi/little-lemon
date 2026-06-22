import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/booking";
import { BookingConfirmation } from "./pages/booking-confirmation";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
    </>
  );
}

export default App;
