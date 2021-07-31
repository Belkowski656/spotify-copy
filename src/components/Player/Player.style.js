import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #181818;
  border-top: 1px solid #282828;
  padding: 20px;
  z-index: 1;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: white;
  @media (min-width: 576px) {
    margin: 0;
    width: 35%;
    padding: 0 10px;
  }

  @media (min-width: 992px) {
    margin: 0;
    width: 25%;
    padding: 0 10px;
  }
`;

export const Img = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;

  background-image: url(${({ img }) => img});
`;

export const InfoContainer = styled.div``;

export const Name = styled.div`
  font-size: 12px;
  padding-left: 5px;
`;

export const Title = styled.div`
  padding: 5px;
`;

export const Like = styled.div`
  margin-left: 20px;
  font-size: 20px;
  cursor: pointer;
  color: ${({ like }) => (like ? "#1db954" : "white")};
`;

export const Panel = styled.div`
  text-align: center;
  color: #b3b3b3;
  max-width: 360px;
  margin: 0 auto;
  @media (min-width: 576px) {
    margin: 0;
    width: 50%;
    padding: 0 10px;
  }
`;

export const Play = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  color: black;
  padding: 10px;
  font-size: 18px;
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;

  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Previous = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  color: #b3b3b3;
  transform: rotate(-180deg);
  font-size: 18px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
  }
`;

export const Next = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  color: #b3b3b3;
  font-size: 18px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
  }
`;

export const Progress = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressContainer = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 4px;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    #b3b3b3 ${({ progress }) => progress + "%"},
    #535353 ${({ progress }) => progress + "%"}
  );

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
`;

export const Time = styled.p`
  padding: 10px;
  font-size: 11px;
`;

export const SoundControl = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin: 20px auto 0;
  @media (min-width: 576px) {
    margin: 0;
    width: 15%;
    padding: 0 10px;
  }
  @media (min-width: 992px) {
    width: 25%;
    padding: 0 10px;
  }
`;

export const Icon = styled.div`
  color: #b3b3b3;
  margin-right: 10px;
  @media (min-width: 992px) {
    margin: 0 auto;
  }
`;

export const ProgressSound = styled.input`
  position: relative;
  width: 100%;
  -webkit-appearance: none;
  height: 4px;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    #b3b3b3 ${({ progress }) => progress + "%"},
    #535353 ${({ progress }) => progress + "%"}
  );

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    width: 50%;
    margin: 0 auto;
  }
`;
