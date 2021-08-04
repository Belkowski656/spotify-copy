import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  background-image: url(${({ avatar }) => avatar});
  background-size: cover;
  border: 2px solid black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1;
`;

export const Menu = styled.ul`
  position: absolute;
  top: 50px;
  right: 0;
  padding: 5px;
  list-style: none;
  background-color: #282828;
  border-radius: 5px;

  ${({ active }) =>
    active ? "opacity:1; display:block;" : "opacity:0; display:none;"}
`;

export const Element = styled.li`
  font-size: 14px;
  color: white;
  font-weight: bold;
  background-color: #282828;
  padding: 10px 80px 10px 10px;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: #4d4b4b;
  }
`;
export const StyledLink = styled(Link)`
  display: block;
  font-size: 14px;
  color: white;
  text-decoration: none;
`;
