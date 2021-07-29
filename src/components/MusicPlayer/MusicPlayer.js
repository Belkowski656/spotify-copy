import { useState } from "react";

import SideNav from "../SideNav/SideNav";
import Player from "../Player/Player";
import Profil from "../Profil/Profil";
import Search from "../Search/Search";
// import Main from "../Main/Main";

const MusicPlayer = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <SideNav active={active} setActive={setActive} />
      <Player />
      <Profil />
      <Search />
    </>
  );
};

export default MusicPlayer;
