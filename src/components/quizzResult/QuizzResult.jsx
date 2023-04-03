import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { Link } from "react-router-dom";
import "./QuizzResult.css";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CachedIcon from "@mui/icons-material/Cached";
import {Typography } from "@mui/material";

export default function QuizzResult(props) {
  const container = useRef(null);
  const [note, setNote] = useState(null);
  const [moyenneSur20, setMoyenneSur20] = useState(false);

  

  const convertScore = (score) => {
    let moyenne = Math.round((score / 38) * 20);
    let reussite = moyenne >= 12 ? true : false;
    reussite === true ? victoire(): fail ()
    return setNote(reussite), setMoyenneSur20(moyenne);
  };

  const fail= ()=> {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../utils/lotties/echec.json"),
    });
  }

  const victoire = ()=> {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../utils/lotties/celebrate.json"),
    });
  }
  

  useEffect(() => {
    let score = props.score;
    if (score !== null) {
      convertScore(score);  
    }
   
  }, [props.score]);

  
  return (
    <>
      <div className="score-section">
        <>
          <div style={{width:'60%', margin:'auto', marginBottom:"10%"}} ref={container} />
          {note ? (
            <Typography  variant="h5" style={{color:"white "}}  >
           Félicitation vous avez votre C.Q.O !
          </Typography>
          
          ) : (
            <Typography gutterBottom variant="h5" color="white">
            Recommencez pour vous améliorer !
           </Typography>
           
          )}
       
        </>
        <Divider  color="#fffff" sx={{ height: "1px"}} variant="middle"/>
        <Typography  variant="h6" style={{color:"white "}}  >
        Votre note {moyenneSur20}/20
          </Typography>

        <Divider  color="#fffff" sx={{ height: "1px"}} variant="middle"/>
        <Typography  variant="h6" style={{color:"white "}}  >
       Nombres de réponses correctes {props.correctAnswer} sur 38
     
          </Typography>
        
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
