import React from 'react'
import { Link } from 'react-router-dom'

import left from '../../images/1/Left_side.png'
import discode from '../../images/1/discode.png'
import linkedin from '../../images/1/linkedin.png'
import google from '../../images/1/google.png'
import twitter from '../../images/1/twiterr.png'
import apple from '../../images/1/apple.png'
import git from '../../images/1/git.png'
import logo1 from '../../images/1/logo1.png'
import logo2 from '../../images/1/logo2.png'



function Sign_in() {
  return (
    <div className="sign_con">
      <div className="sign_main">
        <Logo/>
        <div className="left_sign">
            <img src={left} alt="" />
            <h1 className='heading'>BASE</h1>
            <Icons />
        </div>
        <div className="right_sign">
          <h1 className='sign_h1'>Sign in</h1>
          <p>Sign in to your account</p>
          <div className="sub_task">
            <div className="g1">
              <img src={google} alt="" />
              <p>Sign in with Google</p>
            </div>
            <div className="g1">
              <img src={apple} alt="" />
              <p>Sign in with Apple</p>
            </div>
          </div>
          <div className="sign_form">
            <div className="form">
              <p>Email address</p>
              <input type="email" placeholder='plese enter your email id' />
              <p>Password</p>
              <input type="password" placeholder='enter password' />
            </div>
            <a href="">Forgot Password ?</a>
            <button className='sign_in_btn'>
              <Link to='/upload' className='btn'>Sign in</Link>
              </button>
          </div>
          <p className='reg'>Dont have an account?<br className='break'/><a href="">Register now</a></p>

          <Icons className='iconss'/>
        </div>
        
      </div>
    </div>
  )
}


const Logo=()=>{
  return (
    <div className="nav">
      <div className="log">
        <img className='logo1' src={logo1} alt=""/>
        <img className='logo2' src={logo2} alt=""/>
      </div>
      <div className="name">
        <h1>Base</h1>
      </div>
    </div>
  )
}

const Icons=()=>{
  return(
    <div className="icon_con">
      <div className="icons">
        <img src={git} alt="" />
        <img src={twitter} alt="" />
        <img src={linkedin} alt="" />
        <img src={discode} alt="" />
      </div>
    </div>
  )
}

export default Sign_in