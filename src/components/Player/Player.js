import {
  Wrapper,
  Info,
  Img,
  InfoContainer,
  Title,
  Name,
  Like,
  PlayerContainer,
  Source,
} from "./Player.style";

import music from "../../resources/music/music.mp3";

const Player = () => {
  const play = () => {
    document.getElementById("player").play();
  };

  return (
    <>
      <Wrapper>
        <Info>
          <Img></Img>
          <InfoContainer>
            <Title>Example</Title>
            <Name>Example Name</Name>
          </InfoContainer>
          <Like></Like>
        </Info>
        <PlayerContainer id={"player"}>
          <Source src={music} type="audio/mpeg" />
        </PlayerContainer>
        <button onClick={play}>Play</button>
        <button onClick="document.getElementById('player').pause()">
          Pause
        </button>
        <button onClick="document.getElementById('player').volume += 0.1">
          Vol +
        </button>
        <button onClick="document.getElementById('player').volume -= 0.1">
          Vol -
        </button>
      </Wrapper>
    </>
  );
};

export default Player;
