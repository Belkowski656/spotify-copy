import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div``;

export const Box = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333030;
  width: 340px;
  height: 300px;
  z-index: 2;
  border-radius: 20px;
  text-align: center;
  @media (min-width: 567px) {
    width: 400px;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
`;

export const Name = styled.input`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  font-size: 16px;
`;

export const Close = styled.button`
  width: calc(50% - 5px);
  color: white;
  margin-top: 20px;
  margin-left: 5px;
  background-color: #1db954;
  border-radius: 10px;
  padding: 5px 0;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const Button = styled(Link)`
  display: inline-block;
  width: calc(50% - 5px);
  text-decoration: none;
  color: white;
  margin-top: 20px;
  background-color: #1db954;
  border-radius: 10px;
  padding: 5px 0;
  margin-right: 5px;
`;

export const Error = styled.p`
  font-size: 16px;
  color: red;
  margin-top: 10px;
`;
