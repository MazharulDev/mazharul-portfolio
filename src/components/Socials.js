import React from 'react';

// import icons
import { social } from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-6 '>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center text-accent'
            key={index}
          >
            <a className='text-white hover:text-accent hover:scale-105' href={item.href} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
