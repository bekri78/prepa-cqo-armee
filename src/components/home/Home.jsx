import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Button from "@mui/material/Button";
import BgVideo from "../../utils/video/arme-air.mp4";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Home() {
  return (
    <>
      <div className="landingpage">
        <video src={BgVideo} autoPlay muted loop className="video-bg" />
        <div className="bg-overlay"></div>
        <div className="container-home">
          <h1 className="title-home">Preparation C.Q.O<br></br>Promotion OSC 2023A</h1>
          <div className="home-btn">
            
            <Link style={{ textDecoration: "none" }} to={"./quizz"}>
              <Button
                className="btn-home-mui"
                variant="contained"
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
    </>
  );
}
