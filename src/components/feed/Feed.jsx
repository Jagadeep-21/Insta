import React from 'react'
import Post  from '../Post/Post'
import "./feed.css"
import Story from "../storiesSections/Story"

export default function Feed() {
  return (
    <div className="feed">
     <div className="feedWrapper">
     <Story/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     </div>
    </div>
    

  )
}
