import { useMemo, useRef, useState } from "react";
import { Counter } from "./components/Counter";
import { CounterClass } from "./components/CounterClass";
import { PostItem } from "./components/PostItem";
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";
import { PostForm } from "./components/PostForm";
import { MySelect } from "./components/UI/select/MySelect";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([{ id: 1, title: "js", body: "dfdfxfv" },
  { id: 2, title: "css", body: "gg" }]);
const [filter, setFilter] = useState({sort: '', query: ''})
const [modal, setModal] = useState(false)

const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
setPosts([...posts, newPost])
setModal(false)
  }



  const deletePost = (id) => {
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
  }


  return (
    <div>
      <button style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пользователя</button>
      <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost}/></MyModal>

<hr style={{margin: '15px 0'}}/>
<PostFilter filter={filter} setFilter={setFilter}/>
{<PostList deletePost={deletePost} post={sortedAndSearchedPosts}/>}
 
    </div>
  );
}

export default App;
