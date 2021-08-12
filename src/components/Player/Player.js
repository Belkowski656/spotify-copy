import { useState, useEffect, useContext } from "react";
import SongsContext from "../../Context/songsContext";
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

import img from "../../resources/images/image.jpg";

const Player = ({ index }) => {
  const [play, setPlay] = useState(false);
  const [like, setLike] = useState(false);

  const [audioDuration, setAudioDuration] = useState(`0:00`);

  const [soundValue, setSoundValue] = useState(50);

  const [audioValue, setAudioValue] = useState(0);
  const [audioMaxValue, setAudioMaxValue] = useState(0);

  const [song, setSong] = useState("");
  const [songIndex, setSongIndex] = useState(0);
  const [songImage, setSongImage] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [songAuthor, setSongAuthor] = useState("");

  const songs = useContext(SongsContext);

  const handlePlay = () => {
    setPlay((prev) => !prev);
  };

  useEffect(() => {
    console.log("useEffect");
    const audio = document.querySelector("#player");

    if (play) audio.play();
    else audio.pause();
  }, [play]);

  useEffect(() => {
    if (songIndex < 0) return setSongIndex(songs.length - 1);
    if (songIndex >= songs.length) return setSongIndex(0);

    if (songs.length) {
      setSong(
        require(`../../resources/music/${songs[songIndex].name}`).default
      );
    }
  }, [songIndex, songs]);

  useEffect(() => {
    setSongIndex(index);
  }, [index]);

  useEffect(() => {
    if (songs.length) {
      setSongImage(
        require(`../../resources/images/${songs[songIndex].image}`).default
      );
      setSongTitle(`${songs[songIndex].title}`);
      setSongAuthor(`${songs[songIndex].author}`);
    }
  }, [songIndex, songs]);

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

  const handleEnd = () => {
    setSongIndex((prev) => (prev = prev + 1));
  };

  const handleAbort = () => {
    console.log("abort");
    setAudioValue(0);

    const audio = document.querySelector("#player");

    audio.play();
    setPlay(true);
  };

  const previous = () => {
    setSongIndex((prev) => (prev = prev - 1));
  };

  const next = () => {
    setSongIndex((prev) => (prev = prev + 1));
  };

  return (
    <>
      <Wrapper>
        <Content>
          <Info>
            <Img img={songImage}></Img>
            <InfoContainer>
              <Title>{songTitle}</Title>
              <Name>{songAuthor}</Name>
            </InfoContainer>
            <Like like={like} onClick={() => setLike((prev) => !prev)}>
              <i className="far fa-heart"></i>
            </Like>
          </Info>
          <ReactAudioPlayer
            id={"player"}
            src={song}
            type="audio/mpeg"
            volume={soundValue / 100}
            onCanPlay={handleOnCanPlay}
            onListen={handleListen}
            listenInterval={1000}
            onEnded={handleEnd}
            onAbort={handleAbort}
          ></ReactAudioPlayer>
          <Panel>
            <Previous onClick={previous}>
              <i className="fas fa-step-forward"></i>
            </Previous>
            <Play onClick={handlePlay}>
              {play ? (
                <i className="fas fa-pause"></i>
              ) : (
                <i className="fas fa-play"></i>
              )}
            </Play>
            <Next onClick={next}>
              <i className="fas fa-step-forward"></i>
            </Next>
            <Progress>
              <Time>{`${Math.floor(audioValue / 60)}:${
                audioValue % 60 < 10
                  ? "0" + Math.floor(audioValue % 60)
                  : Math.floor(audioValue % 60)
              }`}</Time>
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
