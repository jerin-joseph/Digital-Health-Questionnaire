import Question from "./Question";
import Data from "../data.json";
import { useEffect, useState } from "react";
import Outcome from "./Outcome";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Header from "./Header";

export default function Board() {
  const [scores, setScores] = useState([]);
  const [currentQuestion, setcurrentQuestion] = useState(Data.questions[0]);
  const [completed, setCompleted] = useState(false);
  const [outcome, setOutcome] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log(questions, scores, progress);
  }, [questions, scores, progress]);

  const handleNext = (answer) => {
    setQuestions([...questions, currentQuestion]);
    setProgress((questions.length + 1) * 10);
    setScores([...scores, answer]);
    if (currentQuestion.next[0].next_question) {
      const nextQuestion = findNextQuestion(answer);
      setcurrentQuestion(nextQuestion);
    } else {
      setCompleted(true);
      setProgress(100);
      const totalScore = calculateScore(currentQuestion.next, scores);
      console.log(totalScore);
      const outcome = findOutcome(currentQuestion.next, totalScore);
      setOutcome(outcome);
      console.log(outcome);
    }
  };
  const findNextQuestion = (ans) => {
    console.log("finding next qn");
    let nextQuestion = null;
    let nextQuestionId = "";
    if (currentQuestion.next.length > 1) {
      nextQuestionId = currentQuestion.next.find(
        (item) => item.answered === ans.id
      ).next_question;
    } else {
      nextQuestionId = currentQuestion.next[0].next_question;
    }
    nextQuestion = Data.questions.find((item) => item.id === nextQuestionId);
    return nextQuestion;
  };

  const calculateScore = (nextStep, scores) => {
    let total = 0;
    for (let item of scores) {
      total += parseInt(item.score);
    }
    return total;
  };

  const findOutcome = (nextStep, totalScore) => {
    let outcome = "";
    for (let item of nextStep) {
      if (item.max_score) {
        if (totalScore <= item.max_score) {
          outcome = item.outcome;
          break;
        }
      } else {
        outcome = item.outcome;
      }
    }
    return Data.outcomes.find((item) => item.id === outcome);
  };

  const goBack = () => {
    if (questions.length) {
      const prevQuestion = questions.pop();
      setcurrentQuestion(prevQuestion);
      scores.pop();
      setScores(scores);
    }
  };

  return (
    <div className="board">
      <Card className="card" sx={{ boxShadow: 3 }}>
        {/* {console.log(scores)} */}
        <CardContent>
          <Header
            goBack={goBack}
            steps={questions.length}
            completed={completed}
            progress={progress}
          />

          <Typography variant="body">
            {!outcome ? (
              <Question
                question={currentQuestion.question_text}
                answers={currentQuestion.answers}
                selectOption={handleNext}
              />
            ) : (
              <Outcome
                text={outcome.text}
                showBookingButton={outcome.show_booking_button}
              />
            )}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
