import React from 'react'
import "./post.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import IosShareIcon from '@mui/icons-material/IosShare';
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="details">
            <div className="username">
              username
            </div>
            <div className="place">
              place
            </div>
            <div className="time">
              time
            </div>
          </div>
        </div>
        <div className="postContent">
         <img className='postImage' src="./image1.jpg" alt="" />
        </div>
        <div className="postIcons">
          <FavoriteBorderOutlinedIcon className='Icons' />
          <ModeCommentOutlinedIcon className='Icons' />
          <IosShareIcon className='Icons'/>
        </div>
      </div>
    </div>
  )
}
