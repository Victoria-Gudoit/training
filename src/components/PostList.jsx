import React from 'react';
import { PostItem } from './PostItem';


export const PostList = ({post}) => {
    return <div>
           {post.map((item, index) => (
        <PostItem number={index + 1} post={item} key={item.id}/>
      ))}
    </div>;
}



