import React, { useState } from 'react';
import { useAuth } from '../store/Auth';


const Contact = () => {

    const [contact, setContact] = useState({
      username:"",
      email:"",
      message:"",
    });

    const [userData, setUserData] = useState(true);

    const { user } = useAuth();

    if(userData && user){
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }

    const handleInput = (e) =>{
        const name =e.target.name;
        const value =e.target.value;
        console.log(contact);

        setContact({
          ...contact,
          [name]: value,
        });
    };

  return (
    <>
      <section className='section-contact'>
          <div className='contact-content container'> 
             <h1 className='main-heading'>Contact Us</h1>
          </div>
          {/* contact page main */}
            <div className='container grid grid-two-cols'>
                <div className='contact-img'>
                    <img src='/images/contactus.png' alt='we are always ready to help' width={600} height={500}/>
                </div>
                <div className='section-form'>
                   <form>
                      <div>
                          <label htmlFor='username'>Username</label>
                          <input type="text" name='username' id='username' autoComplete='off' required value={contact.username} onChange={handleInput}></input>
                      </div>
                      <div>
                          <label htmlFor='email'>Email</label>
                          <input type="email" name='email' id='email' autoComplete='off' required value={contact.email} onChange={handleInput}></input>
                      </div>
                      <div>
                        <label htmlFor="message">Message</label>
                        <textarea name='message' id='message' autoComplete='off' required cols='30' rows='6'value={contact.message} onChange={handleInput}></textarea>
                      </div>
                      <div>
                          <button type="submit">Submit</button>
                      </div>
                   </form>
                </div>
            </div>
            <section className='mb-3'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59783.37883519841!2d76.1453485783928!3d20.528303268105798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda1df8cd6d9cb1%3A0x5f36a09324f0bb4d!2sBuldana%2C%20Maharashtra%20443001!5e0!3m2!1sen!2sin!4v1704983029588!5m2!1sen!2sin" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
          </section>
    </>
  )
}

export default Contact
