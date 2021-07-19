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
} from "./SignUp.style";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleChangeEmail = (e) => {
    const email = e.target.value;

    setEmail(email);
  };

  const handleChangeConfirmEmail = (e) => {
    const confirmEmail = e.target.value;

    setConfirmEmail(confirmEmail);
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;

    setPassword(password);
  };

  const handleChangeUsername = (e) => {
    const username = e.target.value;

    setUsername(username);
  };

  const handleChangeDay = (e) => {
    const day = e.target.value;

    setDay(day);
  };

  const handleChangeMonth = (e) => {
    const month = e.target.value;

    setMonth(month);
  };

  const handleChangeYear = (e) => {
    const year = e.target.value;

    setYear(year);
  };

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

  const options = months.map((month, i) => {
    return <Option key={i} month={month} />;
  });

  return (
    <Container>
      <Logo img={logo} />
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
              onChange={handleChangeEmail}
            />
          </Label>
          <Label>
            <Text>Confirm e-mail address</Text>
            <Input
              placeholder={"Enter your e-mail again"}
              value={confirmEmail}
              onChange={handleChangeConfirmEmail}
            />
          </Label>
          <Label>
            <Text>Password</Text>
            <Input
              placeholder={"Enter your password"}
              value={password}
              onChange={handleChangePassword}
              type="password"
            />
          </Label>
          <Label>
            <Text>Username</Text>
            <Input
              placeholder={"Enter your username"}
              value={username}
              onChange={handleChangeUsername}
            />
          </Label>
          <Birth>
            <TextBold>Enter your date of birth</TextBold>
            <BirthWrapper>
              <Label>
                <TextNormal>Day</TextNormal>
                <InputDay
                  placeholder={"DD"}
                  value={day}
                  onChange={handleChangeDay}
                  type="number"
                />
              </Label>
              <Label>
                <TextNormal>Month</TextNormal>
                <Select value={month} onChange={handleChangeMonth}>
                  {options}
                </Select>
              </Label>
              <Label>
                <TextNormal>Year</TextNormal>
                <InputYear
                  placeholder={"YYYY"}
                  value={year}
                  onChange={handleChangeYear}
                  type="number"
                />
              </Label>
            </BirthWrapper>
          </Birth>
          <Gender>
            <TextGender>Your gender?</TextGender>
            <GenderWrapper>
              <LabelGender>
                <InputGender
                  type="radio"
                  checked={true}
                  name="gender"
                  value="male"
                />
                <TextNormal>Male</TextNormal>
              </LabelGender>
              <LabelGender>
                <InputGender
                  checked={false}
                  type="radio"
                  name="gender"
                  value="female"
                />
                <TextNormal>Female</TextNormal>
              </LabelGender>
            </GenderWrapper>
          </Gender>
          <LabelCheckBox>
            <InputCheckBox type="checkbox" checked={false} />
            <TextNormal>I accept the terms and conditions.</TextNormal>
          </LabelCheckBox>
          <Submit>Sign Up</Submit>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
