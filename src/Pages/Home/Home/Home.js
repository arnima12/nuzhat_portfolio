import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;