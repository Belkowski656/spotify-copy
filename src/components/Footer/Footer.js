import { Wrapper, Content, Logo, Text } from "./Footer.style";

import img from "../../resources/images/SpotifyWhite.png";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Logo img={img} />
          <Text>&copy; 2021 Spotify</Text>
        </Content>
      </Wrapper>
    </>
  );
};

export default Footer;
