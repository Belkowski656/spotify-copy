import { Wrapper, Content, Title, Text, Button } from "./Header.style";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Title>Listening is everything</Title>
          <Text>Millions of songs and podcasts. Absolutely for free</Text>
          <Button to="signup">Sign Up for free</Button>
        </Content>
      </Wrapper>
    </>
  );
};

export default Header;
