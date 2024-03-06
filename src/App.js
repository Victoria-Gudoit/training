import { useRef, useState } from "react";
import { Counter } from "./components/Counter";
import { CounterClass } from "./components/CounterClass";
import { PostItem } from "./components/PostItem";
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([{ id: 1, title: "js", body: "dfdfxfv" },
  { id: 2, title: "css", body: "gg" }]);
  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')
const [post, setPost] = useState([{title: '', body: ''}])


  const addNewPost = (event) => {
    event.preventDefault()
// const newPost = {
//   id: Date.now(),
//   title: post.title,
//   body: 'fbngv'
// }
setPosts([...posts, {...post, id: Date.now()}])
setPost({ title: '', body: ''})

  }

  return (
    <div>
      <form>
        <MyInput  value={post.title} onChange={({target}) => setPost({...post, title: target.value})} type="text" placeholder="Название поста"/>
        <MyInput value={post.body} onChange={({target}) => setPost({...post, body: target.value})} type="text" placeholder="Описание поста"/>
<MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
   <PostList post={posts}/>
    </div>
  );
}

export default App;
