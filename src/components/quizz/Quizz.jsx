import React, { useState, useEffect } from "react";
import questions from "../../data";
import QuizzResult from "../quizzResult/QuizzResult";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// eslint-disable-next-line
import "./Quizz.css";
import { Link } from "react-router-dom";

export default function Quizz() {
  const [currentQuestion, setCurrentQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [randomQuestion, setRandomQuestion] = useState([]);

  useEffect(() => {
    if (questions !== null) {
      getRandomItemsFromArray(questions);
    }
  }, [showResult]);

  const getRandomItemsFromArray = (arr) => {
    let randomIndices = [];
    while (randomIndices.length < 5) {
      let index = Math.floor(Math.random() * arr.length);
      if (!randomIndices.includes(index)) {
        randomIndices.push(index);
      }
    }

    // // Créer un nouveau tableau avec les éléments correspondant aux indices aléatoires
    let nouveauTableau = [];
    randomIndices.forEach((index) => {
      nouveauTableau.push(arr[index]);
    });

    return setRandomQuestion(nouveauTableau);
  };

  const handleAnswerOptions = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAnswer(correctAnswer + 1);
    }
    setClicked(true);
  };
  const handleNextOption = () => {
    setClicked(false);
    const nextQuestions = currentQuestion + 1;
    if (nextQuestions < randomQuestion.length) {
      setCurrentQuestions(nextQuestions);
    } else {
      setShowResult(true);
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestions(0);
    setScore(0);
    setCorrectAnswer(0);
    setShowResult(false);
  };
  return (
    <>
      <div className="container-quizz">
        <div className="app">
          {showResult ? (
            <QuizzResult
              score={score}
              correctAnswer={correctAnswer}
              handlePlayAgain={handlePlayAgain}
            />
          ) : (
            <>
              {randomQuestion.length > 0 && (
                <>
                  <div className="question-section">
                    <h5> Score : {score}</h5>
                    <div className="question-count">
                      <span>
                        Question {currentQuestion + 1} sur{" "}
                        {randomQuestion.length}
                      </span>
                    </div>
                    <div className="question-text">
                      {randomQuestion[currentQuestion].questionText}
                    </div>
                  </div>
                  <div className="answer-section">
                    {randomQuestion[currentQuestion].questionOptions.map(
                      (ans, i) => {
                        return (
                          <Button
                            className={`buttons ${
                              clicked && ans.isCorrect ? "correct" : "rien"
                            }`}
                            disabled={clicked}
                            key={i}
                            onClick={() => handleAnswerOptions(ans.isCorrect)}
                            variant="contained"
                            style={{ margin: 2 }}
                          >
                            {ans.reponseChoix}
                          </Button>
                        );
                      }
                    )}
                    <div className="actions">
                      <Link style={{ textDecoration: "none" }} to={"/"}>
                        <Button
                          className="btn-home-mui"
                          variant="contained"
                          size="medium"
                          endIcon={<ExitToAppIcon />}
                        >
                          Quitter
                        </Button>
                      </Link>
                      <Button
                        disabled={!clicked}
                        onClick={handleNextOption}
                        variant="contained"
                      >
                        Suivant
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
