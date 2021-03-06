import { Wrapper, Img, Info, Title, Author } from "./Playlist.style";

const Playlist = ({ id, playlistName, username, image }) => {
  return (
    <>
      <Wrapper to={`/player/playlist/${id}`}>
        <Img img={image} />
        <Info>
          <Title>{playlistName}</Title>
          <Author>{username}</Author>
        </Info>
      </Wrapper>
    </>
  );
};

export default Playlist;
