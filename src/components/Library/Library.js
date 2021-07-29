import {
  Wrapper,
  PageTitle,
  Content,
  LikedSongs,
  Box,
  Title,
  Number,
} from "./Library.style.js";

import Playlist from "../Playlist/Playlist";

const Library = () => {
  return (
    <>
      <Wrapper>
        <PageTitle>Playlists</PageTitle>
        <Content>
          <LikedSongs>
            <Box>
              <Title>Liked Songs</Title>
              <Number>10 liked songs</Number>
            </Box>
          </LikedSongs>
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </Content>
      </Wrapper>
    </>
  );
};

export default Library;
