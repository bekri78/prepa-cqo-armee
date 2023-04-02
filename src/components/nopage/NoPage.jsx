import React,{useEffect, useRef} from 'react'
import lottie from "lottie-web";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function NoPage() {
  const container = useRef(null);
  useEffect(() => {
   
      lottie.loadAnimation({
        container: container.current,
        render: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../utils/lotties/army-soldiers.json"),
      });
    
  }, []);
  return (
    <div style={{width:'100%', height:'100vh', backgroundColor:'black', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}}>
    
      <div style={{width:'50%'}} ref={container} />
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}}>
      <h1 style={{color:"white"}}> Chef ! Nous sommes perdues... </h1> 
      <Link style={{ textDecoration: "none" }} to={"/"}>
            <Button
              variant="contained"
              size="medium"
              color="secondary"
        
            >
              Revenir à l' accueil
            </Button>
          </Link>
      </div>
    </div>
  )
}
