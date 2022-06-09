import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';


const Home = () => {
    return (
        <div className='bg-white relative'>
            <Header />
            <Hero />
            <About />
        </div>
    );
};

export default Home;