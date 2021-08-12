import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { SongsProvider } from "../../Context/songsContext";

import SideNav from "../SideNav/SideNav";
import Player from "../Player/Player";
import Profil from "../Profil/Profil";

const MusicPlayer = () => {
  const [active, setActive] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [songs, setSongs] = useState([]);

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
    getSongs();
  });

  const verify = () => {
    if (!sessionStorage.getItem("token")) document.location.href = "/login";
  };

  const getSongs = async () => {
    fetch("/songs")
      .then((res) => res.json())
      .then((data) => {
        const songsArr = data.map((song) => {
          return {
            id: song._id,
            name: song.name,
            title: song.title,
            author: song.author,
            image: song.image,
          };
        });

        setSongs(songsArr);
      });
  };

  return (
    <>
      {verify()}
      <SongsProvider value={songs}>
        <SideNav active={active} setActive={setActive} />
        <Player />
        <Profil avatar={avatar} />
        <Outlet />
      </SongsProvider>
    </>
  );
};

export default MusicPlayer;
