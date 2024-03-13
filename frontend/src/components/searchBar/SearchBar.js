import React, { useState } from 'react';
import api from '../../api/axiosConfig';

const SearchBar = ({ onSearchResults }) => {

    const [query,setQuery] = useState('');

    const handleSearch = async() =>{
        try{
            const token = localStorage.getItem('basicToken');
            const response = await api.get(`/api/v1/movies/search?query=${query}`, {
                headers: {
                    'Authorization': `Basic ${token}`
                }
            });
            console.log("search successfully");
            onSearchResults(response.data); // 将结果传给父组件
        }catch(error){
            console.error("search failed");
        }
    }


  return (
    <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar
