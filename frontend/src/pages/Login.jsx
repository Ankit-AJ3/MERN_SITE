import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/Auth';

const Login = () => {

  const [user, setUser] = useState({
     email: "",
     password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

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

  const handleSubmit = async (e) =>{
      e.preventDefault();
    try {
      const response = await fetch (`http://localhost:3200/api/auth/login`,{
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("login form",response);
      if(response.ok){
        const res_data = await response.json();
        console.log("res from server",res_data);

        // stored the token in localhost
        storeTokenInLS(res_data.token);

        alert("login successfull");
        console.log("login successfull");
        setUser({email: "", password: ""});
        navigate("/");
      }else{
        alert("Invalid credential");
        console.log("Invalid credential");
      }
    } catch (error) {
      console.log(error);
    }
    };

  return (
    <>
      <section>
        <main>
          <div className='section-registration'>
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
