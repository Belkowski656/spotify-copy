import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-image: url("https://www-growth.scdn.co/static/home/bursts-tablet.svg");
  background-size: 220%;
  background-position: 55% -50px;
  background-repeat: no-repeat;
  background-color: #2941ab;
  color: #1ed760;
  height: 100vh;
  overflow: hidden;

  @media (min-width: 576px) {
    background-size: 100%;
    background-position: 20px -70px;
  }

  @media (min-width: 768px) {
    background-size: 90%;
    background-position: 50px 50px;
  }

  @media (min-width: 768px) and (orientation: portrait) {
    background-size: 150%;
    background-position: -200px 150px;
  }

  @media (min-width: 992px) {
    background-size: 135%;
    background-position: -150px 250px;
  }

  @media (min-width: 1200px) {
    background-size: 80%;
    background-position: center;
  }
`;
export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  text-align: center;
  width: 300px;
  @media (min-width: 992px) {
    width: 400px;
  }
`;
export const Title = styled.h1`
  font-size: 44px;
  margin-bottom: 20px;

  @media (min-width: 992px) {
    font-size: 60px;
  }
`;
export const Text = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 160%;
`;
export const Button = styled.a`
  display: block;
  background-color: #1ed760;
  color: #2941ab;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 0;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
`;
