import styled from "styled-components";
import { BrowserRouter as Route, Link } from "react-router-dom";

export const Navigation = styled.nav`
  background-color: black;
  color: white;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 992px) {
    padding: 20px;
  }
`;

export const Logo = styled.a`
  display: block;
  background-image: url(${({ img }) => img});
  width: 120px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (min-width: 992px) {
    height: 40px;
  }
`;

export const HamburgerWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;

  ::after,
  ::before {
    position: absolute;
    left: 50%;
    width: 100%;
    height: 4px;
    background-color: #fff;
    content: "";
    transition: 0.3s;
  }

  ::after {
    top: 50%;
    transform: translate(-50%, -10px);
    ${({ active }) =>
      active ? "transform: translate(-50%, 0) rotate(45deg);" : null};
  }
  ::before {
    top: 50%;
    transform: translate(-50%, 6px);
    ${({ active }) =>
      active ? "transform: translate(-50%, 0) rotate(-45deg);" : null}
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 4px;
  background-color: #fff;
  transition: 0.3s;

  ${({ active }) => (active ? "  transform: translate(-200%, -50%);" : null)};
`;

export const Menu = styled.ul`
  position: fixed;
  top: 0;
  left: 100%;
  list-style: none;
  transform: translateX(0);
  width: 100vw;
  background-color: black;
  height: 100vh;
  padding: 100px 30px;
  transition: 0.3s ease;
  z-index: 1;

  ${({ active }) => (active ? "transform: translateX(-100%)" : null)};

  @media (min-width: 576px) {
    max-width: 400px;
  }

  @media (min-width: 992px) {
    position: static;
    ${({ active }) => (active ? "transform: translateX(0)" : null)};
    width: auto;
    height: auto;
    padding: 0;
    display: flex;
  }
`;
export const MenuElement = styled.li``;

export const LogoSecond = styled.a`
  position: absolute;
  left: 30px;
  bottom: 30px;
  background-image: url(${({ img }) => img});
  width: 120px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 30px 0;
  font-size: 34px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: white;

  @media (min-width: 992px) {
    font-size: 20px;
    padding: 0 15px;
    :hover {
      color: #1ed760;
      transition: 0.2s;
    }
  }
`;
