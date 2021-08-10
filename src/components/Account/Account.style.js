import styled from "styled-components";

import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: fixed;
  min-height: 100%;
  min-width: 100%;
  background-image: url(${({ bgc }) => bgc});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  color: white;
  padding: 30px;
  overflow: scroll;
  height: 90%;
  max-height: 636px;

  @media (hover: hover) {
    overflow: auto;
  }
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Img = styled.div`
  position: relative;
  background-image: url(${({ img }) => img});
  background-size: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 50px auto;
`;

export const Edit = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 150px;
    background-color: gray;
    opacity: 0;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f044";
    font-size: 40px;
  }
  i {
    line-height: 150px;
    color: white;
    font-size: 40px;
  }

  ${Img}:hover &::after {
    opacity: 0.9;
  }
`;

export const Submit = styled.button`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  padding: 5px 10px;
  font-size: 16px;
  background-color: transparent;
  color: white;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    color: #1ed760;
    background-color: #fff;
  }
`;

export const Form = styled.form`
  position: relative;
`;

export const InputFile = styled.input`
  display: none;
`;

export const InputToken = styled.input`
  display: none;
`;

export const Content = styled.table`
  font-size: 12px;
`;

export const Row = styled.tr``;

export const TableLeft = styled.td`
  width: 100%;
  padding: 10px 0;
  color: #9e9e9e;
`;

export const TableRight = styled.td``;

export const TableInput = styled.input`
  padding: 5px;
  width: 100%;
`;

export const TableRadio = styled.input`
  margin-right: 5px;
  vertical-align: -2px;
  cursor: pointer;
`;

export const Label = styled.label`
  :nth-child(2) {
    margin-left: 10px;
  }
`;

export const Button = styled(Link)`
  padding: 15px 20px;
  border-radius: 20px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3;
  text-align: center;
  text-decoration: none;

  :hover {
    background-color: #fff;
    color: #1ed760;
  }
`;

export const ButtonEdit = styled.div`
  padding: 15px 30px;
  border-radius: 20px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3;
  text-align: center;
  text-decoration: none;
  margin-left: 20px;

  :hover {
    background-color: #fff;
    color: #1ed760;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
