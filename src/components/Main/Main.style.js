import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(28, 28, 28);
  color: white;
  padding: 20px;
  min-height: 100vh;
`;

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-bottom: 200px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    justify-content: space-between;
  }
`;
