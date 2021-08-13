import { useContext } from "react";
import SongsContext from "../../Context/songsContext";

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
  const likedSongs = useContext(SongsContext).likedSongs;
  return (
    <>
      <Wrapper>
        <PageTitle>Playlists</PageTitle>
        <Content>
          <LikedSongs to="/player/liked">
            <Box>
              <Title>Liked Songs</Title>
              <Number>{likedSongs.length} liked songs</Number>
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
          <Playlist />
          <Playlist />
        </Content>
      </Wrapper>
    </>
  );
};

export default Library;
