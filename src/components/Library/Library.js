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
  const playlists = useContext(SongsContext).playlists;

  const playlistsArr = playlists.map((playlist, i) => (
    <Playlist
      key={i}
      playlistName={playlist.playlistName}
      id={playlist._id}
      username={playlist.ownerUsername}
      image={require(`../../resources/images/${playlist.image}`).default}
    />
  ));
  return (
    <>
      <Wrapper>
        <PageTitle>Playlists</PageTitle>
        <Content>
          <LikedSongs to="/player/playlist/liked">
            <Box>
              <Title>Liked Songs</Title>
              <Number>{likedSongs.length} liked songs</Number>
            </Box>
          </LikedSongs>
          {playlistsArr}
        </Content>
      </Wrapper>
    </>
  );
};

export default Library;
