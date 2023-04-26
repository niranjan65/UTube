import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const [serachParams] = useSearchParams();
  console.log(serachParams.get("v"))
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div className="px-5">
      {/* <iframe
        width="1200"
        height="500"
        src={`https://www.youtube.com/embed/${serachParams.get("v")}&autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}
      <iframe
        class="youtube-player"
        type="text/html"
        width="1200"
        height="500"
        src={`http://www.youtube.com/embed/${serachParams.get("v")}?wmode=opaque&autohide=1&autoplay=1&volume=0&vol=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
        &lt;br /&gt;
      </iframe>
    </div>
  );
}

export default WatchPage