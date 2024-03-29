import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Abaout } from './pages/Abaout';
import Posts from './pages/Posts';
import { Error } from './pages/Error';
import { PostIdPages } from './pages/PostIdPages';
import { privateRoutes, publicRoutes, routes } from '../router';
import { AuthContext } from '../context';
import { Loader } from './UI/Loader/Loader';

export const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if(isLoading) {
        return <Loader/>
    }
    return (
        isAuth ? 
        <Routes>
            {privateRoutes.map(route => 
 <Route path={route.path} key={route.path}  element={<route.component/>}></Route>
            )}
   <Route path="/*" element={<Navigate to="/posts" replace />} />
   </Routes> :   <Routes>
            {publicRoutes.map(route => 
 <Route path={route.path} key={route.path}  element={<route.component/>}></Route>
            )}
   <Route path="/*" element={<Navigate to="/login" replace />} />
   </Routes>
    ) 
}

 