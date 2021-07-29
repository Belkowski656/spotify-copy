import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 15px;
  background-color: rgb(35, 35, 35);
  width: 230px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
  margin: 30px 10px 0;

  :hover {
    background-color: rgb(45, 45, 45);
  }
`;

export const Img = styled.div`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 10px;
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
