import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(28, 28, 28);
  color: white;
  padding: 20px;
  /* margin-bottom: 150px; */
`;

export const PageTitle = styled.h2`
  font-size: 24px;
  text-align: center;
`;

export const Content = styled.div`
  margin-top: 40px;
  margin-bottom: 250px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    justify-content: space-between;
  }
`;

export const LikedSongs = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  background: linear-gradient(149.46deg, #450af5, #8e8ee5 99.16%);
  border-radius: 10px;
  cursor: pointer;
  margin: 30px 10px 0;

  @media (min-width: 576px) {
    width: calc(100% - 270px);
    height: 289px;
  }
`;

export const Box = styled.div`
  position: absolute;
  left: 15px;
  bottom: 15px;
`;

export const Title = styled.h4`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const Number = styled.p`
  font-size: 14px;
`;
