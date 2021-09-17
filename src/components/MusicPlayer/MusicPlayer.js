import React, { useCallback } from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { SongsProvider } from "../../Context/songsContext";

import SideNav from "../SideNav/SideNav";
import Player from "../Player/Player";
import Profil from "../Profil/Profil";
import Popup from "../Popup/Popup";
import PlaylistPopup from "../PlaylistPopup/PlaylistPopup";

const MusicPlayer = () => {
  const [active, setActive] = useState(false);
  const [popup, setPopup] = useState(false);
  const [playlistPopup, setPlaylistPopup] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [songs, setSongs] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [songsFromPlaylist, setSongsFromPlaylist] = useState([]);
  const [songIndex, setSongIndex] = useState(0);
  const [play, setPlay] = useState(false);
  const [likedSongs, setLikedSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [addSongId, setAddSongId] = useState("");

  const getToken = useCallback(async () => {
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
      require(`../src/resources/images/avatars/${result.avatar}`).default
    );
  }, []);

  const verify = () => {
    if (!sessionStorage.getItem("token")) document.location.href = "/login";
  };

  const handlePlay = (index) => {
    setSongsFromPlaylist([]);
    setSongIndex(index);
    setPlay(true);
  };

  const fetchLikedSongs = useCallback(async () => {
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
  }, [songs]);

  useEffect(() => fetchLikedSongs(), [songs, fetchLikedSongs]);

  const handlePlayPlaylist = (songs, index) => {
    setSongsFromPlaylist(songs);
    setSongIndex(index);
  };

  const getPlaylists = useCallback(async () => {
    const result = await fetch("/get-playlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
      }),
    }).then((res) => res.json());

    setPlaylists(result);
  }, []);

  const handleAdd = useCallback(
    async (id) => {
      if (playlists.length === 1) {
        const result = await fetch("/add-song-to-playlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: sessionStorage.getItem("token"),
            id,
          }),
        }).then((res) => res.json());

        if (result.status === "ok") {
          getPlaylists();
        }
      } else {
        getPlaylists();
        setAddSongId(id);
        setPlaylistPopup(true);
      }
    },
    [playlists, getPlaylists]
  );

  const getSongs = useCallback(async () => {
    fetch("/songs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
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
            handleAdd: handleAdd,
            index,
            duration: song.duration,
          };
        });

        setSongs(songsArr);
        setAllSongs(songsArr);
      });
  }, [handleAdd]);

  const removePlaylist = async (id) => {
    const result = await fetch("/delete-playlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
        id,
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      document.location.href = "/player";
    }
  };

  const handleDelete = async (id, playlistId) => {
    const result = await fetch("/delete-song-from-playlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        songId: id,
        playlistId,
      }),
    }).then((res) => res.json());

    if (result.status === "ok") getPlaylists();
  };

  useEffect(() => {
    verify();
  });

  useEffect(() => {
    getToken();
  }, [getToken]);

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  useEffect(() => {
    getPlaylists();
  }, [getPlaylists]);

  return (
    <>
      {verify()}
      {popup && <Popup setPopup={setPopup} getPlaylists={getPlaylists} />}
      {playlistPopup && (
        <PlaylistPopup
          setPlaylistPopup={setPlaylistPopup}
          playlists={playlists}
          addSongId={addSongId}
          getPlaylists={getPlaylists}
        />
      )}
      <SideNav
        active={active}
        setActive={setActive}
        setPopup={setPopup}
        playlists={playlists}
      />
      <Profil avatar={avatar} />
      <SongsProvider
        value={{
          songs,
          likedSongs,
          handlePlayPlaylist,
          songsFromPlaylist,
          playlists,
          allSongs,
          removePlaylist,
          handleDelete,
        }}
      >
        <Player
          index={songIndex}
          play={play}
          setPlay={setPlay}
          fetchLikedSongs={fetchLikedSongs}
        />
        <Outlet />
      </SongsProvider>
    </>
  );
};

export default MusicPlayer;
