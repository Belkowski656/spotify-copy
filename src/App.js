import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import Home from "./components/Home/Home";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Account from "./components/Account/Account";
import { GlobalStyle } from "./GlobalStyles";

const App = () => (
  <Router>
    <GlobalStyle></GlobalStyle>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="player" element={<MusicPlayer />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="account" element={<Account />} />
    </Routes>
  </Router>
);

export default App;
