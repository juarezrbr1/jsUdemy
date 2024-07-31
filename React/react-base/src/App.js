import React from "react";
import { Router } from "react-router-dom";

import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container"/>
      </Router>
    </>
  );
}

export default App;
