import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
  color: white;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.a`
  display: block;
  background-image: url(${({ img }) => img});
  width: 120px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const Text = styled.p``;
