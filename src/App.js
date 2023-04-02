import { Route, Routes } from "react-router-dom";
import './App.css';
import Quizz from "./components/quizz/Quizz"
import Home from "./components/home/Home";
import NoPage from "./components/nopage/NoPage";
import Email from './components/email/Email'
import  'bootstrap/dist/css/bootstrap.min.css' ;

function App() {
  return (
    
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/quizz" element={<Quizz/>} />
          <Route path="/email" element={<Email/>} />
          <Route path="*" element={<NoPage />} />
          
    </Routes> 
  
  );
}

export default App;
