import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import { Loader } from '../UI/Loader/Loader';

export  const PostIdPages = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentByPostId(id)
        setComment(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)

    }, [])
    return (
        <div>
            <div>вы перешли сюда c ID = {params.id}</div>
            {isLoading ? <Loader/> : <div>{post.id} {post.title}</div>}
            <h1>Comments</h1>
            {isComLoading ? <Loader/> : <div>
                {comment.map(comm => (
                    <div>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>

                    </div>
                ))}
                </div>}
        </div>
    )
}


