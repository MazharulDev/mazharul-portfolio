import React from 'react';

// import My image
import MyImg from '../assets/img/main-photo.png';
// import resume 
import Resume from './Mazharul_resume .pdf'

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start' data-aos="fade-right" data-aos-offset="300"
            data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <p className='text-2xl text-accent text-md mb-[18px] mt-14'>
              Hey, I'm Mazharul! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Front-end <br /> Web developer.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              I’m a Web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building react native,nextjs.
            </p>
            <a data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="2000" href={Resume} download target="_blank" rel="noreferrer" className='btn btn-md mb-4 bg-accent text-lg hover:bg-secondary-hover md:btn-lg transition-all'>
              Resume
            </a>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full' data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1000">
            <img src={MyImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
