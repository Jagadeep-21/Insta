import React from 'react'
import "./login.css"
export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="loginTop">
         
          <div className="loginForm">
          <div className="brandName">
            Instagram
          </div>
            <div className=" inputItem form-group">
           
            <input className='input'  placeholder='username' type="text" />
            </div>
            <div className=" inputItem form-group">
            
            <input className='input' placeholder='Password' type="text" />
            </div>
            <button className='btn btn-primary'>login</button>
          </div>
          
        </div>
        <hr className='hrTag' />
        <div className="loginBottom">
        
          <div className="loginVia">
            with facebook
          </div>
          <a href="/register" className="registerLink">Register</a>
        </div>
      </div>
    </div>
  )
}
