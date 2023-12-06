import { ReactComponent as NextIcon } from "../assets/icons/chevron/right.svg";
import Button from "@mui/material/Button";
function ActionButton({ text, handleClick, disabled = false }) {
  return (
    <Button
      className="nextButton"
      variant="contained"
      color="primary"
      onClick={() => handleClick()}
      disabled={disabled}
    >
      <div className="nextWrapper">
        <span
          className="nextText"
          style={{ color: disabled ? "#7b99a9" : "#fff" }}
        >
          {text}
        </span>
        <span
          className="nextIcon"
          style={{ color: disabled ? "#7b99a9" : "#fff" }}
        >
          <NextIcon />
        </span>
      </div>
    </Button>
  );
}

export default ActionButton;
