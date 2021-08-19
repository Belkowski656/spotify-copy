import { useState } from "react";

import img from "../../resources/images/SpotifyBlack.png";

import {
  Wrapper,
  Logo,
  Form,
  Label,
  Text,
  Input,
  Submit,
  TextBold,
  Button,
  Error,
} from "./LogIn.style";

const LogIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const handleLoginChange = (e) => {
    const login = e.target.value;

    setLogin(login);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    setPassword(password);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();

    if (!login) {
      return setLoginError("Please enter username.");
    } else {
      setLoginError("");
    }

    if (!password) {
      return setPasswordError("Please enter your password");
    } else {
      setPasswordError("");
    }

    const result = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login,
        password,
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      sessionStorage.setItem("token", result.data);

      document.location.href = "/player";
    } else {
      setError(result.error);
    }
  };

  return (
    <>
      <Wrapper>
        <Logo to="/" img={img} />
        <Form onSubmit={handleLogIn}>
          <Label>
            <Text>Username</Text>
            <Input
              value={login}
              onChange={handleLoginChange}
              placeholder="Username"
            ></Input>
            {loginError ? <Error>{loginError}</Error> : null}
          </Label>
          <Label>
            <Text>Password</Text>
            <Input
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              type="password"
            ></Input>
            {passwordError ? <Error>{passwordError}</Error> : null}
          </Label>
          {error ? <Error>{error}</Error> : null}
          <Submit>Log in</Submit>
        </Form>
        <TextBold>Don't have an account?</TextBold>
        <Button to="/signup">Sign up</Button>
      </Wrapper>
    </>
  );
};

export default LogIn;
