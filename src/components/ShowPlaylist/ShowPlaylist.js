import { useContext, useEffect, useState } from "react";
import SongsContext from "../../Context/songsContext";

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
  const [username, setUsername] = useState("");

  const likedSongs = useContext(SongsContext).likedSongs;
  const handlePlayPlaylist = useContext(SongsContext).handlePlayPlaylist;

  const rows = likedSongs.map((song, i) => (
    <Row
      key={i}
      rowIndex={i + 1}
      title={song.title}
      name={song.name}
      index={song.index}
      image={require(`../../resources/images/${song.image}`).default}
      id={song.id}
      handlePlay={song.handlePlay}
      author={song.author}
      duration={song.duration}
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

  return (
    <>
      <Wrapper>
        <Header>
          <Content>
            <Img img={require("../../resources/images/like.png").default} />
            <Info>
              <Title>Liked Songs</Title>
              <Author>{username}</Author>
            </Info>
          </Content>
        </Header>
        <Songs>
          <Panel>
            <Play onClick={() => handlePlayPlaylist(likedSongs)}>
              <i className="fas fa-play"></i>
            </Play>
            <Remove>Remove</Remove>
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
