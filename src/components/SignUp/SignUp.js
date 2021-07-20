import { useState } from "react";

import logo from "../../resources/images/SpotifyBlack.png";

import Option from "../Option/Option";

import {
  Logo,
  Title,
  Button,
  Line,
  Wrapper,
  Text,
  Form,
  Label,
  Input,
  Birth,
  BirthWrapper,
  TextBold,
  TextNormal,
  Select,
  Gender,
  InputGender,
  InputCheckBox,
  Submit,
  Container,
  TextBig,
  InputDay,
  InputYear,
  GenderWrapper,
  TextGender,
  LabelGender,
  LabelCheckBox,
  Error,
} from "./SignUp.style";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [sex, setSex] = useState("");
  const [accept, setAccept] = useState("");

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [emailError, setEmailError] = useState(true);
  const [confirmEmailError, setConfirmEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [usernameError, setUsernameError] = useState(true);
  const [dateError, setDateError] = useState(true);

  const months = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const validateEmail = () => {
    if (!email.includes("@") || email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const validateConfirmEmail = () => {
    if (
      !confirmEmail.includes("@") ||
      confirmEmail === "" ||
      confirmEmail !== email
    ) {
      setConfirmEmailError(true);
    } else {
      setConfirmEmailError(false);
    }
  };

  const validatePassword = () => {
    if (password === "" || password.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const validateUsername = () => {
    if (username === "" || username.length < 3) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  };

  const validateDate = () => {
    if (
      day * 1 < 1 ||
      day * 1 > 31 ||
      month === "Month" ||
      year * 1 > 2021 ||
      year.length < 4
    ) {
      setDateError(true);
    } else {
      setDateError(false);
    }
  };

  const options = months.map((month, i) => {
    return <Option key={i} month={month} />;
  });

  return (
    <Container>
      <Logo href="#" img={logo} />
      <Title>Sign Up for free and start listening.</Title>
      <Button>Sign Up with Facebook</Button>
      <Line>Or</Line>
      <Wrapper>
        <TextBig>Sign Up with e-mail address</TextBig>
        <Form>
          <Label>
            <Text>Your e-mail address</Text>
            <Input
              placeholder={"Enter your e-mail"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            {emailError ? <Error>{"Invalid Email"}</Error> : null}
          </Label>
          <Label>
            <Text>Confirm e-mail address</Text>
            <Input
              placeholder={"Enter your e-mail again"}
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              onBlur={validateConfirmEmail}
            />
            {confirmEmailError ? (
              <Error>{"Invalid Confirm Email"}</Error>
            ) : null}
          </Label>
          <Label>
            <Text>Password</Text>
            <Input
              placeholder={"Enter your password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              type="password"
            />
            {passwordError ? <Error>{"Invalid Password"}</Error> : null}
          </Label>
          <Label>
            <Text>Username</Text>
            <Input
              placeholder={"Enter your username"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={validateUsername}
            />
            {usernameError ? <Error>{"Invalid Username"}</Error> : null}
          </Label>
          <Birth>
            <TextBold>Enter your date of birth</TextBold>
            <BirthWrapper>
              <Label>
                <TextNormal>Day</TextNormal>
                <InputDay
                  placeholder={"DD"}
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  onBlur={validateDate}
                  type="number"
                />
              </Label>
              <Label>
                <TextNormal>Month</TextNormal>
                <Select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  onBlur={validateDate}
                >
                  {options}
                </Select>
              </Label>
              <Label>
                <TextNormal>Year</TextNormal>
                <InputYear
                  placeholder={"YYYY"}
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  onBlur={validateDate}
                  type="number"
                />
              </Label>
            </BirthWrapper>
            {dateError ? <Error>{"Invalid Date"}</Error> : null}
          </Birth>
          <Gender>
            <TextGender>Your gender?</TextGender>
            <GenderWrapper>
              <LabelGender>
                <InputGender
                  type="radio"
                  checked={sex === "male" ? true : false}
                  onChange={(e) => setSex(e.target.value)}
                  name="gender"
                  value="male"
                />
                <TextNormal>Male</TextNormal>
              </LabelGender>
              <LabelGender>
                <InputGender
                  checked={sex === "female" ? true : false}
                  onChange={(e) => setSex(e.target.value)}
                  type="radio"
                  name="gender"
                  value="female"
                />
                <TextNormal>Female</TextNormal>
              </LabelGender>
              <Error></Error>
            </GenderWrapper>
          </Gender>
          <LabelCheckBox>
            <InputCheckBox
              type="checkbox"
              checked={accept}
              onChange={(e) => setAccept(e.target.value)}
            />
            <TextNormal>I accept the terms and conditions.</TextNormal>
            <Error></Error>
          </LabelCheckBox>
          <Submit>Sign Up</Submit>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
