import { useEffect, useState } from "react";

import cl from "../../styles/module.style.css"

import { PostList } from "../PostList";
import { getPageCount } from "../../utils/pages";
import { usePosts } from "../../hooks/usePosts";
import { MyModal } from "../UI/MyModal/MyModal";
import { PostFilter } from "../PostFilter";
import { Pagination } from "../UI/Pagination/Pagination";
import { Loader } from "../UI/Loader/Loader";
import { PostForm } from "../PostForm";
import PostService from "../../API/PostService";
import { useFetching } from "../../hooks/useFetching";

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
