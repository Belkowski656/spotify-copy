import { useState } from "react";

import { Button, Wrapper, Menu, Element, StyledLink } from "./Profil.style";

const Profil = ({ avatar }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Wrapper>
        <Button
          avatar={avatar}
          onClick={() => setActive((prev) => !prev)}
        ></Button>
        <Menu active={active}>
          <Element>
            <StyledLink to="/account">Account</StyledLink>
          </Element>
          <Element>Log out</Element>
        </Menu>
      </Wrapper>
    </>
  );
};

export default Profil;
