import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails } = snippet;
  return (
    <div className='p-2 m-2 w-72'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnails" />
        <h1 className='text-[15px] font-bold'>{title}</h1>
        <h3 className='text-[14px]'>{channelTitle}</h3>
        <h3 className='text-[14px]'>{statistics.viewCount} views</h3>
    </div>
  )
}

export default VideoCard