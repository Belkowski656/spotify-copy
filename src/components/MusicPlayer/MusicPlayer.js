import { useState } from "react";

import SideNav from "../SideNav/SideNav";
import Player from "../Player/Player";
import Profil from "../Profil/Profil";
import Home from "../Home/Home";

const MusicPlayer = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <SideNav active={active} setActive={setActive} />
      <Player />
      <Profil />
      <Home />
    </>
  );
};

export default MusicPlayer;
