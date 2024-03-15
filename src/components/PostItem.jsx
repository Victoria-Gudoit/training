import React from "react";
import { MyButton } from "./UI/button/MyButton";

export const PostItem = (props) => {
  return (
    <div>
      <span>{props.post.id}</span>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
      <MyButton onClick={() => props.deletePost(props.post.id)}>delete</MyButton>
    </div>
  );
};
