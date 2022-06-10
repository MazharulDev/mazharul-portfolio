import React from 'react';

// import My image
import Image from '../assets/img/about.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row items-center gap-24'>
          <img data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Mazharul Islam
              </h2>
              <p className='mb-4 text-accent'>
                Mern stack web developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p>
                Hello! My name is Mazharul and I enjoy making things that live on the internet. My interest in web development started back in 2019
                when let's create a small project with HTML and CSS.

                <br />
                <br />
                Now I create several e-commerce and manufacturing websites.After learning JavaScript, I created some more projects with React JS.
                <br />

                Here are a few technologies I’ve been working with recently:
                <br />

              </p>
              <ul className='flex mb-3'>
                <li className='mr-3'>JavaScript (ES6)</li>
                <li className='mr-3'>React js</li>
                <li className='mr-3'>Node js</li>
                <li>Typescript</li>
              </ul>
            </div>
            <button className='btn text-white bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
