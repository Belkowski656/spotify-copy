import { useState } from "react";

import {
  Navigation,
  Logo,
  Hamburger,
  HamburgerWrapper,
  Menu,
  MenuElement,
  Link,
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
        <Logo href="#" img={img} />
        <HamburgerWrapper onClick={handleClick} active={active}>
          <Hamburger active={active}></Hamburger>
        </HamburgerWrapper>
        <Menu>
          <MenuElement>
            <Link>Sign Up</Link>
          </MenuElement>
          <MenuElement>
            <Link>Log In</Link>
          </MenuElement>
          <MenuElement>
            <Logo img={img} />
          </MenuElement>
        </Menu>
      </Navigation>
    </>
  );
};

export default Nav;
