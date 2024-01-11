import React, { useState } from 'react'

const Register = () => {

  const [user, setUser] = useState({
     username: "",
     email: "",
     phone: "",
     password: "",
  });

  // handling the inputs
  const handleInput = (e) =>{
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
          <div className='section-registration'>
            <div className='container grid grid-two-cols'>
              <div className='registration-image'>
                <img src='/images/registration.png' alt='registration_image' width='500' height='500'/>
              </div>
              <div className='registration-form '>
                <h1 className='main-heading mb-3'>Registration Form</h1>
                <br/>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' id='username' placeholder='username' required autoComplete='off' 
                        value={user.username} onChange={handleInput}/>
                    </div>
                    <div>
                        <label htmlFor='email'>email</label>
                        <input type='text' name='email' id='email' placeholder='Enter your email' required autoComplete='off'
                          value={user.email} onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor='phone'>phone</label>
                        <input type='number' name='phone' id='phone' placeholder='phone' required autoComplete='off'
                          value={user.phone} onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>password</label>
                        <input type='password' name='password' id='password' placeholder='password' required autoComplete='off'
                          value={user.password} onChange={handleInput}
                        />
                    </div>
                    <br/>
                    <button type="submit" className='btn btn-submit'>Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Register;
