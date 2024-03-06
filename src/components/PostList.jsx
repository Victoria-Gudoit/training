import React from 'react';
import { PostItem } from './PostItem';


export const PostList = ({post, deletePost}) => {
    return <div>
           {post.map((item, index) => (
        <PostItem deletePost={deletePost} number={index + 1} post={item} key={item.id}/>
      ))}
    </div>;
}



