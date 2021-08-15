import { useContext, useEffect, useState } from "react";
import SongsContext from "../../Context/songsContext";
import { useParams } from "react-router";

import Row from "../Row/Row";

import {
  Wrapper,
  Header,
  Content,
  Img,
  Info,
  Title,
  Author,
  Songs,
  Panel,
  Play,
  Remove,
  Table,
  FirstRow,
  TableHeader,
} from "./ShowPlaylist.style";

const ShowPlaylist = () => {
  let { playlistId } = useParams();

  const [username, setUsername] = useState("");
  const [songs, setSongs] = useState([]);
  const [name, setName] = useState("");

  const likedSongs = useContext(SongsContext).likedSongs;
  const playlists = useContext(SongsContext).playlists;
  const allSongs = useContext(SongsContext).allSongs;
  const handlePlayPlaylist = useContext(SongsContext).handlePlayPlaylist;

  const rows = songs.map((song, i) => (
    <Row
      key={i}
      rowIndex={i}
      title={song.title}
      name={song.name}
      image={require(`../../resources/images/${song.image}`).default}
      id={song.id}
      handlePlay={handlePlayPlaylist}
      author={song.author}
      duration={song.duration}
      songs={songs}
    />
  ));

  const getUsername = async () => {
    const result = await fetch("/get-username", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
      }),
    }).then((res) => res.json());

    setUsername(result);
  };

  useEffect(getUsername);
  useEffect(() => {
    if (playlistId === "liked") setSongs(likedSongs);
    else {
      if (playlists.length) {
        const playlist = playlists.filter(
          (playlist) => playlist._id === playlistId
        );

        setName(playlist[0].playlistName);

        const playlistSongs = playlist[0].songs;

        if (playlistSongs !== undefined) {
          const songsArr = allSongs.filter((song) => {
            for (let i = 0; i < playlistSongs.length; i++) {
              if (song.id === playlistSongs[i]) return allSongs[i];
            }
            return null;
          });
          setSongs(songsArr);
        } else {
          console.log("empty");
        }

        // console.log(songsArr);
        // console.log(songsArr);
        // setPlaylist(playlist);
      }
    }
  }, [likedSongs, playlistId, playlists, allSongs]);

  return (
    <>
      <Wrapper>
        <Header>
          <Content>
            <Img
              img={
                playlistId === "liked"
                  ? require("../../resources/images/like.png").default
                  : require("../../resources/images/playlist.png").default
              }
            />
            <Info>
              <Title>{playlistId === "liked" ? "Liked Songs" : name}</Title>
              <Author>{username}</Author>
            </Info>
          </Content>
        </Header>
        <Songs>
          <Panel>
            <Play onClick={() => handlePlayPlaylist(songs, 0)}>
              <i className="fas fa-play"></i>
            </Play>
            {playlistId === "liked" ? null : <Remove>Remove</Remove>}
          </Panel>
          <Table cellSpacing="0">
            <tbody>
              <FirstRow>
                <TableHeader>#</TableHeader>
                <TableHeader>Title</TableHeader>
                <TableHeader>Author</TableHeader>
                <TableHeader>
                  <i className="far fa-clock"></i>
                </TableHeader>
              </FirstRow>
              {rows}
            </tbody>
          </Table>
        </Songs>
      </Wrapper>
    </>
  );
};

export default ShowPlaylist;
