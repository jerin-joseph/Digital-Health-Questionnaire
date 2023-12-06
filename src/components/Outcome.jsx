import ActionButton from "./ActionButton";
import Link from "@mui/material/Link";
function Outcome({ text, showBookingButton, handleRestart }) {
  return (
    <div className="outcomeContainer">
      <div className="outcomeContent">
        <h2>Thank you for answering the questions!</h2>
        <div className="divider" style={{ marginTop: 0 }}></div>
        <p>{text}</p>
        {showBookingButton ? (
          <ActionButton
            text="Book Appointment"
            handleClick={() => {
              console.log("Booking appointment!");
            }}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="restart">
        <Link href="" underline="always" onClick={(e) => handleRestart(e)}>
          Back to the start of the screen
        </Link>
      </div>
    </div>
  );
}

export default Outcome;
