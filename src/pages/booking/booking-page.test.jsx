import {
  act,
  render,
  renderHook,
  screen,
  fireEvent,
} from "@testing-library/react";
import { useBooking, timeOptions } from "../../hooks/useBooking";
import BookingPage from ".";

test("initializeTimes returns the correct initial times", () => {
  const { result } = renderHook(() => useBooking());

  expect(result.current.availableTimes).toEqual(timeOptions);
});

test("updateTimes returns the correct times for a given date", () => {
  render(<BookingPage />);

  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const submitButton = screen.getByText(/make your reservation/i);

  fireEvent.change(dateInput, { target: { value: "2024-07-01" } });
  fireEvent.change(timeSelect, { target: { value: "18:00" } });
  fireEvent.click(submitButton);

  expect(screen.getByRole("cell", { name: "2024-07-01" })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "18:00" })).toBeInTheDocument();
});

test("reducer handles ADD action correctly", () => {
  const { result } = renderHook(() => useBooking());
  const newTime = "15:00";
  act(() => {
    result.current.setAvailableTimes(newTime);
  });
  expect(result.current.availableTimes).toEqual([...timeOptions, newTime]);
});
