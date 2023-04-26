import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["All", "Gaming", "Computer Programming", "Song", "Live", "Editing", "Gadgets", "Podcasts", "Comedy", "Action-adventure Games", "NEET"]
  return (
    <div className='flex'>
        {
            list.map((e)=>{
                return <Button name={e}/>
            })
        }
    </div>
  )
}

export default ButtonList