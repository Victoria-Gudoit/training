import { useRef, useState } from "react";
import { Counter } from "./components/Counter";
import { CounterClass } from "./components/CounterClass";
import { PostItem } from "./components/PostItem";
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";
import { PostForm } from "./components/PostForm";
import { MySelect } from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([{ id: 1, title: "js", body: "dfdfxfv" },
  { id: 2, title: "css", body: "gg" }]);
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
setPosts([...posts, newPost])
  }

  const deletePost = (id) => {
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
  }

  const sortPosts = (sort) => {
   setSelectedSort(sort);
   setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div>
<PostForm create={createPost}/>
<hr style={{margin: '15px 0'}}/>
<MySelect value={selectedSort} onChange={sortPosts} defaultValue='Сортировка' options={[{value: 'title', name: 'По названию'}, {value: 'body', name: 'По описанию'}]}/>
{posts.length ? <PostList deletePost={deletePost} post={posts}/> : <div>Посты не найдены</div>}
   
    </div>
  );
}

export default App;
