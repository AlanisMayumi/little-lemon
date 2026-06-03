import { BookingSlot } from "../booking-slot";

export const BookedTable = ({ bookedSlots }) => {
  if (!bookedSlots?.length) {
    return <p>No booked tables yet.</p>;
  }
  return (
    <div>
      <h1>Booked Table</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {bookedSlots.map((slot, index) => (
            <BookingSlot key={index} slot={slot} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
