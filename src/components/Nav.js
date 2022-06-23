import React from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        <li


        >

        </li>

        <Link className='text-white hover:text-accent cursor-pointer transition-all' to='/'>Home</Link>
        <a className='text-white hover:text-accent cursor-pointer transition-all' href="home#about">About</a>
        <a className='text-white hover:text-accent cursor-pointer transition-all' href="home#portfolio">Portfolio</a>
        <a className='text-white hover:text-accent cursor-pointer transition-all' href="home#testimonials">Testimonials</a>
        <Link className='text-white hover:text-accent cursor-pointer transition-all' to="/blog">Blog</Link>
        <a className='text-white hover:text-accent cursor-pointer transition-all' href="home#contact">Contact</a>
      </ul>
    </nav>
  );
};

export default Nav;
