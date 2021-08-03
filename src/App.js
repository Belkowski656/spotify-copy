import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import Home from "./components/Home/Home";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Account from "./components/Account/Account";

import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import ShowPlaylist from "./components/ShowPlaylist/ShowPlaylist";
import Library from "./components/Library/Library";

import { GlobalStyle } from "./GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="player" element={<MusicPlayer />}>
          <Route path="/" element={<Main />} />
          <Route path="search" element={<Search />} />
          <Route path="library" element={<Library />} />
          <Route path="playlist" element={<ShowPlaylist />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;
