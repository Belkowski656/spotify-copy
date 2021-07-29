import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(28, 28, 28);
  color: white;
  padding-bottom: 250px;
`;

export const Header = styled.header`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 20px;
`;

export const Img = styled.div`
  margin: 0 auto;
  background-image: url(${({ img }) => img});
  width: 130px;
  height: 130px;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Info = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const Author = styled.p`
  font-size: 14px;
`;

export const Songs = styled.main`
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Panel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Play = styled.button`
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: none;
  color: white;
  background-color: #1db954;
  font-size: 20px;
  cursor: pointer;
`;

export const Remove = styled.button`
  padding: 5px 20px;
  font-weight: bold;
  border-radius: 30px;
  color: white;
  border: 1px solid gray;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #1db954;
    color: black;
    border-color: #1db954;
  }
`;

export const Table = styled.table`
  padding: 20px 0;
  text-align: left;
  width: 100%;
`;

export const FirstRow = styled.tr`
  color: #b3b3b3;
`;

export const TableHeader = styled.th`
  font-weight: normal;
  padding-bottom: 10px;
  padding-top: 10px;
  :nth-child(1) {
    padding: 10px 10px 10px;
  }
`;
