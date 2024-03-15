import { useEffect, useState } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import { Loader } from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import cl from "./styles/module.style.css"
import { getPageCount } from "./utils/pages";
import { Pagination } from "./components/UI/Pagination/Pagination";

function Posts() { //не смотреть 
  const [posts, setPosts] = useState([{ id: 1, title: "js", body: "dfdfxfv" },
  { id: 2, title: "css", body: "gg" }]);
const [filter, setFilter] = useState({sort: '', query: ''})
const [modal, setModal] = useState(false)
const [totalPages, setTotalPages] = useState(0)
const [limit, setLimit] = useState(10)
const [page, setPage] = useState(1)


const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page) => {
  const response = await PostService.getAll(limit, page)
  setPosts(response.data)
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount, limit))
})

const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
setPosts([...posts, newPost])
setModal(false)
  }

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const deletePost = (id) => {
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <div>
    <button onClick={fetchPosts}>GET POSTS</button>
      <button style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пользователя</button>
      <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost}/></MyModal>

<hr style={{margin: '15px 0'}}/>
<PostFilter filter={filter} setFilter={setFilter}/>
{postError && <h1>Произошла ошибка ${postError}</h1>}
{isPostsLoading ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}> <Loader/></div> : <PostList deletePost={deletePost} post={sortedAndSearchedPosts}/>}
<Pagination page={page} changePage={changePage} totalPages={totalPages}/>

 
    </div>
  );
}

export default Posts;
