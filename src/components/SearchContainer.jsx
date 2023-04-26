import React, { useEffect, useState } from 'react'
import SearchCard from './SearchCard'
import { Link } from 'react-router-dom';

const SearchContainer = () => {

  const [videoData, setVideoData] = useState([]);
    useEffect(()=>{
        getSearchInfo();
    },[])
    const name = "sourav joshi vlogs";
    const API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${name}%20dog&type=video&videoDefinition=high&maxResults=50&key=AIzaSyBD1c7WiUwyzUGpZO6G9imKXhswKw9DYGY`

    const getSearchInfo = async()=>{
        const data = await fetch(API);
        const json = await data.json();
        console.log(json.items)
        setVideoData(json.items)
    }
  return (
    <div className='flex flex-col gap-5'>

      {
            
            videoData.map((video)=>
            <Link to={`/watch?v=${video.id.videoId}`}>
             <SearchCard key={video.id} info={video}/> 
             </Link>
             )
        }
      
    </div>
  )
}

export default SearchContainer