import { useContext, useState } from "react";
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
} from "./Liked.style";

import img from "../../resources/images/image.jpg";

const Liked = () => {
  const [author, setAuthor] = useState("");

  const likedSongs = useContext(SongsContext).likedSongs;

  const rows = likedSongs.map((song, index) => (
    <Row
      key={index}
      rowIndex={index + 1}
      id={song.id}
      author={song.author}
      handlePlay={song.handlePlay}
      image={require(`../../resources/images/${song.image}`).default}
      title={song.title}
      name={song.name}
      index={song.index}
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
            <Play>
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

export default Liked;
