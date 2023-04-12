import React from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function LineChart(props) {
  
console.log('line', props.date)
  const labels =props.date
  const data = {
    labels: labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: "rgba(0, 0, 0, 0.40)",
        borderColor: "#6f42c1",
        pointBorderColor: "#6f42c1",
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 1.5,
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display:false
      },
      title: {
        display: true,
        align: "start",
        text: "Courbe de progression",
        padding: {
          bottom: 20,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks:{
          maxTicksLimit:labels.length /2
        }
      },
      y: {
        min: 0,
        max: 20,
        ticks: {
          stepSize: 2,
          callback: (value) => value + "/20",
        },
        grid: {
          boederDash: [10],
        },
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };
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
        backgroundColor: "#222e3c",
        marginBottom:'5%',
        '@media (max-width: 500px)': {
          width: '100%',
          height: "400px",
         
        },
      }}
    >
      <Line data={data} options={options} />
    </Box>
  );
}
