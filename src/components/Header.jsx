import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { ReactComponent as BackButton } from "../assets/icons/chevron/left.svg";

const Header = ({ steps, completed, goBack, progress }) => {
  return (
    <>
      <div className="header">
        {steps > 0 && !completed && (
          <div className="backButton">
            <IconButton aria-label="delete" onClick={goBack}>
              <BackButton fill="#7ad3c3" stroke="#7ad3c3">
                <path fill="green"></path>
              </BackButton>
            </IconButton>
          </div>
        )}
        <span className="title">Heartburn Checker</span>
      </div>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={completed ? 100 : progress}
        />
      </Box>
    </>
  );
};

export default Header;
