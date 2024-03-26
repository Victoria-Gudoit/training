import React, { useContext } from 'react';
import { MyInput } from '../UI/input/MyInput';
import { MyButton } from '../UI/button/MyButton';
import { AuthContext } from '../../context';

export const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Login</h1>
<form onSubmit={login}>
    <MyInput type="text" placeholder='Введите логин'></MyInput>
    <MyInput type="password" placeholder='Введите пароль'></MyInput>
<MyButton>Войти</MyButton>
</form>
        </div>
)} 
    
