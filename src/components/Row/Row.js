import { useState } from "react";

import { Wrapper, Number, Title, Author, Duration, Img } from "./Row.style";

const Row = ({ image, title, author, name, rowIndex, index, handlePlay }) => {
  const [active, setActive] = useState(false);

  const handleHover = () => {
    setActive(true);
  };

  const handleLeave = () => {
    setActive(false);
  };

  return (
    <Wrapper onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <Number>
        {active ? (
          <i className="fas fa-play" onClick={() => handlePlay(index)}></i>
        ) : (
          rowIndex
        )}
      </Number>
      <Title>
        <Img img={image} />
        {title}
      </Title>
      <Author>{author}</Author>
      <Duration>2:52</Duration>
    </Wrapper>
  );
};

export default Row;
