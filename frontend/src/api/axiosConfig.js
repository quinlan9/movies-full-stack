import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:8080',
    headers:{"Content-type":"application/json"}
});


/*如果不使用 baseURL，每次向后端发送请求时，你需要指定完整的URL。
例如，如果你的后端API有一个获取用户信息的端点 /api/users，
且后端服务运行在 http://localhost:8080，那么没有设置 baseURL 的情况下，
完整的请求URL将是 http://localhost:8080/api/users。
设置了 baseURL 为 http://localhost:8080 后，你只需写 /api/users 来发起请求，
Axios 会自动将 baseURL 和你提供的路径组合起来，形成完整的URL*/