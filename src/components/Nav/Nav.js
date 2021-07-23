import { useState } from "react";

import {
  Navigation,
  Logo,
  LogoSecond,
  Hamburger,
  HamburgerWrapper,
  Menu,
  MenuElement,
  Link,
  Wrapper,
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
          <Logo href="#" img={img} />
          <HamburgerWrapper onClick={handleClick} active={active}>
            <Hamburger active={active}></Hamburger>
          </HamburgerWrapper>
          <Menu active={active}>
            <MenuElement>
              <Link>Sign Up</Link>
            </MenuElement>
            <MenuElement>
              <Link>Log In</Link>
            </MenuElement>
            <MenuElement>
              <LogoSecond img={img} />
            </MenuElement>
          </Menu>
        </Wrapper>
      </Navigation>
    </>
  );
};

export default Nav;
