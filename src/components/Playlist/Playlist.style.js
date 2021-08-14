import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  position: relative;
  padding: 15px;
  background-color: rgb(35, 35, 35);
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
  text-align: center;
  text-decoration: none;
  color: white;

  :hover {
    background-color: rgb(45, 45, 45);
  }

  @media (min-width: 576px) {
    width: 48%;
  }

  @media (min-width: 992px) {
    width: 21%;
  }
`;

export const Img = styled.div`
  margin: 0 auto;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 220px;
  height: 220px;
  border-radius: 10px;
  @media (min-width: 992px) {
    width: 176px;
    height: 176px;
  }
`;

export const Info = styled.div`
  margin-top: 15px;
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Author = styled.div`
  font-size: 12px;
`;
