import React, { useEffect } from 'react'
import Head from 'next/head'
import Typed from 'typed.js'
import { SocialIcon } from 'react-social-icons';

const Home = () => {

  useEffect(() => {
    const options = {
      strings: ['Well...^1000 here it is,', 'Welcome to my site'],
      typeSpeed: 40,
      backSpeed: 20,
    }
    const typed = new Typed('#typed-header', options)

    return () => {
      typed.destroy();
    }
  })

  const socialStyles= {
    margin: '8px'
  }

  return (
    <>
      <Head>
        <meta
           name="viewport"
           content="width=device-width,minimum-scale=0.5,initial-scale=1"
         />
      </Head>
      <div className="container">
        <div className="home">
          <div className="typed-container">
            <span id='typed-header'/>
          </div>
          <div className="social-links">
            <SocialIcon
              url="https://www.linkedin.com/in/jon-c-park/"
              style={socialStyles}
            />
            <SocialIcon
              url="https://github.com/jonparkdev"
              bgColor="black"
              style={socialStyles}
            />
            <SocialIcon
              url="mailto:jon@jonathanpark.ca"
              bgColor="rgb(203, 33, 40)"
              style={socialStyles}
            />
            <SocialIcon
              url="https://www.instagram.com/jonparkmuaythai"
              bgColor="#fcb045"
              style={socialStyles}
            />
          </div>
          <div className="about-me">
            Aspiring Programmer, Philosopher and Mathematician
          </div>
        </div>
        <style jsx>
          {`
            .container {
              height:100%;
              display: flex;
              justify-content: center;
            }
            .home {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 16px;
              margin-bottom: 108px;
              width: 100%;
            }
            .typed-container {
              font-size: 88px;
              min-width: 960px;
              margin-bottom: 8px;
              text-align: center;
            }
            .social-links {
              display: flex;
            }
            .about-me {
              font-size:24px;
              max-width: 768px;
              margin: 8px; auto;
            }

            @media (max-width: 991px){
                .typed-container {
                  font-size: 72px;
                  min-width: 720px;
                }
            }
            @media (max-width: 768px){
                .typed-container {
                    font-size: 60px;
                }
                .about-me{
                    text-align: center;
                }
            }

            @media (max-width: 576px){
                .typed-container {
                    font-size: 36px;
                    margin-bottom: 16px;
                }
                .about-me{
                    text-align: center;
                    font-size: 20px;
                }
                .home {
                    margin-bottom: 64px;
                    padding: 8px;
                }
            }
          `}
        </style>
      </div>
    </>
  )
}



export default Home
