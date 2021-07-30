import { useState } from "react";

import {
  Navigation,
  Logo,
  LogoSecond,
  Hamburger,
  HamburgerWrapper,
  Menu,
  MenuElement,
  Wrapper,
  StyledLink,
} from "./Nav.style";

import img from "../../resources/images/SpotifyWhite.png";

const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <>
      <Navigation>
        <Wrapper>
          <Logo to="/" img={img} />
          <HamburgerWrapper onClick={handleClick} active={active}>
            <Hamburger active={active}></Hamburger>
          </HamburgerWrapper>
          <Menu active={active}>
            <MenuElement>
              <StyledLink to="signup">Sign Up</StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink to="login">Log In</StyledLink>
            </MenuElement>
            <MenuElement>
              <LogoSecond to="/" img={img} />
            </MenuElement>
          </Menu>
        </Wrapper>
      </Navigation>
    </>
  );
};

export default Nav;
