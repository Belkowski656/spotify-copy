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

const SideNav = ({ active, setActive, setPopup }) => {
  return (
    <>
      <Wrapper active={active}>
        <Content>
          <Logo img={img} />
          <Container>
            <Element>
              <StyledLink to="/player" onClick={() => setActive(false)}>
                Home
              </StyledLink>
            </Element>
            <Element>
              <StyledLink to="search" onClick={() => setActive(false)}>
                Search
              </StyledLink>
            </Element>
            <Element>
              <StyledLink to="library" onClick={() => setActive(false)}>
                Library
              </StyledLink>
            </Element>
          </Container>
          <Container>
            <Element
              onClick={() => {
                setPopup(true);
                setActive(false);
              }}
            >
              Create Playlist
            </Element>
            <Element>
              <StyledLink to="playlist" onClick={() => setActive(false)}>
                Liked Songs
              </StyledLink>
            </Element>
          </Container>
          <Playlists>
            <Playlist>
              <StyledLink to="playlist" onClick={() => setActive(false)}>
                My Playlist
              </StyledLink>
            </Playlist>
            <Playlist>
              <StyledLink to="playlist" onClick={() => setActive(false)}>
                My Playlist
              </StyledLink>
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
