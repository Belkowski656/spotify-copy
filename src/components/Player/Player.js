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
  ProgressBar,
  ProgressContainer,
  Circle,
  SoundControl,
  ProgressBarSound,
  ProgressSound,
  CircleSound,
  Icon,
  Content,
} from "./Player.style";

import music from "../../resources/music/music.mp3";
import img from "../../resources/images/image.jpg";

const Player = () => {
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
            <Like>
              <i className="far fa-heart"></i>
            </Like>
          </Info>
          <PlayerContainer id={"player"}>
            <Source src={music} type="audio/mpeg" />
          </PlayerContainer>
          <Panel>
            <Previous>
              <i class="fas fa-step-forward"></i>
            </Previous>
            <Play>
              <i className="fas fa-play"></i>
              {/* <i class="fas fa-pause"></i> */}
            </Play>
            <Next>
              <i class="fas fa-step-forward"></i>
            </Next>
            <Progress>
              <Time>0:00</Time>
              <ProgressContainer>
                <ProgressBar />
                <Circle />
              </ProgressContainer>
              <Time>3:21</Time>
            </Progress>
          </Panel>
          <SoundControl>
            <Icon>
              <i className="fas fa-volume-down"></i>
            </Icon>
            <ProgressSound>
              <ProgressBarSound />
              <CircleSound />
            </ProgressSound>
          </SoundControl>
        </Content>
      </Wrapper>
    </>
  );
};

export default Player;
