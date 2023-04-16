import React, { useEffect, useRef, useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  getDoc
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import lottie from "lottie-web";
import { Link } from "react-router-dom";
import "./QuizzResult.css";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CachedIcon from "@mui/icons-material/Cached";
import { Typography } from "@mui/material";
import { format } from 'date-fns'

export default function QuizzResult(props) {
  const { currentUser, idUserFirebase, setIdUserFirebase } = useContext(UserContext);
  const container = useRef(null);
  const [reussite, setReussite] = useState(false);
  const [scoreUser, setScoreUser] = useState(null);
  const [moyenneSur20, setMoyenneSur20] = useState(false);
  const auth = getAuth();
  const noteField = firebase.firestore.FieldValue;
  const date = new Date();
  const dateFormated = format(date,'dd/MM/yyyy')
  

  const searchIdCollection = async () => {

    try {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        const usersCollectionRef = collection(getFirestore(), "users");
        const q = query(usersCollectionRef, where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        const userData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
        }));
        setIdUserFirebase(userData[0].id);
      }
    } catch (error) {
      console.log("error searchIdCollection",error);
    }
  };

  const handleUpdateData = async (id) => {
    const userDoc = doc(db, "users", id);
    const newResults = {
      initialUser: false,
      moyenne: moyenneSur20,
      
    };
    const wrongAnswer =(5 - scoreUser)
    // Décomposer le tableau existant dans Firestore avec l'opérateur de propagation
    const existingNotes = [...(await getDoc(userDoc)).data().note];
    const existingDate = [...(await getDoc(userDoc)).data().date];
    const newNotes =  moyenneSur20;
    const updatedNotes = [...existingNotes, newNotes];
    const updatedDate = [...existingDate, dateFormated];
    const updates = {
      ...newResults,
      note: updatedNotes,
      date:updatedDate,
      correctAnswer: noteField.increment(scoreUser),
      wrongAnswer: noteField.increment(wrongAnswer),
      quizzComplete: noteField.increment(1),
      quizzSuccess: reussite ? noteField.increment(1) : noteField.increment(0),
      
    };
    
    await updateDoc(userDoc, updates);
  };

  useEffect(() => {
    let score = props.score;
    if (score !== null) {
      convertScore(score);
      setScoreUser(score)
    }
  }, [props.score]);

  useEffect(() => {
    if (idUserFirebase === null) searchIdCollection();

    if (currentUser && moyenneSur20 && idUserFirebase ) handleUpdateData(idUserFirebase);
  }, [currentUser, moyenneSur20, idUserFirebase, props.score]);

  const convertScore = (score) => {
    let moyenne = Math.round(score / 2);
    let reussite = moyenne >= 12 ? true : false;
    reussite === true ? victoire() : fail();
    return setReussite(reussite), setMoyenneSur20(moyenne);
  };

  const fail = () => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../utils/lotties/echec.json"),
    });
  };

  const victoire = () => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../utils/lotties/celebrate.json"),
    });
  };

  return (
    <>
      <div className="score-section">
        <>
          <div
            style={{ width: "60%", margin: "auto", marginBottom: "10%" }}
            ref={container}
          />
          {reussite ? (
            <Typography variant="h5" style={{ color: "white " }}>
              Félicitation vous avez votre C.Q.O !
            </Typography>
          ) : (
            <Typography gutterBottom variant="h5" color="white">
              Recommencez pour vous améliorer !
            </Typography>
          )}
        </>
        <Divider color="#fffff" sx={{ height: "1px" }} variant="middle" />
        <Typography variant="h6" style={{ color: "white " }}>
          Votre note {moyenneSur20}/20
        </Typography>

        <Divider color="#fffff" sx={{ height: "1px" }} variant="middle" />
        <Typography variant="h6" style={{ color: "white " }}>
          Nombres de réponses correctes {props.score} sur 38
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
