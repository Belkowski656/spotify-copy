import { Outlet } from "react-router-dom";

import { useState } from "react";

import SideNav from "../SideNav/SideNav";
import Player from "../Player/Player";
import Profil from "../Profil/Profil";

const MusicPlayer = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <SideNav active={active} setActive={setActive} />
      <Player />
      <Profil />
      <Outlet />
    </>
  );
};

export default MusicPlayer;