import React from "react";
import { MyButton } from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

export const PostItem = (props) => {
  const router = useNavigate()
  return (
    <div>
      <span>{props.post.id}</span>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
      <MyButton onClick={() => router(`/posts/${props.post.id}`)} >открыть</MyButton>

      <MyButton onClick={() => props.deletePost(props.post.id)}>delete</MyButton>
    </div>
  );
};
