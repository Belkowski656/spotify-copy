import { useContext, useState, useEffect } from "react";
import SongsContext from "../../Context/songsContext";

import MusicBox from "../MusicBox/MusicBox";

import { Wrapper, Content, SearchInput, Form } from "./Search.style";

const Search = () => {
  const [search, setSearch] = useState("");
  const [songsToShow, setSongsToShow] = useState([]);
  const songs = useContext(SongsContext);

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const songsArr = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(search) ||
        song.author.toLowerCase().includes(search)
    );

    setSongsToShow(songsArr);
  }, [search, songs]);

  const musicBoxs = songsToShow.map((song) => {
    return (
      <MusicBox
        key={song.id}
        id={song.id}
        name={song.name}
        title={song.title}
        image={song.image}
        author={song.author}
        handlePlay={song.handlePlay}
        index={song.index}
      />
    );
  });

  return (
    <>
      <Wrapper>
        <Form>
          <SearchInput
            placeholder="Artist, Song"
            value={search}
            onChange={handleChange}
          />
        </Form>
        <Content>{musicBoxs}</Content>
      </Wrapper>
    </>
  );
};

export default Search;
