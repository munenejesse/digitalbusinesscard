import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import twitterlogo from './assets/twitter.svg'
import facebooklogo from './assets/facebook.svg'
import instagramlogo from './assets/instagram.svg'
import githublogo from './assets/github.svg'
import heroImage from './assets/hero-img.png'
import linkedInlogo from './assets/linkedin.svg'
import maillogo from './assets/mail.svg'
import screenModeLogo from './assets/sun.svg'
import './App.css'

function App() {

  return (
    <div className=' min-h-screen max-w-screen overflow-hidden grid'>
      <main className='relative md:max-w-3xl grid  sm:grid-cols-2  mx-auto my-auto rounded-xl shadow-md sm:max-h-full'>
        <div className='w-16 h-16  absolute top-0 right-0'><button><img src={screenModeLogo} alt="" className='bg-red-500' /></button> </div>
        <section className='grid justify-between'>
          <img src={heroImage} alt="" className='' />
          <div className=' p-8 grid gap-2 text-center'>
            <h1 className='text-4xl font-bold'>Thiago Silva</h1>
            <p className='text-orange-400 text-xl'>Frontend Developer </p>
            <a href="#" className='text-base text-blue-950'>laurasmith.co.ke</a>
            <div className=' flex gap-8 '>
              <button className='border border-gray-200 w-full rounded-md px-6 py-3 bg-stone-50 hover:bg-stone-100 shadow-lg flex justify-center items-center gap-2 '><img src={maillogo} alt="" />Email</button>
              <button className='border border-gray-200 w-full rounded-md px-6 py-3 bg-blue-500 hover:bg-blue-700 shadow-lg flex justify-center items-center gap-2 text-stone-50'><img src={linkedInlogo} alt="" />linkedIn</button>
          </div>
          </div>
        </section>
        <section className='px-8 grid gap-10 justify-between '>
          <div>
            <h2 className='text-3xl mb-3 font-semibold'>About</h2>
            <p className='text-base'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          </div>
          <div>
            <h2 className='text-3xl mb-3 font-semibold'>Interests</h2>
            <p className='text-base'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
          <footer className=' grid content-end mb-8 '>
            <div className='rounded-lg flex justify-around p-4 bg-slate-300'>
              <a href=""><img src={twitterlogo} alt="" className='w-10' /></a>
              <a href=""><img src={facebooklogo} alt="" className='w-10'/></a>
              <a href=""><img src={instagramlogo} alt="" className='w-10'/></a>
              <a href=""><img src={githublogo} alt="" className='w-10'/></a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
