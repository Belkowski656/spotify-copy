import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import logo from "../../resources/images/SpotifyBlack.png";

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
  TextBold,
  TextNormal,
  Gender,
  InputGender,
  InputCheckBox,
  Submit,
  Container,
  TextBig,
  Date,
  GenderWrapper,
  TextGender,
  LabelGender,
  LabelCheckBox,
  Error,
} from "./SignUp.style";

const SignUp = () => {
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
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain one uppercase, one lowercase, one number and one special case character"
      )
      .required("Enter your password"),
    username: yup
      .string("Invalid username")
      .min(4, "Password must be at least 4 characters")
      .max(20, "Password must be at most 20 characters")
      .required("Enter your username"),
    checkbox: yup.boolean().oneOf([true], "Please accept terms and conditions"),
    gender: yup.string().required(),
    date: yup.date("Enter").required("Enter date of birth"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  console.log(errors);
  return (
    <>
      <Container>
        <Logo href="#" img={logo} />
        <Title>Sign Up for free and start listening.</Title>
        <Button>Sign Up with Facebook</Button>
        <Line>Or</Line>
        <Wrapper>
          <TextBig>Sign Up with e-mail address</TextBig>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>
              <Text>Your e-mail address</Text>
              <Input placeholder={"Enter your e-mail"} {...register("email")} />
            </Label>
            <Label>
              <Text>Confirm e-mail address</Text>
              <Input
                placeholder={"Enter your e-mail again"}
                {...register("confirmEmail")}
              />
            </Label>
            <Label>
              <Text>Password</Text>
              <Input
                placeholder={"Enter your password"}
                type="password"
                {...register("password")}
              />
            </Label>
            <Label>
              <Text>Username</Text>
              <Input
                placeholder={"Enter your username"}
                {...register("username")}
              />
            </Label>
            <Birth>
              <TextBold>Enter your date of birth</TextBold>
              <Label>
                <Date type="date" {...register("date")} />
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
                <Error></Error>
              </GenderWrapper>
            </Gender>
            <LabelCheckBox>
              <InputCheckBox type="checkbox" {...register("checkbox")} />
              <TextNormal>I accept the terms and conditions.</TextNormal>
              <Error></Error>
            </LabelCheckBox>
            <Submit type="submit">Sign Up</Submit>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default SignUp;
