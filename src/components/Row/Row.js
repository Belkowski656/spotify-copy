import { useState } from "react";

import {
  Wrapper,
  Number,
  Title,
  Author,
  Duration,
  Img,
  Delete,
} from "./Row.style";

const Row = ({
  image,
  title,
  author,
  songs,
  rowIndex,
  handlePlay,
  duration,
  id,
  handleDelete,
  playlistId,
}) => {
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
          <i
            className="fas fa-play"
            onClick={() => handlePlay(songs, rowIndex)}
          ></i>
        ) : (
          rowIndex + 1
        )}
      </Number>
      <Title>
        <Img img={image} />
        {title}
      </Title>
      <Author>{author}</Author>
      <Duration>{duration}</Duration>
      {playlistId === "liked" ? null : (
        <Delete onClick={() => handleDelete(id, playlistId)}>
          <i className="far fa-trash-alt"></i>
        </Delete>
      )}
    </Wrapper>
  );
};

export default Row;
