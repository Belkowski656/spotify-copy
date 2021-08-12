import { useContext } from "react";
import SongsContext from "../../Context/songsContext";

import MusicBox from "../MusicBox/MusicBox";

import { Wrapper, Content, SearchInput, Form } from "./Search.style";

const Search = () => {
  const songs = useContext(SongsContext);

  const MusicBoxs = songs.map((song) => {
    return (
      <MusicBox
        key={song.id}
        id={song.id}
        name={song.name}
        title={song.title}
        image={song.image}
        author={song.author}
      />
    );
  });
  return (
    <>
      <Wrapper>
        <Form>
          <SearchInput placeholder="Artist, Song" />
        </Form>
        <Content>{MusicBoxs}</Content>
      </Wrapper>
    </>
  );
};

export default Search;
