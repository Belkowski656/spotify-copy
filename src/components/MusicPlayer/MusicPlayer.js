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
  const [songsFromPlaylist, setSongsFromPlaylist] = useState([]);
  const [songIndex, setSongIndex] = useState(0);
  const [play, setPlay] = useState(false);
  const [likedSongs, setLikedSongs] = useState([]);

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
  }, []);

  const verify = () => {
    if (!sessionStorage.getItem("token")) document.location.href = "/login";
  };

  const handlePlay = (index) => {
    setSongsFromPlaylist([]);
    setSongIndex(index);
    setPlay(true);
  };

  const getSongs = async () => {
    fetch("/songs")
      .then((res) => res.json())
      .then((data) => {
        const songsArr = data.map((song, index) => {
          return {
            id: song._id,
            name: song.name,
            title: song.title,
            author: song.author,
            image: song.image,
            handlePlay: handlePlay,
            index,
            duration: song.duration,
          };
        });

        setSongs(songsArr);
      });
  };

  useEffect(() => {
    fetchLikedSongs();
  }, [songs]);

  const fetchLikedSongs = async () => {
    const results = await fetch("/fetch-liked-songs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
      }),
    }).then((res) => res.json());

    const likedSongsArr = songs.filter((song) => {
      for (let i = 0; i < results.length; i++) {
        if (song.id === results[i]) return songs[i];
      }
      return null;
    });

    setLikedSongs(likedSongsArr);
  };

  const handlePlayPlaylist = (songs) => {
    setSongsFromPlaylist(songs);
  };
  console.log(songs);
  return (
    <>
      {verify()}
      <SideNav active={active} setActive={setActive} />
      <Profil avatar={avatar} />
      <SongsProvider
        value={{ songs, likedSongs, handlePlayPlaylist, songsFromPlaylist }}
      >
        <Player index={songIndex} play={play} setPlay={setPlay} />
        <Outlet />
      </SongsProvider>
    </>
  );
};

export default MusicPlayer;
