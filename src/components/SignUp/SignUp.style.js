import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

export const Wrapper = styled.div``;

export const Logo = styled(Link)`
  display: block;
  background-image: url(${({ img }) => img});
  width: 120px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
  cursor: pointer;
`;

export const TextBig = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`;
export const Form = styled.form`
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid black;

  :focus {
    outline-color: black;
  }

  ::placeholder {
    font-size: 16px;
    color: #8e8e8e;
  }
`;

export const TextBold = styled.p`
  font-weight: bold;
  font-size: 14px;
  text-align: left;
`;

export const Birth = styled.div`
  margin-top: 40px;
`;

export const TextNormal = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const DateInput = styled.input`
  margin: 10px auto;
  width: 100%;
  ::-webkit-datetime-edit {
    padding: 10px;
    font-size: 16px;
  }
  :focus {
    outline-color: black;
  }
`;

export const Gender = styled.div`
  margin-top: 20px;
`;

export const TextGender = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px;
`;

export const GenderWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const LabelGender = styled.label`
  display: flex;
  margin-right: 50px;
`;

export const InputGender = styled.input`
  margin-right: 8px;
`;

export const LabelCheckBox = styled.label`
  display: flex;
  margin-top: 20px;
`;
export const InputCheckBox = styled.input`
  margin-right: 10px;
`;

export const Submit = styled.button`
  display: block;
  background-color: #1ed760;
  font-weight: bold;
  font-size: 16px;
  border: none;
  padding: 15px 50px;
  margin: 30px auto;
  border-radius: 25px;
  cursor: pointer;
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;
