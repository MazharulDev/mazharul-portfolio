import React from 'react';

// import My image
import WomanImg from '../assets/img/main-photo.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-2xl text-accent text-md mb-[18px] mt-14'>
              Hey, I'm Mazharul! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Mern stack <br /> Web developer.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              I’m a Web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building react native,nextjs.
            </p>
            <a href='https://drive.google.com/file/d/1bVFT5u8-lJGhsh_wTsYP_xbRwS0JuWmH/view?usp=sharing' target="_blank" rel="noreferrer" className='btn btn-md bg-accent text-lg hover:bg-secondary-hover md:btn-lg transition-all'>
              Resume
            </a>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;