import img from "../../resources/images/SpotifyWhite.png";

import {
  Wrapper,
  Logo,
  Container,
  Content,
  Element,
  Playlists,
  Playlist,
  Arrow,
} from "./SideNav.style";

const SideNav = ({ active, setActive }) => {
  return (
    <>
      <Wrapper active={active}>
        <Content>
          <Logo img={img} />
          <Container>
            <Element>Home</Element>
            <Element>Search</Element>
            <Element>Your Library</Element>
          </Container>
          <Container>
            <Element>Create Playlist</Element>
            <Element>Liked Songs</Element>
          </Container>
          <Playlists>
            <Playlist>My Playlist #1</Playlist>
            <Playlist>My Playlist #2</Playlist>
          </Playlists>
        </Content>
        <Arrow active={active} onClick={() => setActive((prev) => !prev)}>
          <i className="fas fa-sort-up"></i>
        </Arrow>
      </Wrapper>
    </>
  );
};

export default SideNav;
