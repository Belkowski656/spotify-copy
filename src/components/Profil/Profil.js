import { useState } from "react";

import { Button, Wrapper, Menu, Element, StyledLink } from "./Profil.style";

const Profil = ({ avatar }) => {
  const [active, setActive] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
  };
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
          <Element>
            <StyledLink onClick={handleLogout} to="/login">
              Logout
            </StyledLink>
          </Element>
        </Menu>
      </Wrapper>
    </>
  );
};

export default Profil;
