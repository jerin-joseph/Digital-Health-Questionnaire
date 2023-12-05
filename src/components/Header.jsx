import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Header = ({ steps, completed, goBack, progress }) => {
  return (
    <>
      <div className="header">
        <div className="backButton">
          {steps > 0 && !completed && (
            <IconButton aria-label="delete" onClick={goBack}>
              <ArrowBackIosIcon color="primary" />
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
