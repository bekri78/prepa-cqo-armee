import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Quizz from "./components/quizz/Quizz";
import Home from "./components/home/Home";
import NoPage from "./components/nopage/NoPage";
import Email from "./components/email/Email";
import Stat from "./components/stat/Stat";
import "bootstrap/dist/css/bootstrap.min.css";
import Connexion from "./components/connexion/Connexion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quizz" element={<Quizz />} />
      <Route path="/email" element={<Email />} />
      <Route path="/stat" element={<Stat />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
