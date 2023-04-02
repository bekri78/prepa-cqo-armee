import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { Link } from "react-router-dom";
import "./QuizzResult.css";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CachedIcon from "@mui/icons-material/Cached";

export default function QuizzResult(props) {
  const container = useRef(null);
  const [note, setNote] = useState(false);
  const [moyenneSur20, setMoyenneSur20] = useState(false);

  const convertScore = (score) => {
    let moyenne = Math.round((score / 38) * 20);
    let reussite = moyenne >= 12 ? true : false;
    return setNote(reussite), setMoyenneSur20(moyenne);
  };

  useEffect(() => {
    let score = props.score;
    if (score !== null) {
      convertScore(score);
    }
  }, [props.score]);

  useEffect(() => {
    if (note) {
      lottie.loadAnimation({
        container: container.current,
        render: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../utils/lotties/celebrate.json"),
      });
    } else {
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
          <div style={{width:'60%', margin:'auto'}} ref={container} />
          {note ? (
            <h2> Félicitation vous avez votre C.Q.O !</h2>
          ) : (
            <h2> Recommencez pour vous améliorer !</h2>
          )}
       
        </>
        <Divider  color="#fffff" sx={{ height: "1px"}} variant="middle"/>
        <h4> Votre note {moyenneSur20}/20</h4>
        <Divider  color="#fffff" sx={{ height: "1px"}} variant="middle"/>
        <h4> Nombres de reponses correctes {props.correctAnswer} sur 38</h4>
        <div className="container-btn-exit">
          <Button
            onClick={props.handlePlayAgain}
            className="btn-home-mui"
            variant="contained"
            size="medium"
            color="secondary"
            endIcon={<CachedIcon />}
            style={{ marginRight: 3 }}
          >
            Encore
          </Button>

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
        </div>
      </div>
    </>
  );
}
