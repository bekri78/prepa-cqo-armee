import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

 

export default function BasicCard(props) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        opacity: 1,
        boxShadow: 6,
        cursor: "pointer",
        backgroundColor: "#222e3c",
      }}
    >
      <CardContent style={{ display:'flex', width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",}}>
        <Typography sx={{ fontSize: 14 , color:'white'}} color="text.secondary" gutterBottom>
        {props.quizzTxt}:
        </Typography>  
      <CardActions>
       <Typography sx={{ fontSize: 18 , color:'white'}} color="text.secondary" gutterBottom>
       {props.quizzValue}
        </Typography> 
      </CardActions>
      </CardContent>
    </Card>
  );
}
