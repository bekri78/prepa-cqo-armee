import { Route, Routes } from "react-router-dom";
import './App.css';
import Quizz from "./components/quizz/Quizz"
import Home from "./components/home/Home";
import NoPage from "./components/nopage/NoPage";

function App() {
  return (
    
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/quizz" element={<Quizz/>} />
          <Route path="*" element={<NoPage />} />
          
    </Routes> 
    // <div className="App">
    // </div>
  );
}

export default App;
