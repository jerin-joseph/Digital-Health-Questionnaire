import Button from "@mui/material/Button";
import { useState } from "react";
import { ReactComponent as SuccessIcon } from "../assets/icons/success/outline.svg";
import { ReactComponent as NextIcon } from "../assets/icons/chevron/right.svg";
import Chip from "@mui/material/Chip";
import ActionButton from "./ActionButton";

export default function Question({ question, answers, selectOption }) {
  const [choice, setChoice] = useState(null);
  const handleClick = function () {
    if (choice) {
      selectOption(choice);
    }
    setChoice(null);
  };

  return (
    <div className="question">
      <div className="questionWrapper">
        <div className="questionText">
          {question}
          <Chip
            size="small"
            sx={{
              width: "3rem",
              height: "3px",
            }}
            className="divider"
          />
        </div>

        <div className="options">
          {answers &&
            answers.map((ans) => {
              return (
                <Button
                  variant={
                    choice && choice.id === ans.id ? "contained" : "outlined"
                  }
                  key={ans.id}
                  value={ans.score}
                  // onClick={(e) => calculateScore(ans)}
                  onClick={() => setChoice(ans)}
                  className="optionButton"
                  endIcon={
                    choice && choice.id === ans.id ? (
                      <SuccessIcon fill="#7ad3c3" stroke="#7ad3c3" />
                    ) : (
                      <></>
                    )
                  }
                >
                  {ans.label}
                </Button>
              );
            })}
        </div>
      </div>
      <div className="next">
        <ActionButton text={"Next"} handleClick={handleClick} />
      </div>
    </div>
  );
}
