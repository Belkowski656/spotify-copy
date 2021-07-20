import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

export const Wrapper = styled.div``;

export const Logo = styled.a`
  display: block;
  background-image: url(${({ img }) => img});
  width: 120px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 30px;
  padding: 15px;
`;

export const Button = styled.button`
  background-color: #1877f2;
  color: white;
  padding: 15px 50px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
  cursor: pointer;
`;

export const Line = styled.div`
  position: relative;
  color: gray;
  margin-bottom: 20px;
  margin-top: 20px;
  ::after,
  ::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 35%;
    height: 1px;
    background-color: gray;
    content: "";
  }
  ::after {
    transform: translate(-120%, -50%);
  }

  ::before {
    transform: translate(20%, -50%);
  }
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
`;

export const Birth = styled.div`
  margin-top: 40px;
`;

export const BirthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TextNormal = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const InputDay = styled.input`
  height: 50px;
  width: 50px;
  padding: 0 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid black;

  ::placeholder {
    outline: black;
    font-size: 16px;
    color: #8e8e8e;
  }

  :focus {
    outline-color: black;
  }
`;

export const InputYear = styled.input`
  height: 50px;
  width: 80px;
  padding: 0 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid black;

  ::placeholder {
    outline: black;
    font-size: 16px;
    color: #8e8e8e;
  }

  :focus {
    outline-color: black;
  }
`;

export const Select = styled.select`
  height: 50px;
  font-size: 16px;
  color: #8e8e8e;
  padding: 0 20px;

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
