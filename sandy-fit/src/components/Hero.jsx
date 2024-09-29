import React from 'react'

function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        
        <div className='flex flex-col gap-4'> 
            <p>IT'S TIME TO GET</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>SANDY<span className='text-blue-400'>NORMOUS</span></h1>

        </div>

        <div>
            <p className='text-sm md:text-base font-light'>Looking to feel your best? Our friendly and supportive gym <span className='text-blue-400 font-medium'>community</span> is here to help you reach your fitness <span className='text-blue-400 font-medium'>goals</span>. With a variety of classes, state-of-the-art equipment, and personalized training, we’ll guide you every step of the way. Join us and discover the joy of a healthy, active lifestyle.</p>

        </div>

        <button className='px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'>
            <p>Accept and Begin</p>
        </button>


       





    </div>
  )
}

export default Hero