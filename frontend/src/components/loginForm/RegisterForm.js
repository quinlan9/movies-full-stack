import { useNavigate } from 'react-router-dom';
import api from '../../api/axiosConfig';

import React, { useState } from 'react'

const RegisterForm = () => {

    //react每个组件都是封闭的.不会与loginform产生冲突
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate=useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault(); //阻止表单默认提交,这样就可以先进行其他操作（如数据验证或通过 AJAX 提交数据）再决定是否提交表单,允许开发者控制表单提交的流程，避免页面刷新导致的用户体验不佳

        try{
            await api.post('/api/v1/users/register',{
                username,
                password
            });
            console.log("User register successfully");
            navigate('/login');
        }catch(error){
            console.error("failed to register",error);
        }
    }
  return (
    //创建了一个注册表单
    //表单提交时会调用handleSubmit函数
    //onChange事件用于更新组件的状态，保证输入框的值与组件状态同步，从而可以获取用户输入的最新数据
    <form onSubmit={handleSubmit}> 
        <div>
            <label>username:</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div>
            <label>password:</label>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type='submit'>register</button>
    </form>
  )
}

export default RegisterForm
