import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { ReactComponent as BackButton } from "../assets/icons/chevron/left.svg";

const Header = ({ steps, completed, goBack, progress }) => {
  return (
    <>
      <div className="header">
        <div className="backButton">
          {steps > 0 && !completed && (
            <IconButton aria-label="delete" onClick={goBack}>
              <BackButton fill="#7ad3c3" stroke="#7ad3c3" />
            </IconButton>
          )}
        </div>
        <Typography gutterBottom className="title">
          Heartburn Checker
        </Typography>
        <span className="score"></span>
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
