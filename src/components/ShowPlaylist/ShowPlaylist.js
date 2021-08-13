import { useContext } from "react";
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
    />
  ));

  return (
    <>
      <Wrapper>
        <Header>
          <Content>
            <Img img={require("../../resources/images/like.png").default} />
            <Info>
              <Title>Liked Songs</Title>
              <Author>Example Name</Author>
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
