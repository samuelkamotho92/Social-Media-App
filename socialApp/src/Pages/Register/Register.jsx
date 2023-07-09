import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className='register'>
<div className='details'>
<div className='right'>
<h1>Sign up</h1>
<form>
    <div className='credit'>
<input type="text" placeholder='username' required/>
<input type="email" placeholder='email' required/>
    </div>
    <div className='password'>
    <input type="password" placeholder='password' required/>    
    </div>
    <div className='passwordConfirm'>
    <input type="password" placeholder='passwordConfirm' required/>    
    </div>
    <div className='policy'>
        <input type="checkbox" />
        <span>
            Accept terms  and conditions for the policy
        </span>
    </div>
    <div className='accountLogin'>
<h4>Already having an account?</h4>
<Link to='/login'>Login</Link>
    </div>
<button type='submit'>Register</button>
</form>
</div>
<div className='left'>
</div>
      </div>
    </div>
  )
}

export default Register
