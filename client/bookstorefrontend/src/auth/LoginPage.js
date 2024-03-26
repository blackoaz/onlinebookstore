import React from 'react'

function LoginPage() {
    
  return (
    <div className='container login-page'>
        <div>
            <form>
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