import React from 'react'
import "./register.css"
export default function Register() {
    return (
        <div className="login">
            <div className="card">
                <div className='registerForm'>
                    <div className="brandName">
                        Instagram
                    </div>
                    <div className=" inputItem form-group">

                        <input className='input' placeholder='Email address' type="text" />
                    </div>
                    <div className=" inputItem form-group">

                        <input className='input' placeholder='Phone number' type="text" />
                    </div>
                    <div className=" inputItem form-group">

                        <input className='input' placeholder='username' type="text" />
                    </div>
                    <div className=" inputItem form-group">

                        <input className='input' placeholder='Password' type="text" />
                    </div>
                    <button className='btn btn-primary'>Register</button>
                </div>


                <hr className='hrTag' />

            </div>
            <div className="card">
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
