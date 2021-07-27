import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 15px;
  background-color: rgb(35, 35, 35);
  width: 230px;
  border-radius: 10px;
  margin-bottom: 50px;
  margin-right: 10px;
  :hover {
    background-color: rgb(45, 45, 45);
  }
`;

export const Image = styled.div`
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

export const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Name = styled.p`
  font-size: 12px;
`;

export const Play = styled.button`
  position: absolute;
  top: 50%;
  right: 10%;
  padding: 10px;
  background-color: #1ed760;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 17px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    color: black;
  }

  @media (hover: hover) {
    opacity: 0;
    transform: translateY(20px);

    ${Wrapper}:hover & {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const Add = styled.button`
  position: absolute;
  top: 50%;
  left: 10%;
  padding: 10px;
  background-color: #1ed760;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    color: black;
  }
  @media (hover: hover) {
    opacity: 0;
    transform: translateY(20px);

    ${Wrapper}:hover & {
      opacity: 1;
      transform: translate(0);
    }
  }
`;
