import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 20px;
  background-color: black;
  color: white;
`;
export const Logo = styled.a`
  display: block;
  background-image: url(${({ img }) => img});
  width: 120px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;
export const HamburgerWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;

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
  display: none;
`;
export const MenuElement = styled.li``;
export const Link = styled.a``;
