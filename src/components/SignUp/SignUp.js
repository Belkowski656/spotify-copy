import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import logo from "../../resources/images/SpotifyBlack.png";

import {
  Logo,
  Wrapper,
  Text,
  Form,
  Label,
  Input,
  Birth,
  TextBold,
  TextNormal,
  Gender,
  InputGender,
  InputCheckBox,
  Submit,
  Container,
  TextBig,
  DateInput,
  GenderWrapper,
  TextGender,
  LabelGender,
  LabelCheckBox,
  Error,
} from "./SignUp.style";

const SignUp = () => {
  const getDate = () => {
    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const date = `${year}-${
      month.toString().length === 1 ? "0" + month : month
    }-${day.toString().length === 1 ? "0" + day : day}`;

    return date;
  };

  const getMaxDateValue = () => {
    const today = new Date();

    const maxDateValue = new Date(today.setMonth(-168));

    return maxDateValue;
  };

  const [date, setDate] = useState(getDate());

  const maxDateValue = getMaxDateValue();

  const handleDate = (e) => {
    const date = e.target.value;

    setDate(date);
  };

  let schema = yup.object().shape({
    email: yup
      .string("Invalid email.The correct format is example@email.com")
      .email("Invalid email.The correct format is example@email.com")
      .required("Enter your email"),
    confirmEmail: yup
      .string("Invalid email.The correct format is example@email.com")
      .oneOf([yup.ref("email"), null], "Emails are not the same")
      .required("Confirm your email"),
    password: yup
      .string(
        "Password must contain one uppercase, one lowercase, one number and one special case character"
      )
      .required("Enter your password")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain one uppercase, one lowercase, one number and one special case character"
      ),
    username: yup
      .string("Invalid username")
      .required("Enter your username")
      .min(4, "Password must be at least 4 characters")
      .max(20, "Password must be at most 20 characters"),
    checkbox: yup.boolean().oneOf([true], "Please accept terms and conditions"),
    gender: yup.string().required(),
    date: yup.date().max(maxDateValue, "You are too young"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <>
      <Container>
        <Logo to="/" img={logo} />
        <Wrapper>
          <TextBig>Sign Up with e-mail address</TextBig>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>
              <Text>Your e-mail address</Text>
              <Input placeholder={"Enter your e-mail"} {...register("email")} />
              {errors.email ? <Error>{errors.email.message}</Error> : null}
            </Label>
            <Label>
              <Text>Confirm e-mail address</Text>
              <Input
                placeholder={"Enter your e-mail again"}
                {...register("confirmEmail")}
              />
              {errors.confirmEmail ? (
                <Error>{errors.confirmEmail.message}</Error>
              ) : null}
            </Label>
            <Label>
              <Text>Password</Text>
              <Input
                placeholder={"Enter your password"}
                type="password"
                {...register("password")}
              />
              {errors.password ? (
                <Error>{errors.password.message}</Error>
              ) : null}
            </Label>
            <Label>
              <Text>Username</Text>
              <Input
                placeholder={"Enter your username"}
                {...register("username")}
              />
              {errors.username ? (
                <Error>{errors.username.message}</Error>
              ) : null}
            </Label>
            <Birth>
              <TextBold>Enter your date of birth</TextBold>
              <Label>
                <DateInput
                  type="date"
                  {...register("date")}
                  value={date}
                  onChange={handleDate}
                />
                {errors.date ? <Error>{errors.date.message}</Error> : null}
              </Label>
            </Birth>
            <Gender>
              <TextGender>Your gender?</TextGender>
              <GenderWrapper>
                <LabelGender>
                  <InputGender
                    type="radio"
                    value="male"
                    {...register("gender")}
                  />
                  <TextNormal>Male</TextNormal>
                </LabelGender>
                <LabelGender>
                  <InputGender
                    type="radio"
                    value="female"
                    {...register("gender")}
                  />
                  <TextNormal>Female</TextNormal>
                </LabelGender>
              </GenderWrapper>
              {errors.gender ? <Error>Choose your gender</Error> : null}
            </Gender>
            <LabelCheckBox>
              <InputCheckBox type="checkbox" {...register("checkbox")} />
              <TextNormal>I accept the terms and conditions.</TextNormal>
            </LabelCheckBox>
            {errors.checkbox ? <Error>{errors.checkbox.message}</Error> : null}
            <Submit type="submit">Sign Up</Submit>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default SignUp;
