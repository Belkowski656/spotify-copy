import { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

import {
  Wrapper,
  Info,
  Img,
  InfoContainer,
  Title,
  Name,
  Like,
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

  const [audioDuration, setAudioDuration] = useState(`0:00`);

  const [soundValue, setSoundValue] = useState(50);

  const [audioValue, setAudioValue] = useState(0);
  const [audioMaxValue, setAudioMaxValue] = useState(0);

  const handlePlay = () => {
    setPlay((prev) => !prev);
  };

  useEffect(() => {
    const audio = document.querySelector("#player");

    if (play) audio.play();
    else audio.pause();
  });

  const handleOnCanPlay = () => {
    const audio = document.querySelector("#player");

    const minutes = Math.floor(audio.duration / 60);
    const seconds = Math.floor(audio.duration % 60);

    setAudioDuration(`${minutes}:${seconds}`);
    setAudioMaxValue(Math.floor(audio.duration));
  };

  const handleListen = () => {
    const audio = document.querySelector("#player");

    const currentTime = Math.floor(audio.currentTime);

    setAudioValue(currentTime);
  };

  const handleSoundValueChange = (e) => {
    setSoundValue(e.target.value);
  };

  const handleAudioValueChange = (e) => {
    const audio = document.querySelector("#player");

    audio.currentTime = e.target.value;
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
          <ReactAudioPlayer
            id={"player"}
            src={music}
            type="audio/mpeg"
            volume={soundValue / 100}
            onCanPlay={handleOnCanPlay}
            onListen={handleListen}
            listenInterval={1000}
          ></ReactAudioPlayer>
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
                max={audioMaxValue}
                value={audioValue}
                progress={(audioValue / audioMaxValue) * 100}
              ></ProgressContainer>
              <Time>{audioDuration}</Time>
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
