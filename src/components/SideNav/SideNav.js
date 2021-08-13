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
  StyledLink,
} from "./SideNav.style";

const SideNav = ({ active, setActive }) => {
  return (
    <>
      <Wrapper active={active}>
        <Content>
          <Logo img={img} />
          <Container>
            <Element>
              <StyledLink to="/player">Home</StyledLink>
            </Element>
            <Element>
              <StyledLink to="search">Search</StyledLink>
            </Element>
            <Element>
              <StyledLink to="library">Library</StyledLink>
            </Element>
          </Container>
          <Container>
            <Element>Create Playlist</Element>
            <Element>
              <StyledLink to="playlist">Liked Songs</StyledLink>
            </Element>
          </Container>
          <Playlists>
            <Playlist>
              <StyledLink to="playlist">My Playlist</StyledLink>
            </Playlist>
            <Playlist>
              <StyledLink to="playlist">My Playlist</StyledLink>
            </Playlist>
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
