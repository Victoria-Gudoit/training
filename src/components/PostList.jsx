import React from 'react';
import { PostItem } from './PostItem';


export const PostList = ({post, deletePost}) => {
  if(!post.length) {
    return (
      <div>Посты не найдены</div>
    )
  }
    return <div>
           {post.map((item, index) => (
        <PostItem deletePost={deletePost} number={index + 1} post={item} key={item.id}/>
      ))}
    </div>;
}



