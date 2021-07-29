import { Wrapper, Img, Info, Title, Author } from "./Playlist.style";

import img from "../../resources/images/image.jpg";

const Playlist = () => {
  return (
    <>
      <Wrapper>
        <Img img={img} />
        <Info>
          <Title>My Playlist #1</Title>
          <Author>By Example Name</Author>
        </Info>
      </Wrapper>
    </>
  );
};

export default Playlist;
