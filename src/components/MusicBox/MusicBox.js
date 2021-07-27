import { Wrapper, Image, Info, Title, Name, Play, Add } from "./MusicBox.style";

import img from "../../resources/images/image.jpg";

const MusicBox = () => {
  return (
    <>
      <Wrapper>
        <Image img={img} />
        <Info>
          <Title>Example</Title>
          <Name>Example Name</Name>
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
