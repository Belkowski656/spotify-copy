import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(28, 28, 28);
  color: white;
  padding: 20px;
  min-height: 100vh;
`;

export const Form = styled.form`
  display: block;
  width: 60%;
  max-width: 400px;
  margin: 0 auto;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 25px;
  border: none;
  padding: 15px;
  font-size: 14px;
  :focus {
    outline: none;
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  margin-bottom: 200px;
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
