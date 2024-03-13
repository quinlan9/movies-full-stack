import './App.css';
import api from './api/axiosConfig';
import { useState,useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';
import LoginForm from './components/loginForm/LoginForm';
import RegisterForm from './components/loginForm/RegisterForm';
import SearchBar from './components/searchBar/SearchBar';

function App() {

  const [movies,setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);


  const  getMovies = async () =>{
    try{
      const token = localStorage.getItem('basicToken'); // 从LocalStorage获取token
      const response = await api.get("/api/v1/movies",{
        headers: {
          'Authorization': `Basic ${token}` // 加入Authorization头
        }
      });
      
      console.log(response.data);

      setMovies(response.data);

    }catch(err){
      console.log(err);
    }
   
  }

  const getMovieData= async (movieId) =>{
    try {
      const token = localStorage.getItem('basicToken'); // 从LocalStorage获取token
      const response = await api.get(`/api/v1/movies/${movieId}`,{
        headers: {
          'Authorization': `Basic ${token}` // 加入Authorization头
        }
      });

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  },[])



//父组件定义了一个名为 onSearchResults 的函数,用于处理子组件传递过来的搜索结果
const onSearchResults = (results) => {
  console.log("onSearchResults 函数被调用");
  // 使用搜索结果来更新你的状态，例如：
  console.log("搜索结果:", results);  //成功
  setMovies(results);
};
//父组件将 onSearchResults 函数作为 prop 传递给子组件 SearchBar。 
//element={<SearchBar onSearchResults={onSearchResults}

useEffect(() => {
  console.log("movies 状态更新前");
  console.log("Updated movies state:", movies);//成功
}, [movies]); // 这个useEffect用于监视movies状态的更新

console.log("App 组件重新渲染");

  

  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} />}></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
            <Route path="/register" element={<RegisterForm />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/search" element={<SearchBar onSearchResults={onSearchResults} />}></Route> 
            </Route>
        </Routes>

    </div>
  );

}

export default App;








