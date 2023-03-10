import React from 'react'
import "./home.css"
import Topbar from "../../components/topbar/Topbar"
import Leftbar from "../../components/leftbar/Leftbar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

export default function Home() {
  return (
    <>
      <div className="topbar">
        <Topbar />
      </div>
      <div className="content">
        <Leftbar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}
