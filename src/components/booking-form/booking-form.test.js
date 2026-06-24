import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./index";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});

describe("BookingForm", () => {
  it("should execute onSubmit callback with correct data when form is submitted", () => {
    const mockOnSubmit = jest.fn();
    render(<BookingForm onSubmit={mockOnSubmit} />);

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const submitButton = screen.getByText(/make your reservation/i);

    fireEvent.change(dateInput, { target: { value: "2024-07-01" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      date: "2024-07-01",
      time: "18:00",
      guests: "1",
      occasion: "birthday",
    });
  });
});
