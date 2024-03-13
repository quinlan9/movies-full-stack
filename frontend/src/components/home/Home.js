import Hero from '../hero/Hero';
import { useEffect } from 'react';

const Home = ({movies}) => {
  console.log("Home 组件渲染");
  //console.log("Home组件接收到的movies状态:", movies); 不会执行因为
  //因为它被包裹在函数组件 Home 的函数体内。函数组件的函数体只会在初始渲染时执行一次,之后的 prop 更新不会再执行函数体。// 监控movies状态更新
  
  useEffect(() => {
    console.log("Home组件接收到的movies状态:", movies);
  }, [movies]);

  return (
    <Hero movies={movies} />
  )
}


export default Home
