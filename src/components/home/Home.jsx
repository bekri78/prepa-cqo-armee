import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Button from "@mui/material/Button";
import BgVideo from '../../utils/video/AVIATEUR2.mp4'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Home() {
  return (
    <>
      <div className="landingpage">
        <video src={BgVideo} autoPlay muted loop className="video-bg" />
      <div className="bg-overlay"></div>
      <div className="home-btn">
         <Link style ={{textDecoration: 'none'}} to={"./quizz"}>
         <Button className="btn-home-mui" variant="outlined"sx={{ width: 300, padding: 2, margin: 2 }}size="large" endIcon={<KeyboardArrowRightIcon />}>
         Commencer
        </Button>
          </Link>
        </div>
      <div className="home-text">
        <p className="textpromo">Preparation CQO 2023 promotion OSC23 A</p>
      </div>
      </div>

      
    </>
  );
}
