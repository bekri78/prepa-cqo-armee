import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter  as Router } from "react-router-dom"
//  import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { UserContextProvider } from "./components/context/userContext";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <UserContextProvider>
    <App />
    </UserContextProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
