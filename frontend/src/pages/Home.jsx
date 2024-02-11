import React from 'react'
import Analatics from '../components/Analatics'

const Home = () => {
  return (
    <>
      <main>
          <section className='section-hero'>
            <div className='container grid grid-two-cols'>
                <div className='hero-content'>
                  <p>We are the world best IT Company</p>
                  <h1>Welcome to my Techincal World</h1>
                  <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose </p>
                  <div className='btn btn-group'>
                    <a href='/contact'>
                       <button className='btn'>Connect Now</button>
                    </a>
                    <a href='/services'>
                       <button className='btn secondary-btn'>Learn More</button>
                    </a>
                  </div>
                </div>
                <div className='hero-image'>
                   <img src='/images/code.png' alt='code together' width={500} height={500}/>
                </div>
            </div>
          </section>
       </main>
        <Analatics/>

       {/* 3red section */}
       <section className='section-hero'>
            <div className='container grid grid-two-cols'>
            <div className='hero-image'>
                   <img src='/images/design.png' alt='code together' width={500} height={500}/>
                </div>
                <div className='hero-content'>
                  <p>We are here to help you</p>
                  <h1>Get Started Today</h1>
                  <p> Ready to take the first step towards a more efficient and secure It infrastructure? Contact us today for a free consultant and let's discuss how AJ can help your business thrive in the digital age. </p>
                  <div className='btn btn-group'>
                    <a href='/contact'>
                       <button className='btn'>Connect Now</button>
                    </a>
                    <a href='/services'>
                       <button className='btn secondary-btn'>Learn More</button>
                    </a>
                  </div>
                </div>
            </div>
          </section>
    </>
  )
}

export default Home
