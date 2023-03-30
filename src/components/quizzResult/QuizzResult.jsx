import React, { useEffect, useRef, useState } from "react";
import questions from "../../data";
import lottie from "lottie-web";
import { Link } from "react-router-dom";
import "./QuizzResult.css";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CachedIcon from "@mui/icons-material/Cached";

export default function QuizzResult(props) {
  const container = useRef(null);
  const [note, setNote] = useState(true);

  const convertScore = (score) => {
    let moyenne = (score * 20) / 38;
    let reussite = moyenne >= 12 ? true : false;
    return setNote(reussite);
  };

  useEffect(() => {
if(note){

  lottie.loadAnimation({
    container: container.current,
    render: "svg",
    loop: true,
    autoplay: true,
    animationData: require("../../utils/lotties/celebrate.json"),
  });
}else{
  lottie.loadAnimation({
    container: container.current,
    render: "svg",
    loop: true,
    autoplay: true,
    animationData: require("../../utils/lotties/echec.json"),
  });
}
    
     
  }, []);


  

  return (
    <>
      <div className="score-section">
   
          <>
            <div className="container" ref={container} />
            {note ? ( <h2> Felicitation vous avez votre C.Q.O !</h2> ) : (  <h2> Echec recommencer pour vous améliorer !</h2> )}
          </>

        <h4> Votre note {props.score}/20</h4>
        <h4> Nombre de reponses correctes {props.correctAnswer} sur 38</h4>
        <div className="container-btn-exit">
          <Button
            onClick={props.handlePlayAgain}
            className="btn-home-mui"
            variant="contained"
            size="large"
            endIcon={<CachedIcon />}
          >
            Recommencer
          </Button>

          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Button
              className="btn-home-mui"
              variant="contained"
              size="large"
              endIcon={<ExitToAppIcon />}
            >
              Quitter
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
