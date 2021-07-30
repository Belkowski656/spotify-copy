import MusicBox from "../MusicBox/MusicBox";

import { Wrapper, Content, SearchInput, Form } from "./Search.style";

const Search = ({ xd }) => {
  return (
    <>
      <Wrapper>
        <Form>
          <SearchInput placeholder="Artist, Song" />
        </Form>
        <Content>
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
        </Content>
      </Wrapper>
    </>
  );
};

export default Search;
