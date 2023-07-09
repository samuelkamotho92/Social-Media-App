import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'
const SignIn = () => {
  return (
    <div className='signin'>
  <div className='details'>
<div className='banner'>
<h1 className='title'>Let's talk</h1>
<p className='content'>Best social media application,enjoy real time messaging with friends and 
    group chats also not forgetting video calls
</p>
<span>Not having an account?</span>
<button>
  <Link to='/register'>
  Register
  </Link>
  </button>
</div>
<div className='maincontent'>
<h1>Sign In</h1>
<form>
<input type="text" placeholder='username' required/>
<input type="password" placeholder='password' required/>
<button type='submit'>Sign In</button>
</form>
</div>
  </div>
    </div>
  )
}

export default SignIn