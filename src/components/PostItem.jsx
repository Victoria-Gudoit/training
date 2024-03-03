import React from "react";

export const PostItem = (props) => {
  return (
    <div>
      <span>{props.number}</span>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
    </div>
  );
};
