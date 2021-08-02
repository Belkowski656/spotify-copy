import { useState } from "react";

import img from "../../resources/images/SpotifyBlack.png";

import {
  Wrapper,
  Logo,
  Form,
  Label,
  Text,
  Input,
  LinkPassword,
  Submit,
  TextBold,
  Button,
} from "./LogIn.style";

const LogIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (e) => {
    const login = e.target.value;

    setLogin(login);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    setPassword(password);
  };

  return (
    <>
      <Wrapper>
        <Logo img={img} />
        <Form>
          <Label>
            <Text>Email address or username</Text>
            <Input
              value={login}
              onChange={handleLoginChange}
              placeholder="Email address or username"
            ></Input>
          </Label>
          <Label>
            <Text>Password</Text>
            <Input
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            ></Input>
          </Label>
          <LinkPassword href="#">Forgot your password?</LinkPassword>
          <Submit>Log in</Submit>
        </Form>
        <TextBold>Don't have an account?</TextBold>
        <Button to="/signup" type="submit">
          Sign up
        </Button>
      </Wrapper>
    </>
  );
};

export default LogIn;
