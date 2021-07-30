import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const Router = require("react-router-dom").BrowserRouter;

// const Routes = require("react-router-dom").Routes;

// const Route = require("react-router-dom").Route;

// import SignUp from "./components/SignUp/SignUp";
// import LogIn from "./components/LogIn/LogIn";
import Home from "./components/Home/Home";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
// import Account from "./components/Account/Account";
import { GlobalStyle } from "./GlobalStyles";

const App = () => (
  <Router>
    <GlobalStyle></GlobalStyle>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="player" element={<MusicPlayer />} />
    </Routes>
  </Router>
);

export default App;
