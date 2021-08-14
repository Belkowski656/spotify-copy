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

const SideNav = ({ active, setActive, setPopup, playlists }) => {
  const playlistsArr = playlists.map((playlist, i) => (
    <Playlist key={i}>
      <StyledLink
        to={`playlist/${playlist._id}`}
        onClick={() => setActive(false)}
      >
        {playlist.playlistName}
      </StyledLink>
    </Playlist>
  ));

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
              <StyledLink to="playlist/liked" onClick={() => setActive(false)}>
                Liked Songs
              </StyledLink>
            </Element>
          </Container>
          <Playlists>{playlistsArr}</Playlists>
        </Content>
        <Arrow active={active} onClick={() => setActive((prev) => !prev)}>
          <i className="fas fa-sort-up"></i>
        </Arrow>
      </Wrapper>
    </>
  );
};

export default SideNav;
