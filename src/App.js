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


function App() {

  const [movies,setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);


  /*将从API获取到的电影数据保存到movies状态中
  setmovies是一个更新函数,用于更新movies状态*/
  const  getMovies = async () =>{
    try{

      const response = await api.get("/api/v1/movies");
  
      console.log(response.data);

      setMovies(response.data);

    }catch(err){
      console.log(err);
    }
   
  }

  const getMovieData= async (movieId) =>{
    try {
      
      const response = await api.get(`/api/v1/movies/${movieId}`);

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
  /* useEffect本身不是箭头函数,是一个React Hook，接受两个参数：
  第一个参数是一个函数（可以是箭头函数或普通函数），用于执行副作用操作；
  第二个参数是一个依赖项数组，用来控制这个副作用函数何时执行
  eg:
  const [user, setUser] = useState(null);
const userId = props.userId; // 假设这是从父组件传入的props

useEffect(() => {
  const fetchUserData = async () => {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const userData = await response.json();
    setUser(userData);
  };

  fetchUserData();
}, [userId]); // userId作为依赖项
每当userId变化时，useEffect内的函数就会执行，从而获取并更新新用户的数据。
  */ 

  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies}/>}></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
  
            </Route>
        </Routes>

    </div>
  );
}

export default App;








