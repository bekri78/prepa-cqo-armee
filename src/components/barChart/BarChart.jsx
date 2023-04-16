import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Box } from "@mui/material";

export default function BarChart(props) {
  const data = {
    labels: ["Bonnes reponses", "Mauvaises reponses"],
    datasets: [
      {
        label: "Nombres",
        data: [props.correctAnswer, props.wrongAnswer],
        backgroundColor: ["#32de84", "#D2122E"],
        borderColor: "#222e3c",
        borderWith: 0,
        borderRadius: 3,
      },
    ],
  };

  const options={
    responsive: true,
          maintainAspectRatio: true,
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        opacity: 1,
        boxShadow: 6,
        cursor: "pointer",
        marginBottom:'5%',
        backgroundColor: "#222e3c",
        '@media (max-width: 500px)': {
          width: '100%',
          height: "240px",
        },
        
      }}
    >
      <div style={{ width:"80%", height:"80%",  display: "flex",
        justifyContent: "center",
        alignItems: "center",}}>

      <Doughnut
        options={options }
        data={data}
       
        />
        </div>
    </Box>
  );
}
