import React from 'react';


// import logo
import Logo from '../assets/img/logo.png';


const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>

          <div>
            <img src={Logo} alt='' />
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            Designed & Built by Mazharul islam

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
