import { useState } from "react";

import { Button, Wrapper, Menu, Element, Link } from "./Profil.style";

import img from "../../resources/images/portrait.jpg";

const Profil = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Wrapper>
        <Button img={img} onClick={() => setActive((prev) => !prev)}></Button>
        <Menu active={active}>
          <Element>
            <Link href="#">Account</Link>
          </Element>
          <Element>Log out</Element>
        </Menu>
      </Wrapper>
    </>
  );
};

export default Profil;
