import { Wrapper, Image, Info, Title, Name, Play, Add } from "./MusicBox.style";

const MusicBox = ({ id, name, title, image, author }) => {
  return (
    <>
      <Wrapper>
        <Image img={require(`../../resources/images/${image}`).default} />
        <Info>
          <Title>{title}</Title>
          <Name>{author}</Name>
        </Info>
        <Play>
          <i className="fas fa-play"></i>
        </Play>
        <Add>
          <i className="fas fa-plus"></i>
        </Add>
      </Wrapper>
    </>
  );
};

export default MusicBox;
