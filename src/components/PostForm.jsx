import React, { useState } from 'react';
import { MyInput } from './UI/input/MyInput';
import { MyButton } from './UI/button/MyButton';

export const PostForm = ({create}) => {
const [post, setPost] = useState([{title: '', body: ''}])

const addNewPost = (event) => {
    event.preventDefault()
const newPost = {
    ...post,
  id: Date.now(),

}
create(newPost)
setPost({ title: '', body: ''})
  }

    
    return (
        <form>
        <MyInput  value={post.title} onChange={({target}) => setPost({...post, title: target.value})} type="text" placeholder="Название поста"/>
        <MyInput value={post.body} onChange={({target}) => setPost({...post, body: target.value})} type="text" placeholder="Описание поста"/>
<MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    )
}


