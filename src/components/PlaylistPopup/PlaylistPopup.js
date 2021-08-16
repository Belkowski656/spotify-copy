import {
  Wrapper,
  Option,
  Content,
  Box,
  Close,
  Text,
} from "./PlaylistPopup.style";

const Popup = ({ setPlaylistPopup, playlists, addSongId, getPlaylists }) => {
  const handleAdd = async (id) => {
    const result = await fetch("/add-song-to-playlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
        id: addSongId,
        playlistId: id,
      }),
    }).then((res) => res.json());

    if (result.status === "ok") getPlaylists();
  };

  return (
    <>
      <Wrapper>
        <Box>
          <Text>Choose Playlist</Text>
          <Content>
            {playlists.map((playlist, i) => (
              <Option
                key={i}
                onClick={() => {
                  handleAdd(playlist._id);
                  setPlaylistPopup(false);
                }}
              >
                {playlist.playlistName}
              </Option>
            ))}
            <Close onClick={() => setPlaylistPopup(false)}>Cancel</Close>
          </Content>
        </Box>
      </Wrapper>
    </>
  );
};

export default Popup;
