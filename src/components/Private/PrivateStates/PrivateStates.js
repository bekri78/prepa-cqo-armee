import React, { useEffect, useState, useContext, useRef } from "react";
import BarChart from "../../barChart/BarChart";
import LineChart from "../../barChart/LineChart";
import BasicCard from "../../card/Card";
import { UserContext } from "../../context/userContext";
import "firebase/compat/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import AOS from "aos";
import lottie from "lottie-web";
import "aos/dist/aos.css";
import "./PrivateStates.css";

export default function PrivateStates() {
  const {idUserFirebase } = useContext(UserContext);
  const [data, setData] = useState();
  const id = idUserFirebase;
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../utils/lotties/data-analysis.json"),
    });
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    console.log(idUserFirebase);
    if (idUserFirebase) {
      getDataUserFirestore();
    }
  }, [idUserFirebase]);

  const getDataUserFirestore = async () => {
    const userDoc = doc(db, "users", id);
    const userData = (await getDoc(userDoc)).data();
    const existingNotes = userData;
    console.log("recuprdata", existingNotes);
    setData(existingNotes);
  };

  return (
    <>
      {data && data.initialUser === false ? (
        <Container fluid style={{ height: "auto", width: "100%" }}>
          <Row style={{ marginBottom: "2%" }}>
            <Col
              className="d-flex justify-content-center"
              xs={12}
              sm={12}
              md={12}
              lg={6}
            >
              <Row className="d-flex justify-content-center align-items-center ">
                <Col
                  className="d-flex justify-content-center"
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                >
                  <BasicCard
                    quizzValue={data.quizzComplete}
                    quizzTxt={"Quizz effectué"}
                  />
                </Col>
                <Col
                  className="d-flex justify-content-center"
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                >
                  <BasicCard
                    quizzValue={data.quizzSuccess}
                    quizzTxt={"Quizz reussi"}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              className="d-flex justify-content-center"
              xs={12}
              sm={12}
              md={12}
              lg={6}
            >
              {data.date && (
                <BarChart
                  correctAnswer={data.correctAnswer}
                  wrongAnswer={data.wrongAnswer}
                />
              )}
            </Col>
            <Col
              className="d-flex justify-content-center "
              xs={12}
              sm={12}
              md={12}
              lg={6}
            >
              {data.note && data.date && (
                <LineChart data={data.note} date={data.date} />
              )}
            </Col>
          </Row>
        </Container>
      ):(
        <div style={{ display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
        <div style={{width:'60%', margin:'auto'}} ref={container} />
        <h5>Commencez un quizz pour afficher vos premieres statistiques !</h5>
        
        </div>
      )}
    </>
  );
}
