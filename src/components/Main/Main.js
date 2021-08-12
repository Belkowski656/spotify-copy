import { useContext } from "react";
import SongsContext from "../../Context/songsContext";
import MusicBox from "../MusicBox/MusicBox";
import { Wrapper, Content, Title } from "../Main/Main.style";

const Main = () => {
  const songs = useContext(SongsContext);

  const MusicBoxs = songs.map((song) => {
    return (
      <MusicBox
        key={song.id}
        id={song.id}
        name={song.name}
        title={song.title}
        image={song.image}
        author={song.author}
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
