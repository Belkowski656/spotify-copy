import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

export const Logo = styled(Link)`
  display: block;
  background-image: url(${({ img }) => img});
  width: 120px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto 30px;
  cursor: pointer;
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: #616467;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid black;
  font-size: 16px;

  :focus {
    outline: black;
  }

  ::placeholder {
    font-size: 16px;
  }
`;

export const LinkPassword = styled.a`
  display: block;
  color: #616467;
  margin: 20px 0;
`;

export const Submit = styled.button`
  width: 100%;
  border: none;
  background-color: #15883e;
  padding: 15px 0;
  border-radius: 25px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 14px;
  margin: 15px 0;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: #28c55f;
  }
`;

export const TextBold = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Button = styled(Link)`
  display: block;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
  color: #616467;
  padding: 15px 0;
  font-size: 14px;
  border: 1px solid #616467;
  border-radius: 25px;
  transition: 0.2s;
  cursor: pointer;
  text-decoration: none;
  :hover {
    background-color: black;
    color: white;
  }
`;

export const Error = styled.p`
  font-size: 14px;
  color: red;
  padding-top: 5px;
`;
