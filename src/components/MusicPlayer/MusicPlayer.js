import { Outlet } from "react-router-dom";

import { useState, useEffect } from "react";

import SideNav from "../SideNav/SideNav";
import Player from "../Player/Player";
import Profil from "../Profil/Profil";

const MusicPlayer = () => {
  const [active, setActive] = useState(false);

  const [avatar, setAvatar] = useState("");

  const getToken = async () => {
    const result = await fetch("/player", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
      }),
    }).then((res) => res.json());

    setAvatar(
      require(`../../resources/images/avatars/${result.avatar}`).default
    );
  };

  useEffect(() => {
    verify();
    getToken();
  });

  const verify = () => {
    if (!sessionStorage.getItem("token")) document.location.href = "/login";
  };

  return (
    <>
      {verify()}
      <SideNav active={active} setActive={setActive} />
      <Player />
      <Profil avatar={avatar} />
      <Outlet />
    </>
  );
};

export default MusicPlayer;
