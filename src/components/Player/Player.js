import { useState } from "react";

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
  Panel,
  Play,
  Previous,
  Next,
  Progress,
  Time,
  ProgressContainer,
  SoundControl,
  ProgressSound,
  Icon,
  Content,
} from "./Player.style";

import music from "../../resources/music/music.mp3";
import img from "../../resources/images/image.jpg";

const Player = () => {
  const [play, setPlay] = useState(false);
  const [like, setLike] = useState(false);

  const [soundValue, setSoundValue] = useState(50);
  const [audioValue, setAudioValue] = useState(50);

  const handlePlay = () => {
    setPlay((prev) => !prev);

    const player = document.querySelector("#player");

    if (play) player.play();
    else player.pause();
  };

  const handleSoundValueChange = (e) => {
    setSoundValue(e.target.value);
  };

  const handleAudioValueChange = (e) => {
    setAudioValue(e.target.value);
  };

  return (
    <>
      <Wrapper>
        <Content>
          <Info>
            <Img img={img}></Img>
            <InfoContainer>
              <Title>Example</Title>
              <Name>Example Name</Name>
            </InfoContainer>
            <Like like={like} onClick={() => setLike((prev) => !prev)}>
              <i className="far fa-heart"></i>
            </Like>
          </Info>
          <PlayerContainer id={"player"}>
            <Source src={music} type="audio/mpeg" />
          </PlayerContainer>
          <Panel>
            <Previous>
              <i className="fas fa-step-forward"></i>
            </Previous>
            <Play onClick={handlePlay}>
              {play ? (
                <i className="fas fa-pause"></i>
              ) : (
                <i className="fas fa-play"></i>
              )}
            </Play>
            <Next>
              <i className="fas fa-step-forward"></i>
            </Next>
            <Progress>
              <Time>0:00</Time>
              <ProgressContainer
                type="range"
                onChange={handleAudioValueChange}
                min={0}
                max={100}
                value={audioValue}
                progress={audioValue}
              ></ProgressContainer>
              <Time>3:21</Time>
            </Progress>
          </Panel>
          <SoundControl>
            <Icon>
              <i className="fas fa-volume-down"></i>
            </Icon>
            <ProgressSound
              type="range"
              onChange={handleSoundValueChange}
              value={soundValue}
              progress={soundValue}
              min="0"
              max="100"
            />
          </SoundControl>
        </Content>
      </Wrapper>
    </>
  );
};

export default Player;
