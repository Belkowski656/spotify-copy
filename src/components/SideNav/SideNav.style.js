import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  background-color: black;
  width: 250px;
  height: 100vh;
  padding: 20px;
  color: white;
  transition: 0.3s;
  z-index: 2;
  transform: ${({ active }) =>
    active ? "translateX(0)" : "translateX(-100%)"};

  @media (min-width: 992px) {
    height: calc(100vh - 126px);
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  @media (min-width: 992px) {
    overflow-y: auto;
  }
`;

export const Container = styled.ul`
  margin-bottom: 30px;
  list-style: none;
`;

export const Element = styled.li`
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #b3b3b3;
  :hover {
    color: white;
  }
`;

export const Logo = styled.a`
  display: block;
  background-image: url(${({ img }) => img});
  width: 120px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto 20px;
  cursor: pointer;
`;

export const Playlists = styled.ul`
  list-style: none;
  border-top: 1px solid #b3b3b3;
  padding-top: 20px;
`;

export const Playlist = styled.li`
  font-size: 14px;
  color: #b3b3b3;
  padding: 5px;
  :hover {
    color: white;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  left: 92%;
  color: #b3b3b3;
  font-size: 60px;
  transition: 0.3s;
  transform: translateY(-50%)
    ${({ active }) => (active ? "rotate(-90deg)" : "rotate(90deg)")};
`;
