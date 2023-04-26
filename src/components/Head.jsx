import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store)=>store.search);

  useEffect(()=>{
    
    
    const timer = setTimeout(()=> {
      if(searchCache[searchchQuery]){
        setSuggestion(searchCache[searchchQuery])
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return ()=>{
      clearTimeout(timer)
    };

  },[searchchQuery])

  const getSearchSuggestions= async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestion(json[1]);
    dispatch(cacheResults({
      [searchchQuery]: json[1]
    }))
  }

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-5 m-2  shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 mx-2 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-8"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
        <input
          value={searchchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          type="text"
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=> setShowSuggestion(false)}
        />
        
        <button 
            className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
          Search
        </button>
        
        </div>
        {showSuggestion && <div className='sticky bg-white py-2 px-2 w-[36rem] rounded-lg shadow-lg border border-gray-100'>
          <ul>
            {
              suggestion.map((s, idx)=> <li key={idx} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>)
            }
            
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
          alt="user-logo"
        />
      </div>
    </div>
  );
}

export default Head