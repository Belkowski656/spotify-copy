import MusicBox from "../MusicBox/MusicBox";
import { Wrapper, Content, Title } from "../Main/Main.style";

const Main = () => {
  return (
    <>
      <Wrapper>
        <Title>Available Music</Title>
        <Content>
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
        </Content>
      </Wrapper>
    </>
  );
};

export default Main;
