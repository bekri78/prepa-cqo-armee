import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import questions from "../../data";
import { UserContext } from "../context/userContext";
import QuizzResult from "../quizzResult/QuizzResult";
import TransitionsModal from "../modal/modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import InsightsIcon from '@mui/icons-material/Insights';
import "./Quizz.css";

export default function Quizz() {
  const {currentUser} = useContext(UserContext)
  const [currentQuestion, setCurrentQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [randomQuestion, setRandomQuestion] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  
  useEffect(() => {
    
    if (questions !== null) {
      getRandomItemsFromArray(questions);
      
    }
  }, [showResult]);
  
  useEffect(()=> {
    const tbl =JSON.parse(window.localStorage.getItem('randomQuestionCQO'))
    if(tbl !== null) {
      
      setRandomQuestion(tbl)
    
    }

  },[ showResult])

  const getRandomItemsFromArray = (arr) => {
    let randomIndices = [];
    while (randomIndices.length < 40) {
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
    
    
    return window.localStorage.setItem('randomQuestionCQO', JSON.stringify(nouveauTableau))
  };

  const handleAnswerOptions = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
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
    setShowResult(false);
    window.localStorage.setItem('randomQuestionCQO', JSON.stringify([]))
   
  };
  console.log( randomQuestion)
  return (
    <>
      <div className="container-quizz">
        <div className="app">
          {showResult ? (
            <QuizzResult
              score={score}
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
                        {randomQuestion[currentQuestion].questionOptions?.map(
                          (ans, index) => {
                            return (
                              <Button
                                className={`buttons ${
                                  clicked && ans.isCorrect ? "correct" : "rien"
                                }`}
                                disabled={clicked}
                                key={index}
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
         
        <div className="questions">
        {currentUser && (
          <Link style={{ textDecoration: "none" }} to={"/private/private-state"}>
            <InsightsIcon  style={{ marginRight: 10, marginTop: 10,fontSize: '2em' }} />
          </Link>
             )}
          <ContactSupportIcon
            onClick={() => setOpenModal(!openModal)}
            style={{ marginRight: 10, marginTop: 10,fontSize: '2em' }}
          />
          <Link style={{ textDecoration: "none" }} to={"/email"}>
            <EmailIcon  style={{ marginRight: 10, marginTop: 10,fontSize: '2em' }} />
          </Link>
        </div>
      </div>
      <TransitionsModal
        closeModal={(closeModal) => setOpenModal(closeModal)}
        open={openModal}
      />
    </>
  );
}
