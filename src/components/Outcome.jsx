function Outcome({ text, showBookingButton }) {
  return (
    <div>
      <h3>Thank you for answering the questions!</h3>
      <p>{text}</p>
      {showBookingButton ? <button>Book Appointment</button> : <></>}
    </div>
  );
}

export default Outcome;
