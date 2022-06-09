import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';


const Home = () => {
    return (
        <div className='bg-white relative'>
            <Header />
            <Hero />
            <About />
            <Skills />
        </div>
    );
};

export default Home;