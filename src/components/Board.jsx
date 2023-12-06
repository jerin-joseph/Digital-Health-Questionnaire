import Question from "./Question";
import Data from "../assets/data/data.json";
import { useEffect, useState } from "react";
import Outcome from "./Outcome";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Header from "./Header";

export default function Board() {
  const [scores, setScores] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(Data.questions[0]);
  const [completed, setCompleted] = useState(false);
  const [outcome, setOutcome] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (completed) {
      const outcome = findOutcome(calculateScore(scores));
      setOutcome(outcome);
    }
  }, [completed]);

  const handleNext = (answer) => {
    setScores([...scores, answer]);
    setQuestions([...questions, currentQuestion]);
    setProgress((questions.length + 1) * 10);
    // setTimeout(() => {
    if (currentQuestion.next[0].next_question) {
      const nextQuestion = findNextQuestion(answer);
      setCurrentQuestion(nextQuestion);
    } else {
      setCompleted(true);
      setProgress(100);
    }
    // }, 2000);
  };
  const findNextQuestion = (ans) => {
    let nextQuestionId = "";
    if (currentQuestion.next.length > 1) {
      nextQuestionId = currentQuestion.next.find(
        (item) => item.answered === ans.id
      ).next_question;
    } else {
      nextQuestionId = currentQuestion.next[0].next_question;
    }
    const nextQuestion = Data.questions.find(
      (item) => item.id === nextQuestionId
    );
    return nextQuestion;
  };

  const calculateScore = (scores) => {
    let total = 0;
    for (let item of scores) {
      total += parseInt(item.score);
    }
    return total;
  };

  const findOutcome = (totalScore) => {
    let outcome = "";
    const outcomeList = currentQuestion.next;
    //assuming outcomes are sorted in json
    for (let item of outcomeList) {
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
      setCurrentQuestion(prevQuestion);
      scores.pop();
      setScores(scores);
    }
  };

  const handleRestart = (e) => {
    e.preventDefault();
    setCompleted(false);
    setProgress(0);
    setScores([]);
    setQuestions([]);
    setCurrentQuestion(Data.questions[0]);
    setOutcome(null);
  };

  return (
    <div className="board">
      <Card className="card" sx={{ boxShadow: 3 }}>
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
                handleRestart={handleRestart}
              />
            )}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
