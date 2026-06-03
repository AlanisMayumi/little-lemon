export const BookingSlot = ({ slot }) => {
  return (
    <tr>
      <td>{slot.date}</td>
      <td>{slot.time}</td>
    </tr>
  );
};
