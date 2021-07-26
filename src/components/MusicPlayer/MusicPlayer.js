import { useState } from "react";

import SideNav from "../SideNav/SideNav";
import Player from "../Player/Player";

// import { Page } from "./MusicPlayer.style";

const MusicPlayer = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <SideNav active={active} setActive={setActive} />
      <Player />
    </>
  );
};

export default MusicPlayer;
