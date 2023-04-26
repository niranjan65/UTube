import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const toggleMenu = useSelector((store)=>store.app.isMenuOpen);

    if(!toggleMenu) {
        return null;
    }
  return (
    <div className='p-5 shadow-lg w-48'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shorts'>Shorts</Link></li>
            <li><Link to='/subscription'>Subscription</Link></li>
        </ul>
        <h1 className='font-bold mt-5'>Subscription</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold mt-5'>Watch later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar