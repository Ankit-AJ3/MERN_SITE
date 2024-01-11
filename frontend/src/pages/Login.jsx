import React, { useState } from 'react'

const Login = () => {

  const [user, setUser] = useState({
     email: "",
     password: "",
  });

  // handling the inputs
  const handleInput = (e) =>{
    // console.log(user);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name] : value,
    });
  };

  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(user);
  };

  return (
    <>
      <section>
        <main>
          <div className='section-login'>
            <div className='container grid grid-two-cols'>
              <div className='login-image'>
                <img src='/images/login.png' alt='login_image' width='500' height='500'/>
              </div>
              <div className='registration-form '>
                <h1 className='main-heading mb-3'>Login Form</h1>
                <br/>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>email</label>
                        <input type='text' name='email' id='email' placeholder='Enter your email' required autoComplete='off'
                          value={user.email} onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>password</label>
                        <input type='password' name='password' id='password' placeholder='password' required autoComplete='off'
                          value={user.password} onChange={handleInput}
                        />
                    </div>
                    <br/>
                    <button type="Submit" className='btn btn-submit'>Login Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Login;
