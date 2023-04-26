import React, { useEffect, useState } from 'react'

const SearchCard = ({info}) => {
    console.log(info)
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails } = snippet;
  return (
    <div className='flex '>
        <div >
        <img src={thumbnails.medium.url} alt="" />
        </div>
        <div className='ml-6'>
          <h2 className='text-[20px] font-bold'>{title}</h2>
        </div>
    </div>
  )
}

export default SearchCard