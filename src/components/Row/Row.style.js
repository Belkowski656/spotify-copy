import styled from "styled-components";

export const Wrapper = styled.tr`
  color: #b3b3b3;
  :hover {
    background-color: rgb(35, 35, 35);
  }
`;

export const Number = styled.td`
  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
  padding-right: 20px;
  padding-left: 10px;
  border-radius: 10px 0 0 10px;
  width: 60px;
  i {
    cursor: pointer;
  }
`;

export const Title = styled.td`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: white;
  padding: 10px 5px;
`;

export const Img = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${({ img }) => img});
  margin-right: 15px;
  background-size: cover;
`;

export const Author = styled.td`
  font-size: 12px;
  padding: 10px 5px;
`;

export const Duration = styled.td`
  font-size: 12px;
  padding: 10px 5px;
  padding-right: 10px;
  border-radius: 0 10px 10px 0;
`;
