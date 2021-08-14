import { useState } from "react";

import {
  Wrapper,
  Name,
  Button,
  Content,
  Box,
  Close,
  Error,
} from "./Popup.style";

const Popup = ({ setPopup }) => {
  const [playlistName, setPlaylistName] = useState("");
  const [errors, setErrors] = useState("");

  const createPlaylist = async () => {
    if (!playlistName) return setErrors("Please enter name");
    else setErrors("");

    if (playlistName.length < 3) return setErrors("Playlist name is too short");
    else setErrors("");

    const result = await fetch("/create-playlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
        playlistName,
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      setPlaylistName("");
      setPopup(false);
    }
  };

  return (
    <>
      <Wrapper>
        <Box>
          <Content>
            <Name
              type="text"
              placeholder="Playlist Name"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
            />
            {errors.length ? <Error>{errors}</Error> : null}
            <Button to="playlist" onClick={createPlaylist}>
              Create
            </Button>
            <Close onClick={() => setPopup(false)}>Close</Close>
          </Content>
        </Box>
      </Wrapper>
    </>
  );
};

export default Popup;
