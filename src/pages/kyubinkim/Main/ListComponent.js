import React from "react";

const ListComponent = ({
  id,
  mention,
  inLike,
  likePosition,
  handleLike,
  handleRemove,
}) => {
  return (
    <li>
      <b className="username">UserName</b>
      {mention}
      <button onClick={() => handleRemove(id)}>X</button>
      <span>{inLike}</span>
      <span onClick={handleLike} className="like">
        {!likePosition ? (
          <span className="black">좋아요</span>
        ) : (
          <span className="red">좋아요</span>
        )}
      </span>
    </li>
  );
};

export default ListComponent;
