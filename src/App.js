import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Quizz from "./components/quizz/Quizz";
import Home from "./components/home/Home";
import NoPage from "./components/nopage/NoPage";
import Email from "./components/email/Email";
import Connexion from "./components/connexion/Connexion";
import Stat from "./components/stat/Stat";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBare from "./components/navBar/NavBar";
import SignUpModal from "./components/signUpModal/SignUpModal";
import SignInModal from "./components/signInModal/SignInModal";
import Private from "./components/Private/Private";
import PermanentDrawerLeft from "./components/drawer/drawer";

function App() {
  return (
    <>
    <SignUpModal/>
    <SignInModal/>
    {/* <NavBare/> */}
    <Routes>
      <Route path="/" element={<><NavBare/> <Home /></>} />
      <Route path="/quizz" element={<Quizz />} />
      <Route path="/email" element={<Email />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/stat" element={<Stat />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/private" element={<Private />}>
        <Route path="/private/private-state" element={<PermanentDrawerLeft/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
