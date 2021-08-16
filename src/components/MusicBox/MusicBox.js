import { Wrapper, Image, Info, Title, Name, Play, Add } from "./MusicBox.style";

const MusicBox = ({
  id,
  title,
  image,
  author,
  handlePlay,
  handleAdd,
  index,
}) => {
  return (
    <>
      <Wrapper>
        <Image img={require(`../../resources/images/${image}`).default} />
        <Info>
          <Title>{title}</Title>
          <Name>{author}</Name>
        </Info>
        <Play onClick={() => handlePlay(index)}>
          <i className="fas fa-play"></i>
        </Play>
        <Add onClick={() => handleAdd(id)}>
          <i className="fas fa-plus"></i>
        </Add>
      </Wrapper>
    </>
  );
};

export default MusicBox;
