import React from 'react';
import About from '../components/About';
import BackTopBtn from '../components/BackTopBtn';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';


const Home = () => {
    return (
        <div className='bg-white relative'>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Testimonials />
            <BackTopBtn />
            <Contact />
            <Footer />

        </div>
    );
};

export default Home;