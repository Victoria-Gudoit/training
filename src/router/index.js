import { Abaout } from "../components/pages/Abaout";
import { Login } from "../components/pages/Login";
import { PostIdPages } from "../components/pages/PostIdPages";
import Posts from "../components/pages/Posts";

export const privateRoutes = [
    {path: '/about', component: Abaout},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostIdPages},

]

export const publicRoutes = [
    {path: '/login', component: Login},

]