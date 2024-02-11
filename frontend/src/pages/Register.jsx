import React, { useState } from 'react'
import { useAuth } from '../store/Auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [user, setUser] = useState({
     username: "",
     email: "",
     phone: "",
     password: "",
  });
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  // handling the inputs
  const handleInput =  (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name] : value,
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(user);
    try{
    const response = await fetch(`http://localhost:3200/api/auth/register`,{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if(response.ok) {

      const res_data = await response.json();
      console.log("res from server", res_data);

      // store the token in local storage
      storeTokenInLS(res_data.token);

      setUser({
        username: "",
        email: "",
        phone: "",
        password: "",
      })
      navigate("/login");
    }
    console.log(response);
  }catch(error) {
      console.log("register", error);
  }
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
