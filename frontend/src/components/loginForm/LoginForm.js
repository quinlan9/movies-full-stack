import React, { useState } from 'react'
import api from '../../api/axiosConfig';
import { useNavigate } from 'react-router-dom';


//收集用户输入的用户名和密码，发送登录请求，并处理登录响应
const LoginForm = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate(); //登陆成功跳转首页

    const handleSubmit = async(e) => {
        e.preventDefault();
        const token = btoa(`${username}:${password}`);
        localStorage.setItem('basicToken', token); // 将编码后的token保存在localStorage中
    
        try {
            const response = await api.get('/api/v1/movies',{
                headers: {
                    'Authorization': `Basic ${localStorage.getItem('basicToken')}`
                  }
            });
            console.log('login in successfully',response.data);
            // 登录成功后跳转到首页
            navigate('/');
        } catch (error){
            console.error('failed to login',error);
        }
    }


  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <button type="submit">Login</button>
  </form>
  )
}

export default LoginForm
