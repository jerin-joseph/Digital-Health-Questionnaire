import { ReactComponent as NextIcon } from "../assets/icons/chevron/right.svg";
import Button from "@mui/material/Button";
function ActionButton({ text, handleClick }) {
  return (
    <Button
      className="nextButton"
      variant="contained"
      color="primary"
      onClick={() => handleClick()}
    >
      <div className="nextWrapper">
        <span></span>
        <span className="nextText">{text}</span>
        <span className="nextIcon">
          <NextIcon
            floodColor="white"
            color="white"
            fill="white !important"
            stroke="white"
          />
        </span>
      </div>
    </Button>
  );
}

export default ActionButton;
