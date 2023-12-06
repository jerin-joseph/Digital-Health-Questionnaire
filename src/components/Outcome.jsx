import Chip from "@mui/material/Chip";
import ActionButton from "./ActionButton";
import Link from "@mui/material/Link";
function Outcome({ text, showBookingButton, handleRestart }) {
  return (
    <div class="outcomeContainer">
      <div className="outcomeContent">
        <h2>Thank you for answering the questions!</h2>
        <Chip
          size="small"
          sx={{
            width: "3rem",
            height: "3px",
          }}
          // className="divider"
        />
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
        {/* <link href="" label="Back to the start of the screen" /> */}
        <Link href="" underline="always" onClick={(e) => handleRestart(e)}>
          Back to the start of the screen
        </Link>
      </div>
    </div>
  );
}

export default Outcome;
