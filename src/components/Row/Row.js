import { useState } from "react";

import { Wrapper, Number, Title, Author, Duration, Img } from "./Row.style";

import img from "../../resources/images/image.jpg";

const Row = () => {
  const [active, setActive] = useState(false);

  const handleHover = () => {
    setActive(true);
  };

  const handleLeave = () => {
    setActive(false);
  };

  return (
    <Wrapper onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <Number>{active ? <i className="fas fa-play"></i> : 1}</Number>
      <Title>
        <Img img={img} />
        Warriors 2016
      </Title>
      <Author>Imagine Dragons, Riot Games</Author>
      <Duration>2:52</Duration>
    </Wrapper>
  );
};

export default Row;
