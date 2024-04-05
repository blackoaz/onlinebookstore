import React from 'react'
import { useDispatch } from 'react-redux'
import {loginUser} from '../store/log-slice'

function LoginPage() {
  const dispatch = useDispatch()
  const handleLogIn = (e) =>{
    e.preventDefault()
    dispatch(
      loginUser()
    )
  }
    
  return (
    <div className='container login-page'>
        <div className='login-form'>
        <h1 className="main-head">ONLINE BOOK STORE</h1>
            <form className='form-sec' onSubmit={handleLogIn}>
                <h3>LOGIN PAGE</h3>
                <div className='login-username'>
                <label>Enter Your Username</label><br />
                <input type='text' />
                </div>
                <div className='login-passwd'>
                <label>Enter Your Password</label><br />
                <input type='password' />
                </div><br/>

                <div className='login-btn'>
                    <button type='submit'>LOGIN</button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default LoginPage