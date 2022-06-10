import React from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        <li
          className='text-white hover:text-accent cursor-pointer'

        >

        </li>

        <Link to='/'>Home</Link>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#testimonials">Testimonials</a>
        <Link to="/blog">Blog</Link>
        <a href="#contact">Contact</a>
      </ul>
    </nav>
  );
};

export default Nav;
