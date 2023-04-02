import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="landingpage">
      
      <div className="container-home">
        <h1 
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          className="title-home"
        >
          Préparation C.Q.O<br></br>Promotion OSC 2023A
        </h1>
        <div data-aos="fade-up"data-aos-duration="1500" className="home-btn">
          <Link style={{ textDecoration: "none" }} to={"./quizz"}>
            <Button
              className="btn-home-mui"
              variant="contained"
              color="secondary"
              // sx={{ width: 200, padding: 0.5, margin: 0.5,border :"1px solid white !important",borderRadius:"0 !important" }}
              size="large"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Commencer
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
