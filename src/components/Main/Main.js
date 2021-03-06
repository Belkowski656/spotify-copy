import { useContext } from "react";
import SongsContext from "../../Context/songsContext";
import MusicBox from "../MusicBox/MusicBox";
import { Wrapper, Content, Title } from "../Main/Main.style";

const Main = () => {
  const songs = useContext(SongsContext).songs;

  const MusicBoxs = songs.map((song) => {
    return (
      <MusicBox
        key={song.id}
        id={song.id}
        name={song.name}
        title={song.title}
        image={song.image}
        author={song.author}
        handlePlay={song.handlePlay}
        index={song.index}
        handleAdd={song.handleAdd}
      />
    );
  });
  return (
    <>
      <Wrapper>
        <Title>Available Music</Title>
        <Content>{MusicBoxs}</Content>
      </Wrapper>
    </>
  );
};

export default Main;
