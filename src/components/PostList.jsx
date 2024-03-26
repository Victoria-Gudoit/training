import React from 'react';
import { PostItem } from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export const PostList = ({post, deletePost}) => {
  if(!post.length) {
    return (
      <div>Посты не найдены</div>
    )
  }
    return <div>
      <TransitionGroup>
                {post.map((item, index) => (
                 <CSSTransition    key={item.id}
                 timeout={500}
                 classNames="post">
                  <PostItem deletePost={deletePost} number={index + 1} post={item}/>  
                 </CSSTransition>
      
      ))}
      </TransitionGroup>
   
    </div>;
}



