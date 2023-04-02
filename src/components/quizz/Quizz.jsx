import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import questions from "../../data";
import QuizzResult from "../quizzResult/QuizzResult";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Button from "@mui/material/Button";
import "./Quizz.css";

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
    while (randomIndices.length < 38) {
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
                <Container>
                  <Row>
                        <div className="question-count">
                          <span>
                            Question {currentQuestion + 1} sur{" "}
                            {randomQuestion.length}
                          </span>
                        </div>
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <div className="question-section">
                        <div className="question-text">
                          {randomQuestion[currentQuestion].questionText}
                        </div>
                      </div>
                    </Col>
                

                  
                    <Col xs={12} sm={12} md={6} lg={6}>
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
                                onClick={() =>
                                  handleAnswerOptions(ans.isCorrect)
                                }
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
                              color="secondary"
                              endIcon={<ExitToAppIcon />}
                            >
                              Quitter
                            </Button>
                          </Link>
                          <Button
                          
                            disabled={!clicked}
                            onClick={handleNextOption}
                            variant="contained"
                            size="medium"
                            color="secondary"
                          >
                            Suivant
                          </Button>
                        </div>
                      </div>
                    </Col>
                    </Row>
                </Container>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
